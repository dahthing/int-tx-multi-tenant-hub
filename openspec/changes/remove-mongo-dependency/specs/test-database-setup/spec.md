## MODIFIED Requirements

### Requirement: Integration and E2E runs provision their own ephemeral backing services

Every `test:integration` and `test:e2e` run SHALL start its own disposable PostgreSQL and Redis instances, apply all committed Prisma migrations to the PostgreSQL instance, point the suites at them, and remove them when the run ends. No suite SHALL require a database or Redis instance to be running beforehand, and no run SHALL start a MongoDB instance.

#### Scenario: Suites run with no local infrastructure

- **WHEN** `pnpm test:integration` or `pnpm test:e2e` is run in `apps/auth` with Docker available and no local Postgres or Redis running
- **THEN** the suites start, run against freshly migrated ephemeral instances, and pass

#### Scenario: A developer database is never touched

- **WHEN** a developer has their own Postgres on `localhost:5432` containing data (including a database named `nestjs_test`) and runs the suites
- **THEN** that data is unchanged after the run

#### Scenario: Instances are removed after the run

- **WHEN** a test run finishes, whether its tests passed or failed
- **THEN** no container started by that run is still present

#### Scenario: Docker is unavailable

- **WHEN** the suites are run and Docker is not reachable
- **THEN** the run fails before any test executes, with an error naming the missing container runtime

#### Scenario: No MongoDB container

- **WHEN** any integration or E2E run starts its backing services
- **THEN** only PostgreSQL and Redis containers are started

### Requirement: Test env files carry no connection targets

Each NestJS app that has integration or E2E suites SHALL include a `.env.test` file (committed, containing no secrets) with the non-connection settings those suites need. It SHALL NOT set `DATABASE_URL`, `REDIS_HOST` or `REDIS_PORT`; those come from the ephemeral instances provisioned for the run.

#### Scenario: .env.test has no connection variables

- **WHEN** `apps/auth/.env.test` is read
- **THEN** it contains no `DATABASE_URL`, `REDIS_HOST` or `REDIS_PORT` line
