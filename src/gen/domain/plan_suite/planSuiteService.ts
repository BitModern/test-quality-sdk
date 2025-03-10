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
import type { PlanSuite } from './PlanSuite';
import type { PlanSuiteApi } from './PlanSuiteApi';

export const planSuiteDetach = (
  data: Partial<PlanSuite>,
  queryParams?: QueryParams<PlanSuite>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<PlanSuite> = {
    method: 'delete',
    url: `/plan_suite/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, PlanSuite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteDeleteMany = (
  data: Partial<PlanSuite>[],
  queryParams?: QueryParamsWithList<PlanSuite>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PlanSuite> = {
        method: 'post',
        url: `/plan_suite/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, PlanSuite>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planSuiteUpdateOne = (
  id: number,
  data: Partial<PlanSuite>,
  queryParams?: QueryParams<PlanSuite>,
): Promise<PlanSuite> => {
  const config: QueryParams<PlanSuite> = {
    method: 'put',
    url: `/plan_suite/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuite>(config)
    : getResponse<PlanSuite>(queryParams?.api ?? _client?.api, config);
};

export const planSuiteCreateOne = (
  data: Partial<PlanSuite>,
  queryParams?: QueryParams<PlanSuite>,
): Promise<PlanSuite> => {
  const config: QueryParams<PlanSuite> = {
    method: 'post',
    url: queryParams?.url ?? `/plan_suite`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuite>(config)
    : getResponse<PlanSuite>(queryParams?.api ?? _client?.api, config);
};

export const planSuiteCreateMany = (
  data: Partial<PlanSuite>[],
  queryParams?: QueryParamsWithList<PlanSuite>,
): Promise<PlanSuite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PlanSuite> = {
        method: 'post',
        url: queryParams?.url ?? `/plan_suite`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PlanSuite[]>(config)
        : getResponse<PlanSuite[], PlanSuite>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planSuiteGetMany = (
  queryParams?: QueryParams<PlanSuite>,
): Promise<ResourceList<PlanSuiteApi>> => {
  const config: QueryParams<PlanSuite> = {
    method: 'get',
    url: queryParams?.url ?? `/plan_suite`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanSuiteApi>>(config)
    : getResponse<ResourceList<PlanSuiteApi>, PlanSuite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteGetOne = (
  id: number,
  queryParams?: QueryParams<PlanSuite>,
): Promise<PlanSuiteApi> => {
  const config: QueryParams<PlanSuite> = {
    method: 'get',
    url: `${queryParams?.url ?? `/plan_suite/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuiteApi>(config)
    : getResponse<PlanSuiteApi, PlanSuite>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
