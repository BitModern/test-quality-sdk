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
import { TestQualityRoute } from '../../routes/Routes';
import type { TestQuality } from './TestQuality';
import type { TestQualityApi } from './TestQualityApi';

export const testQualityGetMany = (
  queryParams?: QueryParams<TestQuality>,
): Promise<ResourceList<TestQualityApi>> => {
  const config: QueryParams<TestQuality> = {
    method: 'get',
    url: queryParams?.url ?? TestQualityRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<TestQualityApi>>(config)
    : getResponse<ResourceList<TestQualityApi>, TestQuality>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testQualityGetOne = (
  id: number,
  queryParams?: QueryParams<TestQuality>,
): Promise<TestQualityApi> => {
  const config: QueryParams<TestQuality> = {
    method: 'get',
    url: `${queryParams?.url ?? TestQualityRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityApi>(config)
    : getResponse<TestQualityApi, TestQuality>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testQualityDeleteOne = (
  id: number,
  queryParams?: QueryParams<TestQuality>,
): Promise<MessageResponse> => {
  const config: QueryParams<TestQuality> = {
    method: 'delete',
    url: `${queryParams?.url ?? TestQualityRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, TestQuality>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testQualityDeleteMany = (
  data: (Partial<TestQuality> & { id: number })[],
  queryParams?: QueryParamsWithList<TestQuality>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<TestQuality> = {
        method: 'post',
        url: queryParams?.url ?? TestQualityRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, TestQuality>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const testQualityUpdateOne = (
  id: number,
  data: Partial<TestQuality>,
  queryParams?: QueryParams<TestQuality>,
): Promise<TestQuality> => {
  const config: QueryParams<TestQuality> = {
    method: 'put',
    url: `${queryParams?.url ?? TestQualityRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQuality>(config)
    : getResponse<TestQuality>(queryParams?.api ?? _client?.api, config);
};

export const testQualityUpdateMany = (
  data: (Partial<TestQuality> & { id: number })[],
  queryParams?: QueryParamsWithList<TestQuality>,
): Promise<TestQuality[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<TestQuality> = {
        method: 'post',
        url: queryParams?.url ?? TestQualityRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<TestQuality[]>(config)
        : getResponse<TestQuality[], TestQuality>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const testQualityCreateOne = (
  data: Partial<TestQuality>,
  queryParams?: QueryParams<TestQuality>,
): Promise<TestQuality> => {
  const config: QueryParams<TestQuality> = {
    method: 'post',
    url: queryParams?.url ?? TestQualityRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQuality>(config)
    : getResponse<TestQuality>(queryParams?.api ?? _client?.api, config);
};

export const testQualityCreateMany = (
  data: Partial<TestQuality>[],
  queryParams?: QueryParamsWithList<TestQuality>,
): Promise<TestQuality[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<TestQuality> = {
        method: 'post',
        url: queryParams?.url ?? TestQualityRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<TestQuality[]>(config)
        : getResponse<TestQuality[], TestQuality>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
