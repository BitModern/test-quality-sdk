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
import { SuiteRoute } from '../../routes/Routes';
import type { Suite } from './Suite';
import type { SuiteApi } from './SuiteApi';

export const suiteGetMany = (
  queryParams?: QueryParams<Partial<Suite>>,
): Promise<ResourceList<SuiteApi>> => {
  const config: QueryParams<Partial<Suite>> = {
    method: 'get',
    url: queryParams?.url ?? SuiteRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SuiteApi>>(config)
    : getResponse<ResourceList<SuiteApi>, Partial<Suite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const suiteGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Suite>>,
): Promise<SuiteApi> => {
  const config: QueryParams<Partial<Suite>> = {
    method: 'get',
    url: `${queryParams?.url ?? SuiteRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SuiteApi>(config)
    : getResponse<SuiteApi, Partial<Suite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const suiteDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Suite>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Suite>> = {
    method: 'delete',
    url: `${queryParams?.url ?? SuiteRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Suite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const suiteDeleteMany = (
  data: (Partial<Suite> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Suite> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Suite> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? SuiteRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Suite> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const suiteUpdateOne = (
  id: number,
  data: Partial<Suite>,
  queryParams?: QueryParams<Partial<Suite>>,
): Promise<Suite> => {
  const config: QueryParams<Partial<Suite>> = {
    method: 'put',
    url: `${queryParams?.url ?? SuiteRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<Suite, Partial<Suite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const suiteUpdateMany = (
  data: (Partial<Suite> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Suite> & { id: number }>,
): Promise<Suite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Suite> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? SuiteRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Suite[]>(config)
        : getResponse<Suite[], Partial<Suite> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const suiteCreateOne = (
  data: Partial<Suite>,
  queryParams?: QueryParams<Partial<Suite>>,
): Promise<Suite> => {
  const config: QueryParams<Partial<Suite>> = {
    method: 'post',
    url: queryParams?.url ?? SuiteRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<Suite, Partial<Suite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const suiteCreateMany = (
  data: Partial<Suite>[],
  queryParams?: QueryParamsWithList<Partial<Suite>>,
): Promise<Suite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Suite>> = {
        method: 'post',
        url: queryParams?.url ?? SuiteRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Suite[]>(config)
        : getResponse<Suite[], Partial<Suite>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
