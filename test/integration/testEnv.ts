import 'dotenv/config';

// Live API tests create projects and users, and register a whole new site when
// the login fails. They must never default to production: TQ_HOST is required.
export const testEnv = {
  auth: {
    email: process.env.TQ_EMAIL,
    secondEmail: process.env.TQ_EMAIL2,
    password: process.env.TQ_PASSWORD,
    clientName: process.env.TQ_CLIENT_NAME ?? 'sdktest',
  },
  baseUrl: process.env.TQ_HOST,
};

export const integrationConfigured = Boolean(
  testEnv.baseUrl &&
    testEnv.auth.email &&
    testEnv.auth.secondEmail &&
    testEnv.auth.password,
);
