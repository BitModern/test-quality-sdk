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
import { RunRoute } from '../../routes/Routes';
import type { Run } from './Run';
import type { RunApi } from './RunApi';

export const runGetMany = (
  queryParams?: QueryParams<Partial<Run>>,
): Promise<ResourceList<RunApi>> => {
  const config: QueryParams<Partial<Run>> = {
    method: 'get',
    url: queryParams?.url ?? RunRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RunApi>>(config)
    : getResponse<ResourceList<RunApi>, Partial<Run>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Run>>,
): Promise<RunApi> => {
  const config: QueryParams<Partial<Run>> = {
    method: 'get',
    url: `${queryParams?.url ?? RunRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunApi>(config)
    : getResponse<RunApi, Partial<Run>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Run>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Run>> = {
    method: 'delete',
    url: `${queryParams?.url ?? RunRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Run>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runDeleteMany = (
  data: (Partial<Run> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Run> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Run> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? RunRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Run> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const runUpdateOne = (
  id: number,
  data: Partial<Run>,
  queryParams?: QueryParams<Partial<Run>>,
): Promise<Run> => {
  const config: QueryParams<Partial<Run>> = {
    method: 'put',
    url: `${queryParams?.url ?? RunRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Run>(config)
    : getResponse<Run, Partial<Run>>(queryParams?.api ?? _client?.api, config);
};

export const runUpdateMany = (
  data: (Partial<Run> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Run> & { id: number }>,
): Promise<Run[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Run> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? RunRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Run[]>(config)
        : getResponse<Run[], Partial<Run> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const runCreateOne = (
  data: Partial<Run>,
  queryParams?: QueryParams<Partial<Run>>,
): Promise<Run> => {
  const config: QueryParams<Partial<Run>> = {
    method: 'post',
    url: queryParams?.url ?? RunRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Run>(config)
    : getResponse<Run, Partial<Run>>(queryParams?.api ?? _client?.api, config);
};

export const runCreateMany = (
  data: Partial<Run>[],
  queryParams?: QueryParamsWithList<Partial<Run>>,
): Promise<Run[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Run>> = {
        method: 'post',
        url: queryParams?.url ?? RunRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Run[]>(config)
        : getResponse<Run[], Partial<Run>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
