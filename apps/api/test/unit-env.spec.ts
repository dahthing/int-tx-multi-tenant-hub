import { apiEnvSchema } from '../src/env';
import { applyUnitTestEnvDefaults, UNIT_TEST_ENV_DEFAULTS } from './unit-env';

const hostOf = (value: string) =>
  value.includes('://') ? new URL(value).hostname : value;

describe('applyUnitTestEnvDefaults', () => {
  it('gives an unset variable its placeholder', () => {
    const env: NodeJS.ProcessEnv = {};

    applyUnitTestEnvDefaults(env);

    expect(env.DATABASE_URL).toBe(UNIT_TEST_ENV_DEFAULTS.DATABASE_URL);
  });

  it('keeps a variable that is already set', () => {
    const env: NodeJS.ProcessEnv = { DATABASE_URL: 'postgres://u:p@db:5432/x' };

    applyUnitTestEnvDefaults(env);

    expect(env.DATABASE_URL).toBe('postgres://u:p@db:5432/x');
  });
});

describe('UNIT_TEST_ENV_DEFAULTS', () => {
  it.each(['DATABASE_URL', 'REDIS_HOST', 'MONGO_URI', 'CORS_ORIGIN'] as const)(
    'points %s at a reserved .invalid host',
    (name) => {
      expect(hostOf(UNIT_TEST_ENV_DEFAULTS[name])).toMatch(/\.invalid$/);
    },
  );

  // A required variable added to apiEnvSchema without a placeholder fails
  // here by name, instead of breaking app.module.spec.ts with a Zod dump.
  it('satisfies the api environment schema', () => {
    const result = apiEnvSchema.safeParse(UNIT_TEST_ENV_DEFAULTS);

    expect(result.error?.issues ?? []).toEqual([]);
  });
});
