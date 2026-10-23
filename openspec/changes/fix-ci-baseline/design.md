# Design

## Context

See proposal.md (Why). Observed state that shapes the approach:

- `apps/api/src/app.module.ts` calls `SharedModule.register({ validate: (c) => apiEnvSchema.parse(c) })` in its `@Module` decorator. `ConfigModule.forRoot` runs that validation when the module file is evaluated, so any test that imports `AppModule` validates the environment at import time. `apps/api/src/app.module.spec.ts` is the only unit spec that imports an `AppModule` (checked across `apps/*/src`).
- `apiEnvSchema` (`apps/api/src/env.ts`, extending `baseEnvSchema` from `packages/shared/src/config/base-env.schema.ts`) requires `DATABASE_URL`, `REDIS_HOST`, `MONGO_URI`, `CORS_ORIGIN`, `FIELD_ENCRYPTION_KEY` and `FIELD_ENCRYPTION_HMAC_KEY`; everything else has a default or is optional.
- `apps/api`'s unit Jest config lives in the `jest` block of `apps/api/package.json` (`rootDir: src`, `testRegex: .*\.spec\.ts$`, no `setupFiles`). The integration config (`apps/api/test/jest-integration.json`) is separate and already provisions its own environment through `test/jest.setup.ts` and testcontainers.
- `turbo.json` declares `test.dependsOn: ["^build"]`: dependencies are built, the package itself is not. `packages/shared-types/src/entry-points.spec.ts` asserts that the paths declared in its own `package.json` (`./dist/index.js`) exist and import, so it fails when the package has never been built.

## Goals / Non-Goals

**Goals:**
- Make the two observed clean-checkout failures pass for the right reason, without changing any application's runtime behavior.
- Keep the fix local to the two workspaces involved.

**Non-Goals:**
- A repository-wide test environment framework. Other apps' unit suites already pass without `.env`; they are not touched.
- Any change to `env-validation` behavior at application bootstrap.

## Decisions

### D1. Unit-only environment defaults for `apps/api` (apps/api)

A Jest `setupFiles` entry in `apps/api`'s unit config runs before each test file is evaluated, and therefore before `AppModule` is imported. It applies a fixed map of placeholder values to `process.env`, only for keys that are currently unset.

- Location: `apps/api/test/unit-env.ts` (pure function plus the placeholder map) and `apps/api/test/unit-env.setup.ts` (calls it on `process.env`). Keeping both under `test/` keeps them out of the production build, which already excludes `test/` (`apps/api/tsconfig.build.json`).
- The unit config adds `roots: ["<rootDir>", "<rootDir>/../test"]` so the helper's own spec, `apps/api/test/unit-env.spec.ts`, runs with the unit suite. No existing file under `apps/api/test` matches `.spec.ts`, so no integration file is picked up. Coverage scope (`collectCoverageFrom`, relative to `src`) is unchanged.
- Placeholder values use the reserved `.invalid` top-level domain (for example `postgresql://unit-test@db.unit-test.invalid:5432/unit_test`), so an accidental connection fails at name resolution instead of reaching a developer's local service. Encryption keys are fixed, obviously test-only base64 strings of the right length.
- Drift guard: the helper's spec asserts that the placeholder map satisfies `apiEnvSchema`. When a future change adds a required variable to the schema, this test fails and names the missing key, instead of `app.module.spec.ts` failing with a long Zod error.
- Why not inside `app.module.spec.ts`: TypeScript `import` statements are hoisted above any code in the spec, so setting variables in the spec body runs too late without switching that spec to `require`. A setup file is the mechanism Jest provides for exactly this ordering.
- Alternatives: loading `.env.example` (rejected in proposal.md: human-facing file, values point at local services); lazy validation in `SharedModule` (rejected: changes production bootstrap); a shared helper in `@repo/testing-utils` (rejected for now: that package has no unit test setup of its own and only `apps/api` needs it; revisit if a second app does).

### D2. Self-build before tests for `packages/shared-types` (packages/shared-types)

A package-level `packages/shared-types/turbo.json` extends the root (`"extends": ["//"]`) and sets `test.dependsOn` to `["^build", "build"]` for that package only. Turborepo caches the build, so repeated test runs stay fast.

- The full `dependsOn` array is restated rather than relying on how package configurations merge arrays with the root, so the behavior does not depend on merge semantics.
- Alternatives: adding `build` to every package's `test` dependency in the root `turbo.json` (rejected: slows every package to fix one); making the spec build the package itself (rejected: hides a task-graph fact inside a test).

### D3. Repository identity files (repository root, openspec)

- `LICENSE`: proprietary notice, all rights reserved, copyright TargX, with the year the hub repository started (2026). No permissions granted.
- `NOTICE`: states that the codebase was initialised from the team's `nestjs-angular-monorepo` template, names the imported upstream version (`v1.8.1` plus the `develop` branch at commit `45d1c79`), and that the template is tracked as the `upstream` git remote.
- `openspec/config.yaml`: only the `Domain` block of `context` changes, to a short description of the multi-tenant ecommerce hub and a pointer to `docs/design/2026-10-23-hub-core-design.md`. The stack and convention blocks stay as they are until the changes that alter them.

No Prisma schema changes, no new events, queues or REST endpoints, and no authentication or authorization impact.

## Risks / Trade-offs

- [A developer's `.env` exists but lacks a variable] → The placeholder fills the gap for unit runs only; real bootstrap still fails as `env-validation` requires.
- [Placeholders take precedence over values from a developer's `.env` file in unit runs, because `@nestjs/config` prefers variables already in `process.env` over the file] → Acceptable for unit tests, which never connect to services; the helper's spec documents the behavior. Integration and e2e suites use their own setup and are unaffected.
- [Package-level `turbo.json` is a new pattern in this repository] → Limited to one package and covered by the clean-clone verification task.

## Migration Plan

None. The change touches test configuration and repository metadata only; rollback is a revert of the change's commits.
