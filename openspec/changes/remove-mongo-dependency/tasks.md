# Tasks

Commit gate used at the end of each group: the `/commit` skill referenced by `openspec/config.yaml` is not in this repository, so the same gate runs by hand. `pnpm build`, `pnpm lint`, `pnpm check-types` and `pnpm test` must pass, then the group is committed after user approval. Commit messages follow `CLAUDE.md` (Conventional Commits, no AI attribution lines).

Integration and E2E checks in an environment without Docker use the local PostgreSQL 16 and Redis procedure in design.md D10. The evidence goes to `notes.md`.

Order note: Mongo stays wired into `SharedModule` until group 7. Suites that boot a whole app (`AppModule`) can only run without a Mongo container after that, so they are ported in group 7. Groups 1 and 2 test against Postgres through lean modules (`ConfigModule` + `DatabaseModule`).

## 1. Audit table with append-only triggers

- [ ] 1.1 test(database): apps/api: write `test/audit-event-table.integration.ts`, a lean `TestingModule` with `ConfigModule.forRoot()` and `DatabaseModule` only (spec `audit-log`, "Audit events are immutable"). It inserts an event with raw SQL, then asserts:
  - an `UPDATE` of it fails with the trigger's error and leaves the row unchanged;
  - a `DELETE` of an event whose `expireAt` is in the future fails and leaves the row;
  - a `DELETE` of an event whose `expireAt` is in the past succeeds;
  - `TRUNCATE` succeeds (the test helper relies on it).

  Verify: the suite fails because `audit_event` does not exist (D10 run, output in notes.md).
- [ ] 1.2 feat(database): packages/database: add the `AuditEvent` model (design D1) and create migration `create_audit_event` with `--create-only`, then append the two trigger functions and triggers (D2). Verify:
  - 1.1 passes under D10;
  - `pnpm --filter @repo/database exec prisma migrate diff --from-migrations prisma/migrations --to-schema prisma --exit-code` reports no difference (the triggers cause no drift);
  - `pnpm db:generate` succeeds.
- [ ] 1.3 docs(database): .github/instructions/database-conventions.instructions.md and CLAUDE.md: record the append-only exception (no `createdAt`, `updatedAt` or `deletedAt` and no foreign keys on `audit_event`, D1) and that its triggers live in hand-written migration SQL. Verify: both files name `audit_event` and the exception.
- [ ] 1.4 build(database): commit group 1 after the commit gate passes and the user approves. Verify: commit present on the branch.

## 2. AuditStore in packages/shared

- [ ] 2.1 test(shared): packages/shared: write `src/audit/audit.store.spec.ts` with `DatabaseService` mocked (design D3). It covers:
  - `insert` passes every field and never uses a transaction client;
  - `find` builds equality filters, the `occurredAt` range and the case-insensitive `OR` on `actorEmail`/`attemptedEmail`;
  - `find` orders by `occurredAt desc, id desc`, applies `skip`/`take` and runs `findMany` and `count` in one `$transaction`;
  - rows map `NULL` columns and an empty `changedFields` to absent properties and drop `expireAt`;
  - `purgeExpired(batchSize)` loops raw `DELETE` batches until one deletes fewer rows than the batch size, and returns the total.

  Verify: the spec fails because `audit.store.ts` does not exist.
- [ ] 2.2 feat(shared): packages/shared: move `AuditEventFields`, `AuditEventFilter` and `AuditEventRecord` to `src/audit/audit-event.types.ts` (re-exported from the barrel), implement `AuditStore`, and provide and export it from `SharedModule`. Verify: 2.1 passes; `pnpm --filter @repo/shared check-types` passes.
- [ ] 2.3 test(shared): apps/api: write `test/audit-store.integration.ts`, a lean module with `ConfigModule`, `DatabaseModule` and `AuditStore` (spec `audit-log`: "Admins can query audit events", "Audit events are retained for a configurable period"). It covers:
  - an inserted event is returned by `find` with the same fields;
  - an attempted email `Ana@Example.com` matches the filter `ana@example.com`;
  - a failure event without changed fields comes back without a `changedFields` property;
  - `purgeExpired` deletes only expired events and leaves unexpired ones.

  Verify: passes under D10 (output in notes.md).
- [ ] 2.4 refactor(shared): commit group 2 after the commit gate passes and the user approves. Verify: commit present on the branch.

## 3. Audit writers and readers on AuditStore

