/**
 * Inert values for the variables `apiEnvSchema` requires, so unit tests that
 * import `AppModule` (which validates the environment as it is imported) run
 * without a `.env` file. Test-only: `test/` is excluded from the build.
 *
 * Hosts use the reserved `.invalid` TLD, so a stray connection attempt fails
 * at name resolution instead of reaching a developer's local services.
 */
export const UNIT_TEST_ENV_DEFAULTS = {
  DATABASE_URL: 'postgresql://unit:unit@db.unit-test.invalid:5432/unit',
  REDIS_HOST: 'redis.unit-test.invalid',
  MONGO_URI: 'mongodb://mongo.unit-test.invalid:27017/unit',
  CORS_ORIGIN: 'http://web.unit-test.invalid',
  FIELD_ENCRYPTION_KEY: Buffer.alloc(32, 1).toString('base64'),
  FIELD_ENCRYPTION_HMAC_KEY: Buffer.alloc(32, 2).toString('base64'),
} as const;

/**
 * Sets each placeholder only where the variable is unset; a value that is
 * already in the environment always wins.
 */
export function applyUnitTestEnvDefaults(env: NodeJS.ProcessEnv): void {
  for (const [name, value] of Object.entries(UNIT_TEST_ENV_DEFAULTS)) {
    if (env[name] === undefined) {
      env[name] = value;
    }
  }
}
