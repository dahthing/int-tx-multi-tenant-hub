import { applyUnitTestEnvDefaults } from './unit-env';

// Jest runs setupFiles before each unit test file is evaluated, so the
// placeholders are in place before any spec imports AppModule.
applyUnitTestEnvDefaults(process.env);
