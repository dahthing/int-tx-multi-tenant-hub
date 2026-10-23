# Proposal

## Why

The repository now hosts the multi-tenant ecommerce hub, but its quality baseline still carries the template's assumptions. On a clean checkout (the state the CI runner starts from) the unit test run is not green: `apps/api/src/app.module.spec.ts` fails because importing `AppModule` validates the environment and no `.env` file exists, and `pnpm test` fails in `packages/shared-types` when the package has not been built first, because one of its tests inspects its own `dist/` output. A red baseline hides real regressions, so it has to be fixed before the first product change (`remove-mongo-dependency`, `consolidate-runtime`) lands. The same change brings the repository's identity in line with the product: the OpenSpec project context still describes a generic template, and there is no license or provenance notice.

Design reference: `docs/design/2026-10-23-hub-core-design.md`, section 2.3.

## What Changes

- Unit test suites run hermetically: they pass on a clean checkout with no `.env` file present and without contacting Postgres, MongoDB or Redis. `apps/api`'s unit Jest configuration supplies inert, test-only placeholder values for the variables its `AppModule` validates, only for variables that are not already set.
- `pnpm test` passes on a fresh clone without a prior `pnpm build`: a package whose tests read its own build output builds itself before its tests run (`packages/shared-types`).
- `openspec/config.yaml`: the `Domain` section describes the multi-tenant ecommerce hub and points to the design document. Other context sections are left to the changes that alter them.
- New `LICENSE` file: proprietary, all rights reserved, copyright holder TargX.
- New `NOTICE` file: records that the codebase originates from the team's `nestjs-angular-monorepo` template (tracked as the `upstream` git remote) and which upstream version was imported.

No runtime behavior of any app changes.

## Capabilities

### New Capabilities

- `unit-test-isolation`: unit test suites are hermetic with respect to the developer environment and build state: no `.env` files, no running services, no prior build of the package under test.

### Modified Capabilities

None. `env-validation` is unaffected: apps still validate their environment at bootstrap and still fail loudly on missing values; the placeholders exist only inside the unit test runner.

## Non-goals

- Removing MongoDB (`remove-mongo-dependency`) or consolidating apps (`consolidate-runtime`).
- Changing the CI workflow itself. Observed but out of scope: `openspec/specs/github-actions-ci` lists the step order as lint, type-check, build, test, while `.github/workflows/ci.yml` runs build before lint and type-check. Recorded here so a later change can reconcile spec and workflow.
- Rewriting other sections of `openspec/config.yaml` (stack, conventions), which change with the changes that alter them.
- Integration and e2e suites, which already provision their own containers and test environment.

## Open questions

None. The copyright holder (TargX) was confirmed before this proposal.

## Risks & Mitigations

- **Placeholders masking a real configuration bug.** Mitigation: placeholders live only in a Jest setup file used by unit tests, are applied only when a variable is unset, use values that cannot reach any real service (reserved `.invalid` hosts), and a test asserts they never override a value that is already set. The `env-validation` behavior at real bootstrap is untouched.
- **Self-build before tests slows the test loop.** Mitigation: the dependency is declared only for `packages/shared-types`, the single package whose tests read their own output, and Turborepo caches the build.

## Alternatives considered

- **Load `apps/api/.env.example` in unit tests.** Rejected: it couples unit tests to a file meant for humans, and its values point at local services.
- **Make `AppModule` validation lazy.** Rejected: it changes production bootstrap behavior to fix a test concern, contrary to `env-validation`.
- **Make every package's `test` depend on its own `build`.** Rejected: slower for every package to fix one.
- **Drop the `shared-types` entry-point test.** Rejected: it protects the package's published entry points.

## Impact

- `apps/api`: Jest unit configuration (`package.json` `jest` block) and a new test-only setup file.
- `packages/shared-types`: a package-level `turbo.json` declaring that its `test` depends on its own `build`.
- `openspec/config.yaml`: `Domain` section.
- Repository root: new `LICENSE` and `NOTICE`.
- No dependencies added, no API or schema changes.
