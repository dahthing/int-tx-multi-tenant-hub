# Design

## Context

See proposal.md (Why). The current Mongo footprint, as read from the code:

- `packages/shared/src/mongo/`: `MongoModule` (global, `MONGO_URI` via `ConfigService`), `MongoService` and three schemas: `AuditEvent` (`audit_events`, per-document `expireAt` TTL, archived design `add-audit-log` D1), `Log` (HTTP request/response, 30-day TTL) and `EmailLog` (30-day TTL). `SharedModule.register()` imports `MongoModule`, so every NestJS app connects to Mongo at boot, and `baseEnvSchema` requires `MONGO_URI`.
- Audit writers:
  - `AuditService.record()` (`packages/shared/src/audit/`) is best-effort, bounds client-controlled fields and keeps only `SAFE_CHANGE_FIELDS` values.
  - In `apps/api`, `AuditInterceptor` calls it fire-and-forget (`void this.audit.record(...)`).
  - In `apps/auth`, `AuthAuditHook` awaits it for at most `AUDIT_HOOK_MAX_WAIT_MS` (2 s).
- Audit reader: `AuditEventsController` (`apps/api`, `GET /api/v1/audit-events`, `@Roles(ADMIN)`) calls `MongoService.findAuditEvents()`. The response schema `auditEventSchema` (`packages/shared-types`) accepts nullish optional fields and strips `expireAt`.
- `LoggingInterceptor` (global, `packages/shared`) writes a `Log` document per request and updates it with status, duration and the sanitized response body. The `pino-http` line (`packages/shared/src/logging/pino.config.ts`) already carries method, sanitized URL, status, duration and correlation ID. Its serializers keep no body and no headers.
- `MailService` (`packages/mail`) writes an `EmailLog` with `to`, `subject`, `text` and `params`. In this repository `text` carries verification and password-reset links. The write sits inside the send `try`, so a log failure after a delivered email counts as a send failure. `BrevoProvider` logs every recipient address. `MailProvider.send()` returns nothing.
- `BaseProducer` and `BasePublisher` (`packages/shared/src/abstracts/`) log `JSON.stringify(data)` for every job and event.
- `apps/worker`'s `EmailConsumer` does not restore the job's `correlationId` into CLS, so worker logs carry none.
- Tests:
  - `packages/testing-utils`' global setup starts a `mongo:6.0` container.
  - `apps/api/test/{audit,customers}.integration.ts` and `apps/auth/test/auth.e2e-spec.ts` read `MongoService`.
  - `apps/auth/test/users.integration.ts` mocks it.
  - `truncateDatabase()` uses `DELETE` on three tables.
- CI (`.github/workflows/ci.yml`) runs `pnpm test` only; integration and E2E suites run locally with Docker. The cloud session that implements this change has no Docker, but has PostgreSQL 16 and Redis binaries installed (see D10).

## Goals / Non-Goals

**Goals:**

- No NestJS app imports Mongo code, connects to Mongo or validates `MONGO_URI`.
- The audit trail keeps every recording rule and the query contract of `audit-log`, with append-only enforced by Postgres.
- Request, email, job and event logs on stdout carry no bodies, no addresses and no payloads.

**Non-Goals:** see proposal.md (Non-goals). At design level, this change also does not:

- add a Prisma enum or a `CHECK` constraint for `action`;
- add expression indexes;
- change the `AuditService.record()` signature;
- change the shape of the `GET /api/v1/audit-events` response.

## Decisions

### D1. `audit_event` table (`packages/database`)

```prisma
/// Append-only audit trail. Triggers (migration create_audit_event) refuse
/// UPDATE and the DELETE of rows whose expireAt is in the future.
model AuditEvent {
  id               String   @id @default(cuid())
  occurredAt       DateTime
  expireAt         DateTime
  action           String
  outcome          String
  errorCode        String?
  actorId          String?
  actorEmail       String?
  impersonatedById String?
  attemptedEmail   String?
  targetType       String?
  targetId         String?
  changedFields    String[]
  changes          Json?
  ip               String?
  userAgent        String?
  correlationId    String?

  @@index([occurredAt(sort: Desc)])
  @@index([actorId, occurredAt(sort: Desc)])
  @@index([targetId, occurredAt(sort: Desc)])
  @@index([action, occurredAt(sort: Desc)])
  @@index([outcome, occurredAt(sort: Desc)])
  @@index([expireAt])
  @@map("audit_event")
}
```

