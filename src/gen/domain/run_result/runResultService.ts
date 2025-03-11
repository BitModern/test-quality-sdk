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
import { RunResultRoute } from '../../routes/Routes';
import type { RunResult } from './RunResult';
import type { RunResultApi } from './RunResultApi';

export const runResultGetMany = (
  queryParams?: QueryParams<RunResult>,
): Promise<ResourceList<RunResultApi>> => {
  const config: QueryParams<RunResult> = {
    method: 'get',
    url: queryParams?.url ?? RunResultRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RunResultApi>>(config)
    : getResponse<ResourceList<RunResultApi>, RunResult>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runResultGetOne = (
  id: number,
  queryParams?: QueryParams<RunResult>,
): Promise<RunResultApi> => {
  const config: QueryParams<RunResult> = {
    method: 'get',
    url: `${queryParams?.url ?? RunResultRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunResultApi>(config)
    : getResponse<RunResultApi, RunResult>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runResultDeleteOne = (
  id: number,
  queryParams?: QueryParams<RunResult>,
): Promise<MessageResponse> => {
  const config: QueryParams<RunResult> = {
    method: 'delete',
    url: `${queryParams?.url ?? RunResultRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, RunResult>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runResultDeleteMany = (
  data: (Partial<RunResult> & { id: number })[],
  queryParams?: QueryParamsWithList<RunResult>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<RunResult> = {
        method: 'post',
        url: queryParams?.url ?? RunResultRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, RunResult>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const runResultUpdateOne = (
  id: number,
  data: Partial<RunResult>,
  queryParams?: QueryParams<RunResult>,
): Promise<RunResult> => {
  const config: QueryParams<RunResult> = {
    method: 'put',
    url: `${queryParams?.url ?? RunResultRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunResult>(config)
    : getResponse<RunResult>(queryParams?.api ?? _client?.api, config);
};

export const runResultUpdateMany = (
  data: (Partial<RunResult> & { id: number })[],
  queryParams?: QueryParamsWithList<RunResult>,
): Promise<RunResult[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<RunResult> = {
        method: 'post',
        url: queryParams?.url ?? RunResultRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<RunResult[]>(config)
        : getResponse<RunResult[], RunResult>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const runResultCreateOne = (
  data: Partial<RunResult>,
  queryParams?: QueryParams<RunResult>,
): Promise<RunResult> => {
  const config: QueryParams<RunResult> = {
    method: 'post',
    url: queryParams?.url ?? RunResultRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunResult>(config)
    : getResponse<RunResult>(queryParams?.api ?? _client?.api, config);
};

export const runResultCreateMany = (
  data: Partial<RunResult>[],
  queryParams?: QueryParamsWithList<RunResult>,
): Promise<RunResult[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<RunResult> = {
        method: 'post',
        url: queryParams?.url ?? RunResultRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<RunResult[]>(config)
        : getResponse<RunResult[], RunResult>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
