/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { chunkArray } from '../../actions/chunkArray';
import type {
  QueryParams,
  QueryParamsWithList,
} from '../../actions/QueryParams';
import type { MessageResponse } from '../../actions/MessageResponse';
import type { ResourceList } from '../../models/ResourceList';
import { PolicyRoute } from '../../routes/Routes';
import type { Policy } from './Policy';
import type { PolicyApi } from './PolicyApi';

export const policyGetMany = (
  queryParams?: QueryParams<Partial<Policy>>,
): Promise<ResourceList<PolicyApi>> => {
  const config: QueryParams<Partial<Policy>> = {
    method: 'get',
    url: queryParams?.url ?? PolicyRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PolicyApi>>(config)
    : getResponse<ResourceList<PolicyApi>, Partial<Policy>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Policy>>,
): Promise<PolicyApi> => {
  const config: QueryParams<Partial<Policy>> = {
    method: 'get',
    url: `${queryParams?.url ?? PolicyRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyApi>(config)
    : getResponse<PolicyApi, Partial<Policy>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Policy>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Policy>> = {
    method: 'delete',
    url: `${queryParams?.url ?? PolicyRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Policy>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyDeleteMany = (
  data: (Partial<Policy> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Policy> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Policy> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? PolicyRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Policy> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const policyUpdateOne = (
  id: number,
  data: Partial<Policy>,
  queryParams?: QueryParams<Partial<Policy>>,
): Promise<Policy> => {
  const config: QueryParams<Partial<Policy>> = {
    method: 'put',
    url: `${queryParams?.url ?? PolicyRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Policy>(config)
    : getResponse<Policy, Partial<Policy>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyUpdateMany = (
  data: (Partial<Policy> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Policy> & { id: number }>,
): Promise<Policy[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Policy> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? PolicyRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Policy[]>(config)
        : getResponse<Policy[], Partial<Policy> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const policyCreateOne = (
  data: Partial<Policy>,
  queryParams?: QueryParams<Partial<Policy>>,
): Promise<Policy> => {
  const config: QueryParams<Partial<Policy>> = {
    method: 'post',
    url: queryParams?.url ?? PolicyRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Policy>(config)
    : getResponse<Policy, Partial<Policy>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyCreateMany = (
  data: Partial<Policy>[],
  queryParams?: QueryParamsWithList<Partial<Policy>>,
): Promise<Policy[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Policy>> = {
        method: 'post',
        url: queryParams?.url ?? PolicyRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Policy[]>(config)
        : getResponse<Policy[], Partial<Policy>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
