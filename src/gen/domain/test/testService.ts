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
import { TestRoute } from '../../routes/Routes';
import type { Test } from './Test';
import type { TestApi } from './TestApi';

export const testGetMany = (
  queryParams?: QueryParams<Partial<Test>>,
): Promise<ResourceList<TestApi>> => {
  const config: QueryParams<Partial<Test>> = {
    method: 'get',
    url: queryParams?.url ?? TestRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<TestApi>>(config)
    : getResponse<ResourceList<TestApi>, Partial<Test>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Test>>,
): Promise<TestApi> => {
  const config: QueryParams<Partial<Test>> = {
    method: 'get',
    url: `${queryParams?.url ?? TestRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestApi>(config)
    : getResponse<TestApi, Partial<Test>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Test>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Test>> = {
    method: 'delete',
    url: `${queryParams?.url ?? TestRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Test>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testDeleteMany = (
  data: (Partial<Test> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Test> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Test> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? TestRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Test> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const testUpdateOne = (
  id: number,
  data: Partial<Test>,
  queryParams?: QueryParams<Partial<Test>>,
): Promise<Test> => {
  const config: QueryParams<Partial<Test>> = {
    method: 'put',
    url: `${queryParams?.url ?? TestRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Test>(config)
    : getResponse<Test, Partial<Test>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testUpdateMany = (
  data: (Partial<Test> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Test> & { id: number }>,
): Promise<Test[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Test> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? TestRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Test[]>(config)
        : getResponse<Test[], Partial<Test> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const testCreateOne = (
  data: Partial<Test>,
  queryParams?: QueryParams<Partial<Test>>,
): Promise<Test> => {
  const config: QueryParams<Partial<Test>> = {
    method: 'post',
    url: queryParams?.url ?? TestRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Test>(config)
    : getResponse<Test, Partial<Test>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testCreateMany = (
  data: Partial<Test>[],
  queryParams?: QueryParamsWithList<Partial<Test>>,
): Promise<Test[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Test>> = {
        method: 'post',
        url: queryParams?.url ?? TestRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Test[]>(config)
        : getResponse<Test[], Partial<Test>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
