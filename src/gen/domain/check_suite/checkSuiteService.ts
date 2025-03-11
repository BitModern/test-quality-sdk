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
  queryParams?: QueryParams<CheckSuite>,
): Promise<ResourceList<CheckSuiteApi>> => {
  const config: QueryParams<CheckSuite> = {
    method: 'get',
    url: queryParams?.url ?? CheckSuiteRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CheckSuiteApi>>(config)
    : getResponse<ResourceList<CheckSuiteApi>, CheckSuite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuiteGetOne = (
  id: number,
  queryParams?: QueryParams<CheckSuite>,
): Promise<CheckSuiteApi> => {
  const config: QueryParams<CheckSuite> = {
    method: 'get',
    url: `${queryParams?.url ?? CheckSuiteRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuiteApi>(config)
    : getResponse<CheckSuiteApi, CheckSuite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuiteDeleteOne = (
  id: number,
  queryParams?: QueryParams<CheckSuite>,
): Promise<MessageResponse> => {
  const config: QueryParams<CheckSuite> = {
    method: 'delete',
    url: `${queryParams?.url ?? CheckSuiteRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CheckSuite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuiteDeleteMany = (
  data: (Partial<CheckSuite> & { id: number })[],
  queryParams?: QueryParamsWithList<CheckSuite>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CheckSuite> = {
        method: 'post',
        url: queryParams?.url ?? CheckSuiteRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, CheckSuite>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkSuiteUpdateOne = (
  id: number,
  data: Partial<CheckSuite>,
  queryParams?: QueryParams<CheckSuite>,
): Promise<CheckSuite> => {
  const config: QueryParams<CheckSuite> = {
    method: 'put',
    url: `${queryParams?.url ?? CheckSuiteRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuite>(config)
    : getResponse<CheckSuite>(queryParams?.api ?? _client?.api, config);
};

export const checkSuiteUpdateMany = (
  data: (Partial<CheckSuite> & { id: number })[],
  queryParams?: QueryParamsWithList<CheckSuite>,
): Promise<CheckSuite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CheckSuite> = {
        method: 'post',
        url: queryParams?.url ?? CheckSuiteRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckSuite[]>(config)
        : getResponse<CheckSuite[], CheckSuite>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkSuiteCreateOne = (
  data: Partial<CheckSuite>,
  queryParams?: QueryParams<CheckSuite>,
): Promise<CheckSuite> => {
  const config: QueryParams<CheckSuite> = {
    method: 'post',
    url: queryParams?.url ?? CheckSuiteRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuite>(config)
    : getResponse<CheckSuite>(queryParams?.api ?? _client?.api, config);
};

export const checkSuiteCreateMany = (
  data: Partial<CheckSuite>[],
  queryParams?: QueryParamsWithList<CheckSuite>,
): Promise<CheckSuite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CheckSuite> = {
        method: 'post',
        url: queryParams?.url ?? CheckSuiteRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckSuite[]>(config)
        : getResponse<CheckSuite[], CheckSuite>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
