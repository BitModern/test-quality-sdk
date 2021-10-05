export const testEnv = {
  auth: {
    email: process.env.TQ_EMAIL,
    secondEmail: process.env.TQ_EMAIL2,
    password: process.env.TQ_PASSWORD,
    clientName: process.env.TQ_CLIENT_NAME || 'sdktest',
  },
  baseUrl: process.env.TQ_HOST || 'https://api.testquality.com',
};
