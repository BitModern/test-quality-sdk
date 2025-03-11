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
import { CheckRunRoute } from '../../routes/Routes';
import type { CheckRun } from './CheckRun';
import type { CheckRunApi } from './CheckRunApi';

export const checkRunGetMany = (
  queryParams?: QueryParams<Partial<CheckRun>>,
): Promise<ResourceList<CheckRunApi>> => {
  const config: QueryParams<Partial<CheckRun>> = {
    method: 'get',
    url: queryParams?.url ?? CheckRunRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CheckRunApi>>(config)
    : getResponse<ResourceList<CheckRunApi>, Partial<CheckRun>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkRunGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<CheckRun>>,
): Promise<CheckRunApi> => {
  const config: QueryParams<Partial<CheckRun>> = {
    method: 'get',
    url: `${queryParams?.url ?? CheckRunRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckRunApi>(config)
    : getResponse<CheckRunApi, Partial<CheckRun>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkRunDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<CheckRun>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<CheckRun>> = {
    method: 'delete',
    url: `${queryParams?.url ?? CheckRunRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<CheckRun>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkRunDeleteMany = (
  data: (Partial<CheckRun> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CheckRun> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CheckRun> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? CheckRunRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<CheckRun> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkRunUpdateOne = (
  id: number,
  data: Partial<CheckRun>,
  queryParams?: QueryParams<Partial<CheckRun>>,
): Promise<CheckRun> => {
  const config: QueryParams<Partial<CheckRun>> = {
    method: 'put',
    url: `${queryParams?.url ?? CheckRunRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckRun>(config)
    : getResponse<CheckRun, Partial<CheckRun>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkRunUpdateMany = (
  data: (Partial<CheckRun> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CheckRun> & { id: number }>,
): Promise<CheckRun[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CheckRun> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? CheckRunRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckRun[]>(config)
        : getResponse<CheckRun[], Partial<CheckRun> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkRunCreateOne = (
  data: Partial<CheckRun>,
  queryParams?: QueryParams<Partial<CheckRun>>,
): Promise<CheckRun> => {
  const config: QueryParams<Partial<CheckRun>> = {
    method: 'post',
    url: queryParams?.url ?? CheckRunRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckRun>(config)
    : getResponse<CheckRun, Partial<CheckRun>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkRunCreateMany = (
  data: Partial<CheckRun>[],
  queryParams?: QueryParamsWithList<Partial<CheckRun>>,
): Promise<CheckRun[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CheckRun>> = {
        method: 'post',
        url: queryParams?.url ?? CheckRunRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckRun[]>(config)
        : getResponse<CheckRun[], Partial<CheckRun>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
