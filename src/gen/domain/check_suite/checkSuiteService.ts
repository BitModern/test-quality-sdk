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
import { CheckSuiteRoute } from '../../routes/Routes';
import type { CheckSuite } from './CheckSuite';
import type { CheckSuiteApi } from './CheckSuiteApi';

export const checkSuiteGetMany = (
  queryParams?: QueryParams<Partial<CheckSuite>>,
): Promise<ResourceList<CheckSuiteApi>> => {
  const config: QueryParams<Partial<CheckSuite>> = {
    method: 'get',
    url: queryParams?.url ?? CheckSuiteRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CheckSuiteApi>>(config)
    : getResponse<ResourceList<CheckSuiteApi>, Partial<CheckSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuiteGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<CheckSuite>>,
): Promise<CheckSuiteApi> => {
  const config: QueryParams<Partial<CheckSuite>> = {
    method: 'get',
    url: `${queryParams?.url ?? CheckSuiteRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuiteApi>(config)
    : getResponse<CheckSuiteApi, Partial<CheckSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuiteDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<CheckSuite>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<CheckSuite>> = {
    method: 'delete',
    url: `${queryParams?.url ?? CheckSuiteRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<CheckSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuiteDeleteMany = (
  data: (Partial<CheckSuite> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CheckSuite> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CheckSuite> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? CheckSuiteRoute() + '/delete',
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<CheckSuite> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkSuiteUpdateOne = (
  id: number,
  data: Partial<CheckSuite>,
  queryParams?: QueryParams<Partial<CheckSuite>>,
): Promise<CheckSuite> => {
  const config: QueryParams<Partial<CheckSuite>> = {
    method: 'put',
    url: `${queryParams?.url ?? CheckSuiteRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuite>(config)
    : getResponse<CheckSuite, Partial<CheckSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuiteUpdateMany = (
  data: (Partial<CheckSuite> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CheckSuite> & { id: number }>,
): Promise<CheckSuite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CheckSuite> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? CheckSuiteRoute(),
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckSuite[]>(config)
        : getResponse<CheckSuite[], Partial<CheckSuite> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkSuiteCreateOne = (
  data: Partial<CheckSuite>,
  queryParams?: QueryParams<Partial<CheckSuite>>,
): Promise<CheckSuite> => {
  const config: QueryParams<Partial<CheckSuite>> = {
    method: 'post',
    url: queryParams?.url ?? CheckSuiteRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuite>(config)
    : getResponse<CheckSuite, Partial<CheckSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuiteCreateMany = (
  data: Partial<CheckSuite>[],
  queryParams?: QueryParamsWithList<Partial<CheckSuite>>,
): Promise<CheckSuite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CheckSuite>> = {
        method: 'post',
        url: queryParams?.url ?? CheckSuiteRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckSuite[]>(config)
        : getResponse<CheckSuite[], Partial<CheckSuite>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
