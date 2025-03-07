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
  queryParams?: QueryParams<Suite>,
): Promise<ResourceList<SuiteApi>> => {
  const config: QueryParams<Suite> = {
    method: 'get',
    url: queryParams?.url ?? SuiteRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SuiteApi>>(config)
    : getResponse<ResourceList<SuiteApi>, Suite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const suiteGetOne = (
  id: number,
  queryParams?: QueryParams<Suite>,
): Promise<SuiteApi> => {
  const config: QueryParams<Suite> = {
    method: 'get',
    url: `${queryParams?.url ?? SuiteRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SuiteApi>(config)
    : getResponse<SuiteApi, Suite>(queryParams?.api ?? _client?.api, config);
};

export const suiteDeleteOne = (
  id: number,
  queryParams?: QueryParams<Suite>,
): Promise<MessageResponse> => {
  const config: QueryParams<Suite> = {
    method: 'delete',
    url: `${queryParams?.url ?? SuiteRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Suite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const suiteDeleteMany = (
  data: Partial<Suite>[],
  queryParams?: QueryParamsWithList<Suite>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Suite> = {
        method: 'post',
        url: queryParams?.url ?? SuiteRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Suite>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const suiteUpdateOne = (
  id: number,
  data: Partial<Suite>,
  queryParams?: QueryParams<Suite>,
): Promise<Suite> => {
  const config: QueryParams<Suite> = {
    method: 'put',
    url: `${queryParams?.url ?? SuiteRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<Suite>(queryParams?.api ?? _client?.api, config);
};

export const suiteCreateOne = (
  data: Partial<Suite>,
  queryParams?: QueryParams<Suite>,
): Promise<Suite> => {
  const config: QueryParams<Suite> = {
    method: 'post',
    url: queryParams?.url ?? SuiteRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<Suite>(queryParams?.api ?? _client?.api, config);
};

export const suiteCreateMany = (
  data: Partial<Suite>[],
  queryParams?: QueryParamsWithList<Suite>,
): Promise<Suite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Suite> = {
        method: 'post',
        url: queryParams?.url ?? SuiteRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Suite[]>(config)
        : getResponse<Suite[], Suite>(queryParams?.api ?? _client?.api, config);
    }),
  );
};