- [ ] 3.1 test(shared): packages/shared: port `src/audit/audit.service.spec.ts` from a `MongoService` mock to an `AuditStore` mock, keeping every existing case. That includes "a rejected write is logged and reported with the action and correlation ID, and never thrown" (spec `audit-log`, "Audit storage unavailable"). Verify: the spec fails until 3.2.
- [ ] 3.2 refactor(shared): packages/shared: `AuditService` uses `AuditStore.insert`; no other behavior changes. Verify: 3.1 and every other `@repo/shared` audit spec passes.
- [ ] 3.3 test(api): apps/api: port `src/audit/audit-events.controller.spec.ts` to an `AuditStore` mock. Verify: it fails until 3.4.
- [ ] 3.4 refactor(api): apps/api: `AuditEventsController` injects `AuditStore`; route, roles and response DTO unchanged. Verify: 3.3 passes.
- [ ] 3.5 refactor(auth): apps/auth: update the `AUDIT_HOOK_MAX_WAIT_MS` comment in `src/audit/auth-audit.hook.ts` (no Mongo driver) and rename the "Mongo outage" test titles in `src/audit/auth-audit.spec.ts` to "audit storage". The budget stays at 2000 ms. Verify: `pnpm --filter auth test` passes.
- [ ] 3.6 refactor(shared): commit group 3 after the commit gate passes and the user approves. Verify: commit present on the branch.

## 4. Daily retention purge

- [ ] 4.1 test(cron): apps/cron: write `src/audit-retention/audit-retention.cron.spec.ts` (spec `audit-log`, "Expired events are purged"). It covers:
  - the job is scheduled `15 3 * * *` UTC;
  - it calls `AuditStore.purgeExpired` and logs the total;
  - a thrown error is logged and reported to Sentry with `component: audit`, and the job does not rethrow.

  Verify: the spec fails because the job does not exist.
- [ ] 4.2 feat(cron): apps/cron: implement `AuditRetentionCron` (design D4) and register it in `AppModule`. Verify: 4.1 passes; `pnpm --filter cron build` passes.
- [ ] 4.3 feat(cron): commit group 4 after the commit gate passes and the user approves. Verify: commit present on the branch.

## 5. HTTP request logs only on stdout

- [ ] 5.1 test(shared): packages/shared: add to `src/logging/pino.config.spec.ts` the serializer test from design D5 (spec `structured-production-logging`, "Request logs go only to the log output"):
  - `req` serializes to exactly `id`, `method`, `url`, `remoteAddress` and `remotePort`;
  - `res` serializes to `statusCode` only.

  Verify: the test passes against the current config (it pins existing behavior before the interceptor goes).
- [ ] 5.2 refactor(shared): packages/shared: delete `LoggingInterceptor` and its spec, its `APP_INTERCEPTOR` registration and its barrel export. In apps/api: remove the `createLog`/`updateLog` spies from `test/customers.integration.ts`; that suite runs in group 7. Verify: `pnpm --filter @repo/shared test` and `pnpm --filter @repo/shared check-types` pass; a search finds no `LoggingInterceptor` outside `openspec/changes/archive`.
- [ ] 5.3 refactor(shared): commit group 5 after the commit gate passes and the user approves. Verify: commit present on the branch.

## 6. Email, job and event logs without personal data

- [ ] 6.1 test(mail): packages/mail: update `src/mail.service.spec.ts` and `src/providers/brevo.provider.spec.ts` (spec `structured-production-logging`, "Outgoing emails are logged without personal data"). They cover:
  - a successful send logs one object with outcome `sent`, attempt, subject, recipient count, `messageId` and correlation ID, and no address, name, params or text;
  - a failure logs outcome `failed`, attempt, `errorName` and `statusCode`, and no error message;
  - a development redirect logs the caller's subject and neither the original recipients nor `devEmail`;
  - Brevo returns `messageId` and logs no address;
  - a delivered email is not retried.

  Verify: the specs fail until 6.2.
- [ ] 6.2 feat(mail): packages/mail: implement design D6 in `MailService`, `MailProvider` and `BrevoProvider`. Drop `MongoService` and the `MongoModule` import, and add the subject rule to the package README. Verify: 6.1 passes; `pnpm --filter @repo/mail check-types` passes.
- [ ] 6.3 test(worker): apps/worker: add to the `EmailConsumer` spec that `process()` runs the handler inside a CLS context whose `CLS_CORRELATION_ID` is `job.data.correlationId`, then implement it (D6). Verify: `pnpm --filter worker test` passes.
- [ ] 6.4 test(shared): packages/shared: update the `BaseProducer` and `BasePublisher` specs (spec `structured-production-logging`, "Queue and event logs carry no payload"). A payload holding an email address and a reset link must not appear in the logged message, while the job name or event pattern and the correlation ID must. Implement D7. Then search `apps/` and `packages/` for logger calls that print `job.data`, `data` or `JSON.stringify` of a payload, and record the findings in notes.md. Verify: the specs pass; the findings are recorded, and any further leak is reported to the user, not fixed silently.
- [ ] 6.5 fix(mail): commit group 6 after the commit gate passes and the user approves. Verify: commit present on the branch.

## 7. Remove MongoDB and port the full-app suites

