import { describe, expect, test, vi } from 'vitest';
import { Auth, AuthCallbackActions } from '../src/index';
import { bearer, body, fakeClient, isGrant, token } from './fakeApi';

describe('Auth.validateTokenPayload', () => {
  test('accepts a payload with an access token', () => {
    expect(() => Auth.validateTokenPayload(token('a'))).not.toThrow();
  });

  test.each([
    ['an error field', { error: 'invalid_grant' }],
    ['a message field', { message: 'nope' }],
    ['unfinished email verification', { verification_ended_at: '2026-01-01' }],
    ['no access token', { refresh_token: 'r' }],
    ['nothing at all', undefined],
  ])('rejects a payload with %s', (_, payload) => {
    expect(() => Auth.validateTokenPayload(payload)).toThrow();
  });
});

describe('Auth.urlRequiresAuth', () => {
  test.each(['auth/login', '/oauth/access_token', 'system/create_client'])(
    '%s is public',
    (url) => expect(Auth.urlRequiresAuth(url)).toBe(false),
  );

  test.each(['/project', '/run/12/run_result', 'system/auth/me'])(
    '%s needs a token',
    (url) => expect(Auth.urlRequiresAuth(url)).toBe(true),
  );

  test('an empty url needs no token', () => {
    expect(Auth.urlRequiresAuth(undefined)).toBe(false);
  });
});

describe('login', () => {
  test('sends a password grant with the client credentials, stores the token and reports Connected', async () => {
    const callback = vi.fn(async () => {});
    const { client, requests } = fakeClient(
      () => ({ status: 200, data: token('first') }),
      callback,
    );

    const result = await client.getAuth().login('a@b.test', 'pw');

    expect(requests).toHaveLength(1);
    expect(isGrant(requests[0])).toBe(true);
    expect(body(requests[0])).toMatchObject({
      grant_type: 'password',
      client_id: 'client-id',
      client_secret: 'client-secret',
      username: 'a@b.test',
      password: 'pw',
    });
    expect(bearer(requests[0])).toBeUndefined();
    expect(result.access_token).toBe('first');
    expect((await client.getAuth().getToken())?.access_token).toBe('first');
    // expires_at is derived from expires_in when the server omits it
    expect((await client.getAuth().getToken())?.expires_at).toBeDefined();
    expect(callback).toHaveBeenCalledWith(
      AuthCallbackActions.Connected,
      expect.objectContaining({ access_token: 'first' }),
      expect.anything(),
    );
  });

  test('a rejected login stores nothing', async () => {
    const { client } = fakeClient(() => ({
      status: 401,
      data: { error: 'invalid_grant' },
    }));

    await expect(
      client.getAuth().login('a@b.test', 'bad'),
    ).rejects.toBeDefined();
    expect(await client.getAuth().getToken()).toBeUndefined();
  });
});

describe('authorization header', () => {
  test('authenticated requests carry the bearer token; public ones do not', async () => {
    const { client, requests } = fakeClient((r) =>
      isGrant(r)
        ? { status: 200, data: token('first') }
        : { status: 200, data: { data: [] } },
    );
    await client.getAuth().login('a@b.test', 'pw');

    await client.api.get('/project');
    await client.api.post('auth/register', {});

    const project = requests.find((r) => r.url === '/project')!;
    const register = requests.find((r) => r.url === 'auth/register')!;
    expect(bearer(project)).toBe('Bearer first');
    expect(bearer(register)).toBeUndefined();
  });

  test('an expired token is refreshed before the request goes out', async () => {
    const { client, requests } = fakeClient((r) => {
      if (isGrant(r)) {
        return body(r).grant_type === 'refresh_token'
          ? { status: 200, data: token('second') }
          : {
              status: 200,
              data: token('first', { expires_at: '2000-01-01T00:00:00Z' }),
            };
      }
      return { status: 200, data: { data: [] } };
    });
    await client.getAuth().login('a@b.test', 'pw');

    await client.api.get('/project');

    const refresh = requests.filter(
      (r) => isGrant(r) && body(r).grant_type === 'refresh_token',
    );
    expect(refresh).toHaveLength(1);
    expect(body(refresh[0]).refresh_token).toBe('refresh-for-first');
    expect(bearer(requests.find((r) => r.url === '/project')!)).toBe(
      'Bearer second',
    );
  });

  test('concurrent requests with an expired token share one refresh and stay logged in', async () => {
    // Passport rotates refresh tokens: each one works exactly once.
    const used = new Set<string>();
    let issued = 0;
    const { client, requests } = fakeClient((r) => {
      if (isGrant(r)) {
        const b = body(r);
        if (b.grant_type === 'refresh_token') {
          if (used.has(b.refresh_token)) {
            return { status: 401, data: { error: 'invalid_grant' } };
          }
          used.add(b.refresh_token);
          issued += 1;
          return { status: 200, data: token(`refreshed-${issued}`) };
        }
        return {
          status: 200,
          data: token('first', { expires_at: '2000-01-01T00:00:00Z' }),
        };
      }
      return { status: 200, data: { data: [] } };
    });
    await client.getAuth().login('a@b.test', 'pw');

    await Promise.all([
      client.api.get('/project'),
      client.api.get('/plan'),
      client.api.get('/run'),
    ]);

    const refreshes = requests.filter(
      (r) => isGrant(r) && body(r).grant_type === 'refresh_token',
    );
    expect(refreshes).toHaveLength(1);
    for (const url of ['/project', '/plan', '/run']) {
      expect(bearer(requests.find((r) => r.url === url)!)).toBe(
        'Bearer refreshed-1',
      );
    }
    expect((await client.getAuth().getToken())?.access_token).toBe(
      'refreshed-1',
    );
  });
});

