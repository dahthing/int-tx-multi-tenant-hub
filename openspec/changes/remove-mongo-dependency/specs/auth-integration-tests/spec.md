## REMOVED Requirements

### Requirement: Integration tests use a lean TestingModule with real Postgres

**Reason**: The requirement mandates replacing `MongoService` with a jest mock, and `MongoService` no longer exists. It is replaced by "Lean integration modules use only real Postgres", which keeps every other rule.

**Migration**: Drop the `MongoService` provider override from `apps/auth/test/users.integration.ts`; nothing else changes in how the suites build their `TestingModule`.

## ADDED Requirements

### Requirement: Lean integration modules use only real Postgres

Auth integration tests SHALL create a NestJS `TestingModule` importing only `ConfigModule.forRoot()` and `DatabaseModule`, with no provider override for a document store. They SHALL NOT bootstrap `SharedModule`, `AuthModule`, or any microservice client. The Postgres they use SHALL be the ephemeral instance provisioned for the run.

#### Scenario: Integration test module connects to the test database

- **WHEN** a `TestingModule` with `DatabaseModule` is compiled in an integration test
- **THEN** `DatabaseService` connects to the ephemeral PostgreSQL instance provisioned for the run
- **THEN** no Redis connection is attempted

#### Scenario: No document-store stand-in

- **WHEN** the auth integration suite builds its `TestingModule`
- **THEN** it declares no mock or override for a MongoDB service
