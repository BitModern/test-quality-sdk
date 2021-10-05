import {
  accessRoleGetMany,
  projectCreateOne,
  projectGetMany,
  userCreateOne,
  userGetMany,
} from '../src/index';
import { getClient, setupApi, testLogin } from './setupApi';
import { testEnv } from './testEnv';

const ProjectName = 'testProject';
const SecondEmail = testEnv.auth.secondEmail;

describe('Projects Test', () => {
  test('check project', async () => {
    const client = getClient();

    const value = await setupApi(client);
    expect(value.access_token.length).toBeGreaterThan(2);
    const projects = await projectGetMany({ api: client.api });
    expect(projects.data).toBeDefined();
    const project = projects.data.find((p) => p.name == ProjectName);
    if (!project) {
      await projectCreateOne({ name: ProjectName });
    }
  });

  test('two client test', async () => {
    const client = getClient();

    const value = await setupApi(client);
    expect(value.access_token.length).toBeGreaterThan(2);
    const projects = await projectGetMany({ api: client.api });
    expect(projects.data).toBeDefined();
    const project = projects.data.find((p) => p.name == ProjectName);
    if (!project) {
      await projectCreateOne({ name: ProjectName }, { api: client.api });
    }

    const users = await userGetMany({ api: client.api });
    expect(users.data).toBeDefined();
    const user = users.data.find((p) => p.email == SecondEmail);
    if (!user) {
      const accessRoles = await accessRoleGetMany({ api: client.api });
      const admin = accessRoles.data.find((p) => p.name == 'Administrator');
      expect(admin).toBeDefined();
      await userCreateOne(
        {
          email: SecondEmail,
          password: testEnv.auth.password,
          access_role_id: admin?.id,
        } as any,
        { api: client.api }
      );
    }

    const client2 = getClient();
    const value2 = await testLogin(client2, {
      email: SecondEmail,
      password: testEnv.auth.password,
      clientName: testEnv.auth.clientName,
    });
    expect(value2.access_token.length).toBeGreaterThan(2);

    const projects2 = await projectGetMany({ api: client2.api });
    expect(projects2.data).toBeDefined();
    const project2 = projects2.data.find((p) => p.name == ProjectName);
    if (!project2) {
      await projectCreateOne({ name: ProjectName }, { api: client2.api });
    }
  });
});
