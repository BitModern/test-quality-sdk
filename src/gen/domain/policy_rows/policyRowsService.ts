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
import { PolicyRowsRoute } from '../../routes/Routes';
import type { PolicyRows } from './PolicyRows';
import type { PolicyRowsApi } from './PolicyRowsApi';

export const policyRowsGetMany = (
  queryParams?: QueryParams<Partial<PolicyRows>>,
): Promise<ResourceList<PolicyRowsApi>> => {
  const config: QueryParams<Partial<PolicyRows>> = {
    method: 'get',
    url: queryParams?.url ?? PolicyRowsRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PolicyRowsApi>>(config)
    : getResponse<ResourceList<PolicyRowsApi>, Partial<PolicyRows>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyRowsGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<PolicyRows>>,
): Promise<PolicyRowsApi> => {
  const config: QueryParams<Partial<PolicyRows>> = {
    method: 'get',
    url: `${queryParams?.url ?? PolicyRowsRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyRowsApi>(config)
    : getResponse<PolicyRowsApi, Partial<PolicyRows>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyRowsDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<PolicyRows>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<PolicyRows>> = {
    method: 'delete',
    url: `${queryParams?.url ?? PolicyRowsRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<PolicyRows>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyRowsDeleteMany = (
  data: (Partial<PolicyRows> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<PolicyRows> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PolicyRows> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? PolicyRowsRoute() + '/delete',
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<PolicyRows> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const policyRowsUpdateOne = (
  id: number,
  data: Partial<PolicyRows>,
  queryParams?: QueryParams<Partial<PolicyRows>>,
): Promise<PolicyRows> => {
  const config: QueryParams<Partial<PolicyRows>> = {
    method: 'put',
    url: `${queryParams?.url ?? PolicyRowsRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyRows>(config)
    : getResponse<PolicyRows, Partial<PolicyRows>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyRowsUpdateMany = (
  data: (Partial<PolicyRows> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<PolicyRows> & { id: number }>,
): Promise<PolicyRows[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PolicyRows> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? PolicyRowsRoute(),
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PolicyRows[]>(config)
        : getResponse<PolicyRows[], Partial<PolicyRows> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const policyRowsCreateOne = (
  data: Partial<PolicyRows>,
  queryParams?: QueryParams<Partial<PolicyRows>>,
): Promise<PolicyRows> => {
  const config: QueryParams<Partial<PolicyRows>> = {
    method: 'post',
    url: queryParams?.url ?? PolicyRowsRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyRows>(config)
    : getResponse<PolicyRows, Partial<PolicyRows>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const policyRowsCreateMany = (
  data: Partial<PolicyRows>[],
  queryParams?: QueryParamsWithList<Partial<PolicyRows>>,
): Promise<PolicyRows[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PolicyRows>> = {
        method: 'post',
        url: queryParams?.url ?? PolicyRowsRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PolicyRows[]>(config)
        : getResponse<PolicyRows[], Partial<PolicyRows>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
