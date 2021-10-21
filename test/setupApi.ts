import { ClientSdk } from '../src/index';
import { testEnv } from './testEnv';

export function getClient(): ClientSdk {
  return new ClientSdk({
    clientId: '2',
    clientSecret: '93MBS86X7JrK4Mrr1mk4PKfo6b1zRVx9Mrmx0nTa',
    baseUrl: testEnv.baseUrl,
  });
}

export interface Creds {
  email?: string;
  password?: string;
  clientName?: string;
}

export const DefaultCreds: Creds = {
  email: testEnv.auth.email,
  password: testEnv.auth.password,
  clientName: testEnv.auth.clientName,
};

export async function setupApi(client: ClientSdk, creds: Creds = DefaultCreds) {
  try {
    return await testLogin(client, creds);
  } catch (err) {
    console.log('Error logging in:', err);
    await createClient(client, creds);
    return await testLogin(client, creds);
  }
}

export function testLogin(client: ClientSdk, creds: Creds = DefaultCreds) {
  if (creds.email === undefined) {
    throw Error('Email must be specified');
  }
  if (creds.password === undefined) {
    throw Error('Password must be specified');
  }
  return client.getAuth().login(creds.email, creds.password, false);
}

async function createClient(client: ClientSdk, creds: Creds = DefaultCreds) {
  if (creds.email === undefined) {
    throw Error('Email must be specified');
  }
  if (creds.password === undefined) {
    throw Error('Password must be specified');
  }
  if (creds.clientName === undefined) {
    throw Error('Client name must be specified');
  }
  return await client
    .getAuth()
    .registerSite(creds.email, creds.password, creds.clientName, '');
}
