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
import { RunSuiteRoute } from '../../routes/Routes';
import type { RunSuite } from './RunSuite';
import type { RunSuiteApi } from './RunSuiteApi';

export const runSuiteGetMany = (
  queryParams?: QueryParams<RunSuite>,
): Promise<ResourceList<RunSuiteApi>> => {
  const config: QueryParams<RunSuite> = {
    method: 'get',
    url: queryParams?.url ?? RunSuiteRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RunSuiteApi>>(config)
    : getResponse<ResourceList<RunSuiteApi>, RunSuite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runSuiteGetOne = (
  id: number,
  queryParams?: QueryParams<RunSuite>,
): Promise<RunSuiteApi> => {
  const config: QueryParams<RunSuite> = {
    method: 'get',
    url: `${queryParams?.url ?? RunSuiteRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunSuiteApi>(config)
    : getResponse<RunSuiteApi, RunSuite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runSuiteDeleteOne = (
  id: number,
  queryParams?: QueryParams<RunSuite>,
): Promise<MessageResponse> => {
  const config: QueryParams<RunSuite> = {
    method: 'delete',
    url: `${queryParams?.url ?? RunSuiteRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, RunSuite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runSuiteDeleteMany = (
  data: Partial<RunSuite>[],
  queryParams?: QueryParamsWithList<RunSuite>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<RunSuite> = {
        method: 'post',
        url: queryParams?.url ?? RunSuiteRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, RunSuite>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const runSuiteUpdateOne = (
  id: number,
  data: Partial<RunSuite>,
  queryParams?: QueryParams<RunSuite>,
): Promise<RunSuite> => {
  const config: QueryParams<RunSuite> = {
    method: 'put',
    url: `${queryParams?.url ?? RunSuiteRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunSuite>(config)
    : getResponse<RunSuite>(queryParams?.api ?? _client?.api, config);
};

export const runSuiteCreateOne = (
  data: Partial<RunSuite>,
  queryParams?: QueryParams<RunSuite>,
): Promise<RunSuite> => {
  const config: QueryParams<RunSuite> = {
    method: 'post',
    url: queryParams?.url ?? RunSuiteRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunSuite>(config)
    : getResponse<RunSuite>(queryParams?.api ?? _client?.api, config);
};

export const runSuiteCreateMany = (
  data: Partial<RunSuite>[],
  queryParams?: QueryParamsWithList<RunSuite>,
): Promise<RunSuite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<RunSuite> = {
        method: 'post',
        url: queryParams?.url ?? RunSuiteRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<RunSuite[]>(config)
        : getResponse<RunSuite[], RunSuite>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
