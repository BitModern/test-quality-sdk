import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// Live API tests: `yarn test:integration`. They skip unless TQ_HOST, TQ_EMAIL,
// TQ_EMAIL2 and TQ_PASSWORD are set (see .env.example). Standalone rather than
// mergeConfig(base): merging concatenates arrays, so base's exclusion of
// test/integration would still apply.
export default defineConfig({
  resolve: {
    alias: { '@sdk': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  test: {
    environment: 'node',
    include: ['test/integration/**/*.test.ts'],
    testTimeout: 300000,
  },
});