describe('401 handling', () => {
  test('a 401 refreshes the token and retries the request once', async () => {
    let projectCalls = 0;
    const { client, requests } = fakeClient((r) => {
      if (isGrant(r)) {
        return body(r).grant_type === 'refresh_token'
          ? { status: 200, data: token('second') }
          : { status: 200, data: token('first') };
      }
      projectCalls += 1;
      return projectCalls === 1
        ? { status: 401, data: { message: 'Unauthenticated.' } }
        : { status: 200, data: { data: [{ id: 1 }] } };
    });
    await client.getAuth().login('a@b.test', 'pw');

    const response = await client.api.get('/project');

    expect(response.data).toEqual({ data: [{ id: 1 }] });
    const projectRequests = requests.filter((r) => r.url === '/project');
    expect(projectRequests.map(bearer)).toEqual([
      'Bearer first',
      'Bearer second',
    ]);
  });

  test('when the refresh fails too: rejects, logs out and reports Unauthorized, without looping', async () => {
    const callback = vi.fn(async () => {});
    const { client, requests } = fakeClient((r) => {
      if (isGrant(r)) {
        return body(r).grant_type === 'refresh_token'
          ? { status: 401, data: { error: 'invalid_grant' } }
          : { status: 200, data: token('first') };
      }
      return { status: 401, data: { message: 'Unauthenticated.' } };
    }, callback);
    await client.getAuth().login('a@b.test', 'pw');

    await expect(client.api.get('/project')).rejects.toBeDefined();

    expect(requests.filter((r) => r.url === '/project')).toHaveLength(1);
    expect(
      requests.filter(
        (r) => isGrant(r) && body(r).grant_type === 'refresh_token',
      ),
    ).toHaveLength(1);
    expect(await client.getAuth().getToken()).toBeUndefined();
    expect(callback).toHaveBeenCalledWith(
      AuthCallbackActions.Unauthorized,
      undefined,
      expect.anything(),
    );
  });

  test('a retried request that 401s again is rejected, not refreshed again', async () => {
    const { client, requests } = fakeClient((r) => {
      if (isGrant(r)) {
        return body(r).grant_type === 'refresh_token'
          ? { status: 200, data: token('second') }
          : { status: 200, data: token('first') };
      }
      return { status: 401, data: { message: 'Unauthenticated.' } };
    });
    await client.getAuth().login('a@b.test', 'pw');

    await expect(client.api.get('/project')).rejects.toBeDefined();

    expect(requests.filter((r) => r.url === '/project')).toHaveLength(2);
    expect(
      requests.filter(
        (r) => isGrant(r) && body(r).grant_type === 'refresh_token',
      ),
    ).toHaveLength(1);
  });

  test('a non-401 error passes straight through without a refresh', async () => {
    const { client, requests } = fakeClient((r) =>
      isGrant(r)
        ? { status: 200, data: token('first') }
        : { status: 500, data: { message: 'boom' } },
    );
    await client.getAuth().login('a@b.test', 'pw');

    await expect(client.api.get('/project')).rejects.toBeDefined();

    expect(requests.filter(isGrant)).toHaveLength(1); // the login only
    expect((await client.getAuth().getToken())?.access_token).toBe('first');
  });
});
