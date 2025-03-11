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
  queryParams?: QueryParams<Partial<PlanSuite>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<PlanSuite>> = {
    method: 'delete',
    url: `/plan_suite/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<PlanSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteDeleteMany = (
  data: (Partial<PlanSuite> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<PlanSuite & { id: number }>>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PlanSuite> & { id: number }> = {
        method: 'post',
        url: `/plan_suite/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<PlanSuite> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planSuiteUpdateOne = (
  id: number,
  data: Partial<PlanSuite>,
  queryParams?: QueryParams<Partial<PlanSuite>>,
): Promise<PlanSuite> => {
  const config: QueryParams<Partial<PlanSuite>> = {
    method: 'put',
    url: `/plan_suite/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuite>(config)
    : getResponse<PlanSuite, Partial<PlanSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteUpdateMany = (
  data: (Partial<PlanSuite> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<PlanSuite> & { id: number }>,
): Promise<PlanSuite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PlanSuite> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? `/plan_suite`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PlanSuite[]>(config)
        : getResponse<PlanSuite[], Partial<PlanSuite> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planSuiteCreateOne = (
  data: Partial<PlanSuite>,
  queryParams?: QueryParams<Partial<PlanSuite>>,
): Promise<PlanSuite> => {
  const config: QueryParams<Partial<PlanSuite>> = {
    method: 'post',
    url: queryParams?.url ?? `/plan_suite`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuite>(config)
    : getResponse<PlanSuite, Partial<PlanSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteCreateMany = (
  data: Partial<PlanSuite>[],
  queryParams?: QueryParamsWithList<Partial<PlanSuite>>,
): Promise<PlanSuite[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PlanSuite>> = {
        method: 'post',
        url: queryParams?.url ?? `/plan_suite`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PlanSuite[]>(config)
        : getResponse<PlanSuite[], Partial<PlanSuite>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planSuiteGetMany = (
  queryParams?: QueryParams<Partial<PlanSuite>>,
): Promise<ResourceList<PlanSuiteApi>> => {
  const config: QueryParams<Partial<PlanSuite>> = {
    method: 'get',
    url: queryParams?.url ?? `/plan_suite`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanSuiteApi>>(config)
    : getResponse<ResourceList<PlanSuiteApi>, Partial<PlanSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planSuiteGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<PlanSuite>>,
): Promise<PlanSuiteApi> => {
  const config: QueryParams<Partial<PlanSuite>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/plan_suite/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuiteApi>(config)
    : getResponse<PlanSuiteApi, Partial<PlanSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
