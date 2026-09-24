import {
  AxiosError,
  AxiosHeaders,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import { ClientSdk, type AuthCallback } from '../src/index';

export interface FakeReply {
  status: number;
  data?: unknown;
}

export type Route = (request: InternalAxiosRequestConfig) => FakeReply;

/**
 * A real ClientSdk (its axios instance, interceptors and transformResponse all
 * run) whose network adapter is replaced by `route`. Every request that
 * reaches the adapter is recorded, after the request interceptors ran.
 */
export function fakeClient(route: Route, authCallback?: AuthCallback) {
  const client = new ClientSdk({
    clientId: 'client-id',
    clientSecret: 'client-secret',
    baseUrl: 'https://api.example.test',
    authCallback,
  });
  const requests: InternalAxiosRequestConfig[] = [];

  client.api.defaults.adapter = async (config) => {
    // Snapshot a copy: the SDK mutates the config (sets a new Authorization on
    // the same object before retrying), which would rewrite recorded history.
    // AxiosHeaders.from() would return the same instance, not a copy.
    requests.push({ ...config, headers: new AxiosHeaders(config.headers) });
    const reply = route(config);
    const response: AxiosResponse = {
      data: JSON.stringify(reply.data ?? {}),
      status: reply.status,
      statusText: String(reply.status),
      headers: AxiosHeaders.from({ 'content-type': 'application/json' }),
      config,
      request: {},
    };
    if (reply.status >= 400) {
      throw new AxiosError(
        `Request failed with status code ${reply.status}`,
        AxiosError.ERR_BAD_REQUEST,
        config,
        {},
        response,
      );
    }
    return response;
  };

  return { client, requests };
}

export function body(request: InternalAxiosRequestConfig): any {
  return typeof request.data === 'string'
    ? JSON.parse(request.data)
    : request.data;
}

export function bearer(
  request: InternalAxiosRequestConfig,
): string | undefined {
  return AxiosHeaders.from(request.headers).get('Authorization') as
    | string
    | undefined;
}

export const isGrant = (r: InternalAxiosRequestConfig) =>
  (r.url ?? '').includes('oauth/access_token');

export function token(access: string, extra: Record<string, unknown> = {}) {
  return {
    access_token: access,
    refresh_token: `refresh-for-${access}`,
    token_type: 'Bearer',
    expires_in: 3600,
    ...extra,
  };
}
