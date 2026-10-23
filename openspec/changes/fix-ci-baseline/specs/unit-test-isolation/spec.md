# Spec Delta

## Purpose

Keeps unit test suites hermetic, so their result depends only on the source code under test and never on a developer's local environment files, running services, or previous build output.

## ADDED Requirements

### Requirement: Unit tests pass without environment files
Every workspace's unit test suite SHALL pass on a clean checkout in which no `.env` file exists in any package, including suites whose modules validate the environment when they are imported.

#### Scenario: Clean checkout with no env files
- **WHEN** `pnpm test` runs on a fresh clone where no `.env` file has been created in any workspace
- **THEN** every workspace's unit test suite exits successfully

#### Scenario: api module wiring test without env files
- **WHEN** the `apps/api` unit test that inspects the application module's global guards and interceptors runs with no `.env` file present
- **THEN** it runs its assertions and passes, instead of failing while the module is imported

### Requirement: Unit test placeholders never override real values
Test-only placeholder values for environment variables SHALL be applied by the unit test runner only to variables that are not already set, and SHALL NOT be used outside unit test runs.

#### Scenario: Variable already set
- **WHEN** a unit test run starts with an environment variable already set to a value
- **THEN** that variable keeps its value during the run

#### Scenario: Variable not set
- **WHEN** a unit test run starts with a validated environment variable unset
- **THEN** the variable receives an inert test-only placeholder for the duration of the run

#### Scenario: Application bootstrap is unaffected
- **WHEN** an application boots outside the unit test runner with a required environment variable missing
- **THEN** it still fails at bootstrap, as required by the `env-validation` capability

### Requirement: Unit tests reach no external service
Unit test runs SHALL NOT open connections to Postgres, MongoDB, Redis or any network service. Placeholder connection values SHALL point to hosts that cannot resolve to a real service.

#### Scenario: Placeholder connection values
- **WHEN** a unit test run uses a placeholder value for a database or cache connection variable
- **THEN** the value names a reserved non-resolvable host, so an accidental connection attempt fails instead of reaching a developer's local service

### Requirement: Unit tests pass without a prior build
`pnpm test` SHALL pass on a fresh clone without running `pnpm build` first, including for packages whose tests inspect their own build output.

#### Scenario: Package tests that read their own build output
- **WHEN** `pnpm test` runs on a fresh clone with no build output present
- **THEN** a package whose tests check its own published entry points is built before those tests run, and the tests pass
