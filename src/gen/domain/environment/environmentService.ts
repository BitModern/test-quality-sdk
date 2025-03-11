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
import { EnvironmentRoute } from '../../routes/Routes';
import type { Environment } from './Environment';
import type { EnvironmentApi } from './EnvironmentApi';

export const environmentGetMany = (
  queryParams?: QueryParams<Partial<Environment>>,
): Promise<ResourceList<EnvironmentApi>> => {
  const config: QueryParams<Partial<Environment>> = {
    method: 'get',
    url: queryParams?.url ?? EnvironmentRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<EnvironmentApi>>(config)
    : getResponse<ResourceList<EnvironmentApi>, Partial<Environment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Environment>>,
): Promise<EnvironmentApi> => {
  const config: QueryParams<Partial<Environment>> = {
    method: 'get',
    url: `${queryParams?.url ?? EnvironmentRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentApi>(config)
    : getResponse<EnvironmentApi, Partial<Environment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Environment>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Environment>> = {
    method: 'delete',
    url: `${queryParams?.url ?? EnvironmentRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Environment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentDeleteMany = (
  data: (Partial<Environment> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Environment> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Environment> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? EnvironmentRoute() + '/delete',
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Environment> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const environmentUpdateOne = (
  id: number,
  data: Partial<Environment>,
  queryParams?: QueryParams<Partial<Environment>>,
): Promise<Environment> => {
  const config: QueryParams<Partial<Environment>> = {
    method: 'put',
    url: `${queryParams?.url ?? EnvironmentRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Environment>(config)
    : getResponse<Environment, Partial<Environment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentUpdateMany = (
  data: (Partial<Environment> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Environment> & { id: number }>,
): Promise<Environment[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Environment> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? EnvironmentRoute(),
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Environment[]>(config)
        : getResponse<Environment[], Partial<Environment> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const environmentCreateOne = (
  data: Partial<Environment>,
  queryParams?: QueryParams<Partial<Environment>>,
): Promise<Environment> => {
  const config: QueryParams<Partial<Environment>> = {
    method: 'post',
    url: queryParams?.url ?? EnvironmentRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Environment>(config)
    : getResponse<Environment, Partial<Environment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentCreateMany = (
  data: Partial<Environment>[],
  queryParams?: QueryParamsWithList<Partial<Environment>>,
): Promise<Environment[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Environment>> = {
        method: 'post',
        url: queryParams?.url ?? EnvironmentRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Environment[]>(config)
        : getResponse<Environment[], Partial<Environment>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
