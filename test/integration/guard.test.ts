import { describe, expect, test } from 'vitest';
import { integrationConfigured, isProductionHost, testEnv } from './testEnv';

describe('integration configuration', () => {
  test('is present when required (CI)', () => {
    if (testEnv.required) {
      expect(
        integrationConfigured,
        'TQ_REQUIRE_INTEGRATION=1 but TQ_HOST/TQ_EMAIL/TQ_EMAIL2/TQ_PASSWORD are not all set',
      ).toBe(true);
    }
  });

  test('never targets production', () => {
    expect(
      isProductionHost(testEnv.baseUrl),
      `TQ_HOST=${testEnv.baseUrl} is production; point the live tests at staging`,
    ).toBe(false);
  });
});
