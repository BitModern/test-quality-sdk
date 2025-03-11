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
import { ExplorationRoute } from '../../routes/Routes';
import type { Exploration } from './Exploration';
import type { ExplorationApi } from './ExplorationApi';

export const explorationGetMany = (
  queryParams?: QueryParams<Partial<Exploration>>,
): Promise<ResourceList<ExplorationApi>> => {
  const config: QueryParams<Partial<Exploration>> = {
    method: 'get',
    url: queryParams?.url ?? ExplorationRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ExplorationApi>>(config)
    : getResponse<ResourceList<ExplorationApi>, Partial<Exploration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Exploration>>,
): Promise<ExplorationApi> => {
  const config: QueryParams<Partial<Exploration>> = {
    method: 'get',
    url: `${queryParams?.url ?? ExplorationRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationApi>(config)
    : getResponse<ExplorationApi, Partial<Exploration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Exploration>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Exploration>> = {
    method: 'delete',
    url: `${queryParams?.url ?? ExplorationRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Exploration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationDeleteMany = (
  data: (Partial<Exploration> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Exploration> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Exploration> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? ExplorationRoute() + '/delete',
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Exploration> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const explorationUpdateOne = (
  id: number,
  data: Partial<Exploration>,
  queryParams?: QueryParams<Partial<Exploration>>,
): Promise<Exploration> => {
  const config: QueryParams<Partial<Exploration>> = {
    method: 'put',
    url: `${queryParams?.url ?? ExplorationRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Exploration>(config)
    : getResponse<Exploration, Partial<Exploration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationUpdateMany = (
  data: (Partial<Exploration> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Exploration> & { id: number }>,
): Promise<Exploration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Exploration> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? ExplorationRoute(),
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Exploration[]>(config)
        : getResponse<Exploration[], Partial<Exploration> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const explorationCreateOne = (
  data: Partial<Exploration>,
  queryParams?: QueryParams<Partial<Exploration>>,
): Promise<Exploration> => {
  const config: QueryParams<Partial<Exploration>> = {
    method: 'post',
    url: queryParams?.url ?? ExplorationRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Exploration>(config)
    : getResponse<Exploration, Partial<Exploration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationCreateMany = (
  data: Partial<Exploration>[],
  queryParams?: QueryParamsWithList<Partial<Exploration>>,
): Promise<Exploration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Exploration>> = {
        method: 'post',
        url: queryParams?.url ?? ExplorationRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Exploration[]>(config)
        : getResponse<Exploration[], Partial<Exploration>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