- [ ] 7.1 chore: create the annotated tag `archive/mongo-last` on the current branch head, the last commit with Mongo code (D8), and push it after the user confirms. Verify: `git ls-remote --tags origin archive/mongo-last` shows it.
- [ ] 7.2 test(shared): packages/shared and apps: update the env specs (spec `env-validation`, via D8):
  - `packages/shared` asserts that `baseEnvSchema` has no `MONGO_URI` key and that parsing an env that still sets `MONGO_URI` succeeds, with the key stripped;
  - `apps/api/src/env.spec.ts` and `apps/auth/src/env.spec.ts` drop `MONGO_URI` from their fixtures;
  - `apps/api/test/unit-env.ts` drops it from `UNIT_TEST_ENV_DEFAULTS`.

  Verify: the new `baseEnvSchema` assertion fails until 7.3.
- [ ] 7.3 refactor(shared): packages/shared: delete `src/mongo/**`, its barrel export and the `MongoModule` import in `SharedModule`; remove `MONGO_URI` from `baseEnvSchema`; remove `mongoose` and `@nestjs/mongoose` from `package.json` and run `pnpm install`. Verify:
  - 7.2 passes;
  - `pnpm build` and `pnpm check-types` pass;
  - `pnpm why mongoose` finds no workspace dependent.
- [ ] 7.4 chore(docker): repository root: remove the `mongo` service, its volume and the commented Mongo `depends_on` entries from `docker-compose.yaml`; delete `docker/mongo.env.example`; remove `MONGO_URI` from every `.env.example`, `.env.development` and `.env.test`; remove the MongoDB prompts, credential rewriting and `mongo.env` copy from `scripts/setup.mjs`. Verify:
  - `docker compose config` parses, or YAML parses where Docker is absent;
  - `node scripts/setup.mjs --help`, or a dry run where supported, starts without error;
  - a search of tracked env files finds no `MONGO_URI`.
- [ ] 7.5 test: packages/testing-utils and apps: remove the Mongo container and the `MONGO_URI` export from `src/e2e/global-setup.ts`; add `TRUNCATE "audit_event"` to `truncateDatabase()`; drop the `MONGO_URI` mentions in `apps/{api,auth}/test/jest.setup.ts`; remove the `MongoService` override from `apps/auth/test/users.integration.ts` (spec `auth-integration-tests`, "Lean integration modules use only real Postgres"). Verify: `pnpm --filter @repo/testing-utils build` passes; a search of `packages/testing-utils` and `apps/*/test` finds no `mongo`.
- [ ] 7.6 test(api): apps/api: port `test/audit.integration.ts` and `test/customers.integration.ts` from `MongoService` to `AuditStore` reads; every existing case is kept. Verify: both suites pass under D10, together with 1.1 and 2.3 (output in notes.md).
- [ ] 7.7 test(auth): apps/auth: port `test/auth.e2e-spec.ts` from `MongoService.findAuditEvents` to `AuditStore.find`. Verify: the auth `test:integration` and `test:e2e` suites pass under D10 (output in notes.md).
- [ ] 7.8 docs: update every developer and operator document that mentions MongoDB (design D8 list). `.claude/CORNER_CASES.md` gets a "Historical (MongoDB removed)" note. Verify: `git grep -n -i mongo` outside `openspec/changes/archive`, `reports/`, `research_notes/`, `docs/design/`, `.agents/skills/` and this change's own folder returns only the `CORNER_CASES.md` historical section.
- [ ] 7.9 refactor!: commit group 7 after the commit gate passes and the user approves, with a `BREAKING CHANGE:` footer stating that `MONGO_URI` and the Mongo service are no longer used. Verify: commit present on the branch.

## 8. Integration verification

- [ ] 8.1 chore: clean-clone run: clone the branch into a scratch directory with no `.env` files, then run the CI sequence from `.github/workflows/ci.yml` (install, `db:generate`, build, lint, check-types, test). Verify: every step exits 0.
- [ ] 8.2 chore: boot check without Mongo, under D10 (local Postgres with migrations applied, local Redis). Start the built `api`, `auth`, `notifications`, `worker` and `cron` apps with no `MONGO_URI`, then once more with a stale `MONGO_URI=mongodb://stale.invalid:27017/x`. Verify:
  - each app answers `GET .../health/ready` with 200, or logs its ready line for apps without HTTP;
  - no log line mentions Mongo;
  - a signed-in admin's `GET /api/v1/audit-events` returns the sign-in event.
- [ ] 8.3 chore: `openspec validate remove-mongo-dependency --strict` passes. Verify: command exits 0.

## Workflow follow-up

- Archive the change after review (`/opsx:archive`).
- When `tenant-isolation-rls` creates the restricted application role, grant it only `INSERT` and `SELECT` on `audit_event` (plus `DELETE` for the purge), and add `organization_id`, actor type and RLS to the table in `organizations-and-membership` and `tenant-isolation-rls`. Add `run_id` in `agent-runtime`.
- Operators remove the Mongo container and volume after deploying (design.md, Migration Plan).
