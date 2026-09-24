import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// `yarn test` runs the offline unit tests only (no network), which the release
// workflow gates on. The live API tests under test/integration are opt-in:
// `yarn test:integration`, with TQ_HOST and credentials set explicitly.
export default defineConfig({
  resolve: {
    alias: { '@sdk': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
    exclude: ['test/integration/**', 'node_modules/**'],
  },
});
