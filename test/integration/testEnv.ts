import 'dotenv/config';

// Live API tests create projects and users. They must never default to
// production: TQ_HOST is required, and production is refused outright.
export const testEnv = {
  auth: {
    email: process.env.TQ_EMAIL,
    secondEmail: process.env.TQ_EMAIL2,
    password: process.env.TQ_PASSWORD,
    clientName: process.env.TQ_CLIENT_NAME ?? 'sdktest',
  },
  baseUrl: process.env.TQ_HOST,
  // CI sets this so missing configuration fails instead of silently skipping.
  required: process.env.TQ_REQUIRE_INTEGRATION === '1',
  // Registering a new site when login fails is opt-in: a stale password in CI
  // would otherwise create a junk account on every run.
  allowRegisterSite: process.env.TQ_ALLOW_REGISTER_SITE === '1',
};

export const integrationConfigured = Boolean(
  testEnv.baseUrl &&
    testEnv.auth.email &&
    testEnv.auth.secondEmail &&
    testEnv.auth.password,
);

export function isProductionHost(host?: string): boolean {
  if (!host) return false;
  try {
    return new URL(host).hostname === 'api.testquality.com';
  } catch {
    return false;
  }
}