- Same fields and the same indexes as the Mongo schema, plus `expireAt` for the purge (D4).
- **Deliberate exceptions to the model conventions in `CLAUDE.md`:**
  - No `createdAt`: `occurredAt` is the creation time and keeps its name from the existing contract.
  - No `updatedAt` and no `deletedAt`: a row is never updated, and a soft delete would contradict immutability.
  - No foreign key on `actorId`, `impersonatedById` or `targetId`: events outlive deleted users and customers, and a failed sign-in has no user. Indexes exist on every id column that is filtered on.
  - These exceptions are recorded in `.github/instructions/database-conventions.instructions.md`.
- `action`, `outcome` and `targetType` are `String`, validated by the `@repo/shared-types` types and `AuditService`. A Postgres enum would need a migration for each new action, and the action list grows with every audited feature.
  - *Alternative:* a `CHECK` on `outcome`. Deferred, since nothing writes outside `AuditService`.
- `occurredAt` and `expireAt` are set by `AuditService`, as today, so the retention arithmetic stays in one place.
- `changedFields` is a Postgres `text[]`. Prisma scalar lists cannot be nullable, so "absent" is stored as `{}` and mapped back to absent on read (D3).

### D2. Append-only enforcement by triggers (`packages/database` migration)

The migration is created with `prisma migrate dev --create-only --name create_audit_event`. Hand-written SQL is then appended after the generated `CREATE TABLE`:

- `audit_event_refuse_update()`: a `BEFORE UPDATE ... FOR EACH ROW` trigger that always raises.
- `audit_event_refuse_unexpired_delete()`: a `BEFORE DELETE ... FOR EACH ROW` trigger that raises when `OLD."expireAt" > now()` and returns `OLD` otherwise.
- Both raise with a fixed message naming the table and `ERRCODE = 'insufficient_privilege'`, so a client sees a clear, non-retryable error.
- Triggers fire for the table owner too. The app currently connects as the owner, so privileges alone would protect nothing until `tenant-isolation-rls` introduces the restricted role.
- **`TRUNCATE` is not blocked.** A statement-level trigger would also block the test helper, and the restricted role will lack the `TRUNCATE` privilege. Recorded under Risks.
- Prisma does not introspect triggers or functions, so `migrate dev` reports no drift for them. Task 1.2 verifies this.
- *Alternative:* a `SECURITY DEFINER` purge function plus privileges (design doc 7.3). Not needed while the delete trigger lets expired rows go; see proposal.md (Alternatives considered).

### D3. `AuditStore` replaces the Mongo audit methods (`packages/shared`)

- New `packages/shared/src/audit/audit.store.ts`, `@Injectable()`, using `DatabaseService`. It offers:
  - `insert(event: AuditEventFields)`;
  - `find(filter: AuditEventFilter, skip, take): Promise<{ items: AuditEventRecord[]; total }>`;
  - `purgeExpired(batchSize): Promise<number>`.
- All SQL against `audit_event` therefore lives in one class, which the lean integration suite tests against Postgres.
- `AuditEventFields`, `AuditEventFilter` and `AuditEventRecord` move to `packages/shared/src/audit/audit-event.types.ts`, re-exported from the `@repo/shared` barrel. Callers of these type names do not change.
- `SharedModule` provides and exports `AuditStore` next to `AuditService`.
- `AuditService` swaps `MongoService` for `AuditStore`. Bounding, safe-change filtering, retention arithmetic, correlation ID lookup and best-effort error handling stay as they are, with their existing unit tests.
- The insert always uses the root Prisma client, never a transaction client. That keeps it outside any business transaction (spec: "an event SHALL be written outside the audited action's own database transaction").
- **`find` builds a Prisma `where` from the filter:**
  - Equality for `actorId`, `targetId`, `action` and `outcome`.
  - `occurredAt` `gte`/`lte` for `from` and `to`.
  - For `actorEmail`: `OR: [{ actorEmail: { equals, mode: 'insensitive' } }, { attemptedEmail: { equals, mode: 'insensitive' } }]`. This fixes attempted emails stored in mixed case: `apps/auth` stores the typed value, while the query schema lowercases the filter.
  - Ordering is `occurredAt desc`, then `id desc` for a stable order between pages.
  - `findMany` and `count` run in one `$transaction([...])`, a read-only batch, so `total` matches the page.
- **Mapping on read:** a `NULL` column and an empty `changedFields` become absent properties, and `expireAt` is dropped. The response is then identical to the Mongo one, and the existing assertions (`not.toHaveProperty('changedFields')`) still hold.
- `AuditEventsController` (`apps/api`) injects `AuditStore` instead of `MongoService`. It stays `@Roles(RoleEnum.ADMIN)` and read-only, so there is no change to authorization.
- *Alternative:* add `find` to `AuditService`. Rejected because it mixes the best-effort writer with a reader whose errors must propagate as 500.

### D4. Daily retention purge (`apps/cron`)

