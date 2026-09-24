import { describe, expect, test } from 'vitest';
import { projectGetMany, TokenStorageImpl } from '../src/index';
import { getResponse } from '../src/gen/actions/getResponse';
import { fakeClient } from './fakeApi';

describe('generated actions', () => {
  test('projectGetMany GETs /project with the query params and returns the payload', async () => {
    const { client, requests } = fakeClient(() => ({
      status: 200,
      data: { data: [{ id: 7, name: 'Alpha' }], total: 1 },
    }));

    const result = await projectGetMany({
      api: client.api,
      params: { name: 'Alpha' } as any,
    });

    expect(requests).toHaveLength(1);
    expect(requests[0].method).toBe('get');
    expect(requests[0].baseURL).toBe('https://api.example.test/api');
    expect(requests[0].url).toBe('/project');
    expect(requests[0].params).toEqual({ name: 'Alpha' });
    expect(result.data).toEqual([{ id: 7, name: 'Alpha' }]);
  });

  test('JSON null values are dropped from the payload', async () => {
    const { client } = fakeClient(() => ({
      status: 200,
      data: { data: [{ id: 7, description: null }] },
    }));

    const result = await projectGetMany({ api: client.api });

    // the reviver drops null-valued keys entirely
    expect(result.data[0]).toEqual({ id: 7 });
    expect('description' in result.data[0]).toBe(false);
  });

  test('getResponse refuses to run without an api instance', async () => {
    await expect(getResponse(undefined, { url: '/project' })).rejects.toThrow(
      'No clientSkd.api provided',
    );
  });
});

describe('TokenStorageImpl', () => {
  function memoryStorage() {
    const values = new Map<string, any>();
    return {
      values,
      get: async (key: string) => values.get(key),
      set: async (key: string, value: any) => {
        values.set(key, value);
      },
    };
  }

  test('remember=true persists the token', async () => {
    const persistent = memoryStorage();
    const storage = new TokenStorageImpl(persistent as any);

    await storage.setToken({ access_token: 'a' } as any, true);

    expect(persistent.values.get('token')).toEqual({ access_token: 'a' });
    expect(persistent.values.get('remember')).toBe(true);
    // a fresh instance over the same storage restores it
    const restored = new TokenStorageImpl(persistent as any);
    expect((await restored.getToken())?.access_token).toBe('a');
  });

  test('remember=false keeps the token in memory only', async () => {
    const persistent = memoryStorage();
    const storage = new TokenStorageImpl(persistent as any);

    await storage.setToken({ access_token: 'a' } as any, false);

    expect((await storage.getToken())?.access_token).toBe('a');
    expect(persistent.values.get('token')).toBeUndefined();
    expect(persistent.values.get('remember')).toBe(false);
  });
});
