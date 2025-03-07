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
  queryParams?: QueryParams<Policy>,
): Promise<ResourceList<PolicyApi>> => {
  const config: QueryParams<Policy> = {
    method: 'get',
    url: queryParams?.url ?? PolicyRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PolicyApi>>(config)
    : getResponse<ResourceList<PolicyApi>, Policy>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyGetOne = (
  id: number,
  queryParams?: QueryParams<Policy>,
): Promise<PolicyApi> => {
  const config: QueryParams<Policy> = {
    method: 'get',
    url: `${queryParams?.url ?? PolicyRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyApi>(config)
    : getResponse<PolicyApi, Policy>(queryParams?.api ?? _client?.api, config);
};

export const policyDeleteOne = (
  id: number,
  queryParams?: QueryParams<Policy>,
): Promise<MessageResponse> => {
  const config: QueryParams<Policy> = {
    method: 'delete',
    url: `${queryParams?.url ?? PolicyRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Policy>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyDeleteMany = (
  data: Partial<Policy>[],
  queryParams?: QueryParamsWithList<Policy>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Policy> = {
        method: 'post',
        url: queryParams?.url ?? PolicyRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Policy>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const policyUpdateOne = (
  id: number,
  data: Partial<Policy>,
  queryParams?: QueryParams<Policy>,
): Promise<Policy> => {
  const config: QueryParams<Policy> = {
    method: 'put',
    url: `${queryParams?.url ?? PolicyRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Policy>(config)
    : getResponse<Policy>(queryParams?.api ?? _client?.api, config);
};

export const policyCreateOne = (
  data: Partial<Policy>,
  queryParams?: QueryParams<Policy>,
): Promise<Policy> => {
  const config: QueryParams<Policy> = {
    method: 'post',
    url: queryParams?.url ?? PolicyRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Policy>(config)
    : getResponse<Policy>(queryParams?.api ?? _client?.api, config);
};

export const policyCreateMany = (
  data: Partial<Policy>[],
  queryParams?: QueryParamsWithList<Policy>,
): Promise<Policy[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Policy> = {
        method: 'post',
        url: queryParams?.url ?? PolicyRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Policy[]>(config)
        : getResponse<Policy[], Policy>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