- New `AuditRetentionCron` in `apps/cron/src/audit-retention/`, registered in `AppModule`.
- It runs `@Cron('15 3 * * *', { timeZone: 'UTC' })`, outside working hours in Portugal.
- It calls `AuditStore.purgeExpired(5000)`. That method deletes in batches with raw SQL, so the expiry test uses the database clock, the same clock the trigger checks:

```sql
DELETE FROM "audit_event"
WHERE "id" IN (SELECT "id" FROM "audit_event" WHERE "expireAt" <= now() LIMIT 5000)
```

- The loop runs until a batch deletes fewer than 5000 rows, then logs the total.
- A failure is logged and sent to Sentry (`tags.component = 'audit'`) and never crashes the process.
- Running twice, for example with two cron instances, is harmless because the statement is idempotent.
- `apps/cron` already imports `SharedModule`, so it has `DatabaseService`. No new environment variable is needed: the purge reads only `now()`, and `AUDIT_RETENTION_DAYS` stays in `apps/api` and `apps/auth`, which set `expireAt` when they record.
- *Alternative:* `pg_cron` on Supabase. Rejected because it ties retention to one provider (D23 plans a later move off Supabase) and puts a job outside the repository's tests.

### D5. HTTP request logs (`packages/shared`)

- Delete `LoggingInterceptor` and its spec, and remove the `APP_INTERCEPTOR` registration from `SharedModule`. `pino-http` stays as it is.
- Add a unit test to `pino.config.spec.ts`: the `req` serializer output has exactly `id`, `method`, `url`, `remoteAddress` and `remotePort`, with no `body` and no `headers`, and the `res` serializer output has only `statusCode`.
- `apps/api/test/customers.integration.ts` drops its two `createLog`/`updateLog` spies. The silent-path behavior is already covered by the `autoLogging.ignore` unit test.
- The `user` the interceptor stored is not added to the `pino-http` line. Reads are not audited by design (`audit-log`), and writes are in the audit trail with their actor.

### D6. Email logging (`packages/mail`, `apps/worker`)

- `MailProvider.send()` returns `Promise<{ messageId?: string }>`. `BrevoProvider` returns the `messageId` from `sendTransacEmail`'s response when present, and logs `Sending email (n recipients)` instead of the addresses.
- `MailService` drops `MongoService` and `logEmail()`. After each attempt it logs one object through the Nest `Logger` (pino), at `log` level for a send and `error` level for a failure:

  ```ts
  {
    msg: 'email sent' | 'email failed',
    outcome: 'sent' | 'failed',
    attempt,
    templateId?,
    subject?,          // the caller's subject, only when there is no templateId
    recipients: n,     // to + cc + bcc
    messageId?,
    correlationId?,
    errorName?,        // failures: the error's name and HTTP status when present, never its message
    statusCode?,
  }
  ```

- The subject comes from the caller's `mail`, before the development rewrite that prefixes it with recipient addresses. The development warning no longer includes the `devEmail` address.
- Subjects in this repository are fixed strings. A rule in the mail package README says that subjects SHALL NOT carry personal data, because they are logged.
- Logging cannot throw, so a delivered email is never retried because of logging. That removes the duplicate-send path described in Context.
- `correlationId` is read from CLS (`ClsService`, global through `SharedModule`), and read defensively outside a CLS context. `EmailConsumer.process()` runs each job inside `cls.run()` with `CLS_CORRELATION_ID` set from `job.data.correlationId`. Every log of the job then carries the request's correlation ID.
- `MailModule` stops importing `MongoModule`.

### D7. Queue and event log lines (`packages/shared`)

- `BaseProducer.addJob()` logs `Adding job <name> to <queue> (correlationId=<id>)`.
- `BasePublisher` logs `Publishing event <pattern> (correlationId=<id>)`.
- Neither logs `data` any more. Their unit tests assert that a payload containing an email and a link does not appear in the logged message.
- Task 6.4 searches the NestJS apps for other `logger` calls that print `job.data` or a payload, and records what it finds.

### D8. Removal of Mongo (`packages/shared`, `packages/testing-utils`, apps, infrastructure)

- **Deleted:**
  - `packages/shared/src/mongo/**` and its barrel export;
  - the `MongoModule` import in `SharedModule`;
  - the `mongoose` and `@nestjs/mongoose` dependencies (`pnpm install` refreshes the lockfile);
  - `MONGO_URI` in `baseEnvSchema`, in every app's `env.spec.ts`, in `.env.example`, `.env.development` and `.env.test` files, and in the `UNIT_TEST_ENV_DEFAULTS` of `apps/api/test/unit-env.ts`;
  - the `mongo` service, its volume and the commented `depends_on: mongo` entries in `docker-compose.yaml`;
  - `docker/mongo.env.example`;
  - the Mongo container and the `MONGO_URI` export in `packages/testing-utils/src/e2e/global-setup.ts`, and the `MONGO_URI` mentions in the apps' `test/jest.setup.ts` comments;
  - the MongoDB prompts, credential rewriting and `docker/mongo.env` copy in `scripts/setup.mjs`.
