# Tasks

Commit gate used at the end of each group: the `/commit` skill referenced by `openspec/config.yaml` is no longer in this repository (removed upstream in favor of a global skill), so the same gate runs by hand: `pnpm build`, `pnpm lint`, `pnpm check-types` and `pnpm test` must pass, then the group is committed only after user approval. Commit messages follow `CLAUDE.md` (Conventional Commits, no AI attribution lines).

## 1. Hermetic unit environment for apps/api

- [x] 1.1 test(api): apps/api: reproduce the baseline failure with no `.env` file in `apps/api`: `pnpm --filter api exec jest src/app.module.spec.ts` fails while importing `AppModule` with a Zod error listing the missing variables. Verify: failure output recorded in the change notes before any fix.
- [x] 1.2 test(api): apps/api: write `test/unit-env.spec.ts` (spec `unit-test-isolation`) covering: an unset key receives its placeholder; a key already set keeps its value; every placeholder connection value names a `.invalid` host; the placeholder map satisfies `apiEnvSchema`. Verify: the spec runs under the unit config once `roots` includes `test/`, and fails because the helper does not exist yet.
- [x] 1.3 fix(api): apps/api: implement `test/unit-env.ts` (placeholder map and pure apply function) and `test/unit-env.setup.ts`, and add `roots: ["<rootDir>", "<rootDir>/../test"]` and `setupFiles: ["<rootDir>/../test/unit-env.setup.ts"]` to the `jest` block in `package.json` (design D1). Verify: `test/unit-env.spec.ts` passes; `src/app.module.spec.ts` passes with no `.env` present; `pnpm --filter api test:cov` coverage is unchanged from the baseline measured before this change (criterion amended with the user: the 80% function threshold was already unmet, see notes.md 1.3).
- [x] 1.4 test(api): apps/api: confirm the integration config is unaffected: `pnpm --filter api exec jest -c test/jest-integration.json --listTests` lists only `*.integration.ts` files and its `setupFiles` still points only at `test/jest.setup.ts`. Verify: command output matches.
- [x] 1.5 fix(api): commit group 1 after the commit gate passes and the user approves. Verify: commit present on the branch.

## 2. Self-build before shared-types tests

- [x] 2.1 test(shared-types): packages/shared-types: reproduce the failure from a state with no build output: remove `packages/shared-types/dist`, run `pnpm turbo run test --filter=@repo/shared-types --force`, and confirm `src/entry-points.spec.ts` fails because `./dist/index.js` is missing. This existing spec is the failing test for the `unit-test-isolation` requirement "Unit tests pass without a prior build". Verify: failure output recorded.
- [x] 2.2 build(shared-types): packages/shared-types: add `turbo.json` with `"extends": ["//"]` and `tasks.test.dependsOn: ["^build", "build"]` (design D2). Verify: the command from 2.1 now passes from the same clean state, and `pnpm turbo run test --filter=@repo/shared-types --dry=json` shows `@repo/shared-types#build` as a dependency of `@repo/shared-types#test`.
- [x] 2.3 build(shared-types): commit group 2 after the commit gate passes and the user approves. Verify: commit present on the branch.

## 3. Repository identity

- [x] 3.1 docs: repository root: add `LICENSE` with a proprietary, all rights reserved notice, copyright 2026 TargX (design D3). Verify: file exists and names the holder and year.
- [x] 3.2 docs: repository root: add `NOTICE` recording that the codebase was initialised from the team's `nestjs-angular-monorepo` template at `v1.8.1` plus `develop` at `45d1c79`, tracked as the `upstream` git remote. Verify: `git rev-parse --short upstream/develop` and the tag named in the file match the merged history.
- [x] 3.3 docs(openspec): openspec/config.yaml: replace only the `Domain` block of `context` with a description of the multi-tenant ecommerce hub and a pointer to `docs/design/2026-10-23-hub-core-design.md`. Verify: `openspec instructions proposal --change fix-ci-baseline --json` shows the new Domain text, and the file still parses (`openspec context --json` succeeds).
- [x] 3.4 docs: commit group 3 after the commit gate passes and the user approves. Verify: commit present on the branch.

## 4. Integration verification

- [ ] 4.1 chore: clean-clone smoke test: clone the branch into a scratch directory, run `pnpm install --frozen-lockfile` and `pnpm db:generate`, then `pnpm test` with no `.env` file and no prior build. Verify: every workspace's unit suite passes (spec `unit-test-isolation`, scenario "Clean checkout with no env files").
- [ ] 4.2 chore: in the same clean clone, run the CI quality-gate sequence from `.github/workflows/ci.yml` (install, `db:generate`, build, lint, check-types, test). Verify: every step exits 0.
- [ ] 4.3 chore: `openspec validate fix-ci-baseline --strict` passes. Verify: command exits 0.

## Workflow follow-up

- Archive the change after review (`/opsx:archive`), which creates `openspec/specs/unit-test-isolation/spec.md`.
- Reconcile the step order in `openspec/specs/github-actions-ci` with `.github/workflows/ci.yml` in a later change (recorded as a non-goal in proposal.md).
- Bring `apps/api` function coverage back to 80%: unit tests for `src/customers/customers.controller.ts`, or the removal of the Customers reference slice when it is replaced (gap predates this change, see notes.md 1.3).
