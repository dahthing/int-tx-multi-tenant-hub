# Implementation notes

Evidence recorded while applying the change, in task order.

## 1.1 Baseline failure: apps/api without `.env`

State: `apps/api` holds only `.env.example` and `.env.test`; no `.env`.

Command: `pnpm --filter api exec jest src/app.module.spec.ts --runInBand`

Result: the suite fails while `src/app.module.ts` is evaluated, before any test runs:

```
apps/api/src/app.module.ts:26
    validate: (c) => env_1.apiEnvSchema.parse(c),

ZodError: [
  { "path": ["DATABASE_URL"], "message": "Invalid input: expected string, received undefined" },
  { "path": ["REDIS_HOST"], "message": "Invalid input: expected string, received undefined" },
  { "path": ["MONGO_URI"], "message": "Invalid input: expected string, received undefined" },
  { "path": ["CORS_ORIGIN"], "message": "Invalid input: expected string, received undefined" },
  { "path": ["FIELD_ENCRYPTION_KEY"], "message": "Invalid input: expected string, received undefined" },
  { "path": ["FIELD_ENCRYPTION_HMAC_KEY"], "message": "Invalid input: expected string, received undefined" }
]
```

The six keys match the required, non-defaulted keys of `apiEnvSchema` listed in design.md.

## 1.2 Failing spec before the helper exists

`roots` was added to the unit Jest config in this task, because the spec cannot run under the unit config without it. `setupFiles` and the helper come in 1.3.

`pnpm --filter api exec jest --listTests` lists the seven existing `src/**/*.spec.ts` files plus `test/unit-env.spec.ts`; no `*.integration.ts` file is picked up.

`pnpm --filter api exec jest test/unit-env.spec.ts`:

```
FAIL test/unit-env.spec.ts
    Cannot find module './unit-env' from '../test/unit-env.spec.ts'
Tests:       0 total
```

## 1.3 Helper, setup file and setupFiles

With no `.env` in `apps/api`: `jest test/unit-env.spec.ts src/app.module.spec.ts` passes 9 of 9 tests.

Coverage finding (pre-existing, outside this change): `pnpm --filter api test:cov` reports functions at 70% against an 80% threshold. The same 70% (14 of 20 functions) is reported on the code before this change, measured with a copied `.env.example` and without the new files. The gap is `src/customers/customers.controller.ts` (0% functions), which only the integration suite exercises. The CI workflow runs `pnpm test`, not `test:cov`, so the threshold is not enforced in CI today. The task's criterion "still meets the 80% thresholds" therefore cannot hold as written; this change leaves coverage unchanged (statements 92.3%, branches 84.6%, lines 91.2%). Decision (user, 23 Oct): amend the criterion to "coverage unchanged from baseline" and track the gap as a workflow follow-up in tasks.md.

## 1.4 Integration config unaffected

`pnpm --filter api exec jest -c test/jest-integration.json --listTests`:

```
test/audit.integration.ts
test/customers.integration.ts
```

`test/jest-integration.json`: `setupFiles` is still only `<rootDir>/test/jest.setup.ts`; it declares no `roots`.

## 1.5 Commit gate, group 1

Node 24.15 (the repository pins 24.x in `.nvmrc`). From the repository root: `pnpm build` (12 of 12 tasks), `pnpm lint` (12 of 12, no files changed by `--fix`), `pnpm check-types` (12 of 12) and `pnpm test` (16 of 16) all exit 0.

Production build check for the "Application bootstrap is unaffected" scenario: `find apps/api/dist -name 'unit-env*'` finds nothing, so the placeholders cannot reach a running app.

## 2.1 shared-types fails without its own build

`rm -rf packages/shared-types/dist`, then `pnpm turbo run test --filter=@repo/shared-types --force`:

```
FAIL src/entry-points.spec.ts
  ● package entry points › ./dist/index.js exists on disk
  ● package entry points › ./dist/index.js imports without throwing
Tests:       2 failed, 100 passed, 102 total
Tasks:    0 successful, 1 total
```

The task graph runs no build first: the root `turbo.json` makes `test` depend on `^build` (dependencies only), and `@repo/shared-types` has no workspace dependencies to build.

## 2.2 Package-level turbo.json

After adding `packages/shared-types/turbo.json`, the same sequence (`rm -rf packages/shared-types/dist`, then `pnpm turbo run test --filter=@repo/shared-types --force`) runs `@repo/shared-types:build` first and ends with `Tests: 102 passed, 102 total`, `Tasks: 2 successful, 2 total`.

`turbo run test --filter=@repo/shared-types --dry=json`:

```
@repo/shared-types#build <- ['@repo/shared-types#db:generate']
@repo/shared-types#db:generate <- []
@repo/shared-types#test <- ['@repo/shared-types#build']
```

(`pnpm turbo ... --dry=json` prints a pnpm engine warning before the JSON in this environment; the binary under `node_modules/.bin/turbo` gives clean JSON.)

## 3.1 to 3.3 Repository identity

- `LICENSE`: proprietary notice, "Copyright (c) 2026 TargX. All rights reserved.", no permissions granted.
- `NOTICE`: names the template, `main` at `v1.8.1` and `develop` at `45d1c79`, tracked as `upstream`. Checked against the merged history: `git rev-parse --short upstream/develop` prints `45d1c79`; `git merge-base --is-ancestor` confirms both `v1.8.1` and `45d1c79` are ancestors of the branch head.
- `openspec/config.yaml`: only the `Domain` block changed. `openspec instructions proposal --change fix-ci-baseline --json` exits 0 and contains the new Domain text ("Multi-tenant SaaS hub for ecommerce...") and no longer the old one; `openspec context --json` exits 0.

## 4.1 Clean-clone smoke test

Fresh clone of the branch at `aea586c` (same commit as `origin`) in a scratch directory, Node 24.15. Before testing: no `.env` file anywhere and no `dist` directory in any workspace. `pnpm install --frozen-lockfile` and `pnpm db:generate` exit 0. `pnpm test` exits 0 with `Tasks: 16 successful, 16 total`:

```
@repo/shared-types  102 passed     @repo/database   7 passed
@repo/shared        248 passed     @repo/mail      11 passed
api                  52 passed     auth           111 passed
worker               34 passed     notifications   13 passed
cron                  2 passed     web       29 test files passed
```

## 4.2 CI sequence in the clean clone

Same clone, steps from `.github/workflows/ci.yml` in order: `pnpm install --frozen-lockfile`, `pnpm db:generate` (1 of 1), `pnpm build` (12 of 12), `pnpm lint` (12 of 12), `pnpm check-types` (12 of 12), `pnpm test` (16 of 16). Every step exits 0, and `git status` is clean afterwards, so `lint --fix` changed nothing.

## 4.3 Strict validation

`openspec validate fix-ci-baseline --strict`: "Change 'fix-ci-baseline' is valid", exit 0.