- **A stale `MONGO_URI` is harmless.** The env schemas are non-strict `z.object`s, which strip unknown keys, so an operator's old `.env` that still sets the variable keeps booting. A unit test in `packages/shared` pins this.
- **`truncateDatabase()`** (`packages/testing-utils`) adds `TRUNCATE "audit_event"`. `TRUNCATE` is not blocked (D2), and a `DELETE` would be refused for unexpired rows.
- **Recovery tag:** `archive/mongo-last` is an annotated tag on the last commit that still contains the Mongo code (the branch head before group 7's removal commit). It is pushed before that commit. Pushing it is confirmed with the user at apply time.
- **Documentation:**
  - Updated: `CLAUDE.md` ("MongoDB, logs/audit only", the `SharedModule` provider list, the `LoggingInterceptor` note), `.github/copilot-instructions.md`, `.github/instructions/{nestjs,database}-conventions.instructions.md`, `README.md`, `DEPLOY.md`, `DEPLOY-PM2.md`, `ARCHITECTURE_OVERVIEW.md`, `CONVENTIONS.md`, `PROJECT_MAP.md`, `DEPENDENCY_GRAPH.md`, `apps/worker/README.md`, and the `.claude` agents, commands and skills that describe Mongo.
  - `.claude/CORNER_CASES.md` keeps its Mongo entries under a "Historical (MongoDB removed)" note.
  - The generic third-party better-auth skills under `.agents/skills/` are left as they are.

### D9. Test order (spec, tests, code)

Each group in tasks.md writes its failing tests first, then the code. Mongo stays wired into `SharedModule` until its last consumer is gone, so the suites that boot a whole `AppModule` are ported in the removal group (7). Before that, groups 1 and 2 test against Postgres through lean modules (`ConfigModule` + `DatabaseModule`), which never touch Mongo.

### D10. Verifying without Docker (implementation environment only)

The cloud session has PostgreSQL 16 and Redis binaries but no Docker, so the testcontainers global setup cannot run there. For verification only:

1. Start a throwaway cluster (`initdb` and `pg_ctl` in the scratchpad) and `redis-server` on free ports.
2. Run `prisma migrate deploy` against the cluster.
3. Run each `test:integration` and `test:e2e` suite with `--globalSetup` and `--globalTeardown` overridden by scratchpad scripts that export `DATABASE_URL`, `REDIS_HOST` and `REDIS_PORT`.

The repository's suites and global setup stay as specified in `test-database-setup`, and the evidence goes to `notes.md`. PostgreSQL 16 differs from the containers' 17. Nothing in this change depends on that difference: triggers, `text[]` and `ILIKE` behave the same.

## Risks / Trade-offs

- [`TRUNCATE` and `DROP` by a client holding the owner's credentials are not prevented] → Same exposure as today's Mongo credentials. Closed by the restricted role in `tenant-isolation-rls` (no `TRUNCATE` privilege). The trigger blocks the accidental single-row case, which is the realistic one.
- [Audit and business data share one database] → A Postgres outage fails the action itself, which is the honest outcome. The insert stays outside business transactions, so a rejected audit insert never rolls an action back, and the 2 s budget in `apps/auth` and fire-and-forget in `apps/api` stay as they are.
- [`mode: 'insensitive'` equality cannot use the B-tree index on `actorEmail`] → An admin-only query over at most `AUDIT_RETENTION_DAYS` of events, ordered by the `occurredAt` index. Acceptable at MVP volume. Revisit with partitioning or a `citext`/lowercased column if the audit page slows down.
- [Purge lag up to 24 h, and up to 5000-row batches] → Stated in the spec. Batches keep each statement short.
- [Hand-written trigger SQL could be lost if the migration is regenerated] → The SQL lives in a committed migration that is never edited after merge. The integration test fails if the triggers are missing.
- [Subjects become log data] → Documented rule for the mail package. Today's subjects are fixed strings.
- [Removed request bodies] → See proposal.md (Risks & Mitigations).

## Migration Plan

1. Merge with `prisma migrate deploy` in the release (the `create_audit_event` migration). No data is migrated (proposal.md, Non-goals).
2. Operators may drop `MONGO_URI` from their `.env` files at their own pace; it is ignored.
3. Stop and remove the Mongo container and its volume once the apps run on the new version.
4. **Rollback:** redeploy the previous release, which still needs a Mongo instance; the `archive/mongo-last` tag holds that code. The `audit_event` table can stay, since the old code ignores it.
