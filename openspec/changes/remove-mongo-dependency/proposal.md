# Proposal

## Why

Every NestJS app refuses to start without MongoDB: `MONGO_URI` is required by `baseEnvSchema` and `SharedModule` imports `MongoModule`. Mongo holds three things: the audit trail, a copy of every HTTP request and response, and a log of outgoing emails. The hub's MVP infrastructure is Supabase (Postgres) plus Redis on the VPS (design D18, D21, D23), so Mongo would be a third database to run, back up and secure for data that either belongs next to the business data (audit) or is already in the structured logs (requests, emails). Removing it now, in Marco 0, means that no later change, and no tenant feature, is built on top of it.

## What Changes

- **Audit trail moves to Postgres.** A new `audit_event` table (`packages/database`) replaces the `audit_events` collection. The `AuditService.record()` contract and every recording rule of the `audit-log` spec stay as they are.
  - The database itself refuses to update an event, and refuses to delete one that has not expired yet.
  - Expired events are purged by a daily job in `apps/cron`, replacing Mongo's TTL index.
- **Audit queries read from Postgres.** `GET /api/v1/audit-events` (`apps/api`) and the `/audit` page keep their contract. The actor email filter now also matches attempted emails typed in a different letter case.
- **HTTP request logs are no longer persisted.** `LoggingInterceptor` is removed (`packages/shared`). The automatic `pino-http` line already records method, URL, status, duration and correlation ID for every request. Request and response bodies are no longer stored anywhere.
- **Email logs become structured log lines.** `MailService` (`packages/mail`) logs each send with its template or subject, recipient count, provider message id and correlation ID. Recipient addresses, parameters and body text are left out.
  - This also closes 3 existing leaks. The Mongo email log stored the full body text, which carries verification and password-reset links, for 30 days. The Brevo provider logs every recipient address. A failed log write after a successful send was treated as a send failure, so the job could retry and send the email twice.
- **Queue and event logs stop carrying payloads (added scope, found while reading the email path).** `BaseProducer` and `BasePublisher` (`packages/shared`) log `JSON.stringify(data)` for every job and event, which puts recipient addresses and password-reset links into the logs that this change makes the only record. They will log the job name or event pattern and the correlation ID only.
- **BREAKING (operators):** `MONGO_URI` is no longer read or validated. The following are removed:
  - `MongoModule`, `MongoService` and their schemas, and the `mongoose` and `@nestjs/mongoose` dependencies (`packages/shared`);
  - the `mongo` service in `docker-compose.yaml` and `docker/mongo.env.example`;
  - the MongoDB testcontainer (`packages/testing-utils`);
  - the MongoDB prompts in `scripts/setup.mjs`.
  - A git tag on the last commit that still contains the Mongo code keeps it recoverable.
- Tests and documentation follow: unit and integration suites move from `MongoService` to the Postgres-backed audit code, and every document that tells a developer or operator to run Mongo is updated.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `audit-log`: retention is enforced by a daily purge instead of a per-document TTL; immutability is enforced by the database, not only by the absence of an endpoint; the storage-failure scenarios name a failed audit write instead of an unreachable audit store; the actor-email filter ignores the letter case of attempted emails.
- `structured-production-logging`: request logs are written only to stdout (no database copy); outgoing emails are logged as structured lines without personal data; queue and event log lines carry no payload.
- `prometheus-metrics`: the scrape-not-logged scenario no longer refers to a MongoDB request log.
- `unit-test-infra-shared`: the `LoggingInterceptor` requirement is removed with the interceptor.
- `auth-integration-tests`: lean integration modules no longer mock `MongoService`.
- `test-database-setup`: integration and E2E runs provision Postgres and Redis only, and `.env.test` rules stop naming `MONGO_URI`.

## Non-goals

- `organization_id`, actor type and agent `run_id` columns, and row-level security on `audit_event`. These arrive with `organizations-and-membership`, `tenant-isolation-rls` and `agent-runtime`, when those entities exist (decided with the user).
- Privilege-based append-only protection (an application role holding only `INSERT` and `SELECT` on the table). It needs the restricted application role from `tenant-isolation-rls` (design D24). This change relies on triggers.
- Retention by plan. Plans do not exist yet; `AUDIT_RETENTION_DAYS` stays the single setting.
- Monthly partitioning of `audit_event`. Only when the volume justifies it (design 7.3).
- Migrating existing Mongo data. The hub has no deployment with production data; any Mongo data in a developer environment is discarded.
- Collapsing `apps/api`, `apps/auth` and `apps/notifications` into one app. That is `consolidate-runtime`, the next change.

## Open questions

None open. Resolved with the user before this proposal:

- Tenancy, actor-type and run-id fields: deferred to Marco 1 and Marco 4.
- Append-only enforcement: database triggers now, role privileges later.
- HTTP request logs: remove `LoggingInterceptor`; no bodies are logged.
- Email logs: no recipient addresses, parameters or body text.

## Alternatives considered

- **Keep Mongo only for audit.** Rejected: a whole database for one append-only table, outside Supabase's backups and outside the row-level security that tenant isolation will rely on.
- **Keep `LoggingInterceptor`, writing sanitized bodies to pino.** Rejected with the user: it duplicates the `pino-http` line, multiplies log volume and puts personal data from bodies into Loki.
- **Append-only through privileges only, later.** Rejected with the user: until Marco 1 nothing at the database level would stop an accidental `UPDATE`.
- **Purge through a `SECURITY DEFINER` function**, as design 7.3 suggests. Not needed with a delete trigger that only lets expired rows go: the daily job runs a plain `DELETE ... WHERE "expireAt" <= now()` and needs no elevated function. The function can still be added with the restricted role in `tenant-isolation-rls`.

## Risks & Mitigations

- **Audit writes now share the business database.** When Postgres is down, the audited action fails too, so "action succeeds while audit storage is down" no longer happens in practice. Audit writes still run outside the business transaction, best-effort, so a failed audit insert never fails the action.
- **Expired events linger up to a day.** The daily purge is coarser than Mongo's TTL (about a minute). Acceptable for a 365-day default; the spec states the new bound.
- **Hidden Mongo consumers.** The removal is verified by a repository-wide search, by a clean-clone CI run with no `MONGO_URI` set, and by booting every app without it.
- **Lost request bodies.** Debugging from stored bodies is no longer possible. Correlation IDs on the pino lines and Sentry events cover tracing; bodies held personal data and were a liability.
- **Recovery.** A tag on the last commit with the Mongo code (named in design.md) is pushed before the removal commits.
