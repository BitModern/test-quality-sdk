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
import { PlanSuiteTestIncludeRoute } from '../../routes/Routes';
import type { PlanSuiteTestInclude } from './PlanSuiteTestInclude';
import type { PlanSuiteTestIncludeApi } from './PlanSuiteTestIncludeApi';

export const planSuiteTestIncludeGetMany = (
  queryParams?: QueryParams<PlanSuiteTestInclude>,
): Promise<ResourceList<PlanSuiteTestIncludeApi>> => {
  const config: QueryParams<PlanSuiteTestInclude> = {
    method: 'get',
    url: queryParams?.url ?? PlanSuiteTestIncludeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanSuiteTestIncludeApi>>(config)
    : getResponse<ResourceList<PlanSuiteTestIncludeApi>, PlanSuiteTestInclude>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteTestIncludeGetOne = (
  id: number,
  queryParams?: QueryParams<PlanSuiteTestInclude>,
): Promise<PlanSuiteTestIncludeApi> => {
  const config: QueryParams<PlanSuiteTestInclude> = {
    method: 'get',
    url: `${queryParams?.url ?? PlanSuiteTestIncludeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuiteTestIncludeApi>(config)
    : getResponse<PlanSuiteTestIncludeApi, PlanSuiteTestInclude>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteTestIncludeDeleteOne = (
  id: number,
  queryParams?: QueryParams<PlanSuiteTestInclude>,
): Promise<MessageResponse> => {
  const config: QueryParams<PlanSuiteTestInclude> = {
    method: 'delete',
    url: `${queryParams?.url ?? PlanSuiteTestIncludeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, PlanSuiteTestInclude>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteTestIncludeDeleteMany = (
  data: (Partial<PlanSuiteTestInclude> & { id: number })[],
  queryParams?: QueryParamsWithList<PlanSuiteTestInclude>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PlanSuiteTestInclude> = {
        method: 'post',
        url: queryParams?.url ?? PlanSuiteTestIncludeRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, PlanSuiteTestInclude>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planSuiteTestIncludeUpdateOne = (
  id: number,
  data: Partial<PlanSuiteTestInclude>,
  queryParams?: QueryParams<PlanSuiteTestInclude>,
): Promise<PlanSuiteTestInclude> => {
  const config: QueryParams<PlanSuiteTestInclude> = {
    method: 'put',
    url: `${queryParams?.url ?? PlanSuiteTestIncludeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuiteTestInclude>(config)
    : getResponse<PlanSuiteTestInclude>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteTestIncludeUpdateMany = (
  data: (Partial<PlanSuiteTestInclude> & { id: number })[],
  queryParams?: QueryParamsWithList<PlanSuiteTestInclude>,
): Promise<PlanSuiteTestInclude[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PlanSuiteTestInclude> = {
        method: 'post',
        url: queryParams?.url ?? PlanSuiteTestIncludeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PlanSuiteTestInclude[]>(config)
        : getResponse<PlanSuiteTestInclude[], PlanSuiteTestInclude>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planSuiteTestIncludeCreateOne = (
  data: Partial<PlanSuiteTestInclude>,
  queryParams?: QueryParams<PlanSuiteTestInclude>,
): Promise<PlanSuiteTestInclude> => {
  const config: QueryParams<PlanSuiteTestInclude> = {
    method: 'post',
    url: queryParams?.url ?? PlanSuiteTestIncludeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuiteTestInclude>(config)
    : getResponse<PlanSuiteTestInclude>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteTestIncludeCreateMany = (
  data: Partial<PlanSuiteTestInclude>[],
  queryParams?: QueryParamsWithList<PlanSuiteTestInclude>,
): Promise<PlanSuiteTestInclude[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PlanSuiteTestInclude> = {
        method: 'post',
        url: queryParams?.url ?? PlanSuiteTestIncludeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PlanSuiteTestInclude[]>(config)
        : getResponse<PlanSuiteTestInclude[], PlanSuiteTestInclude>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
