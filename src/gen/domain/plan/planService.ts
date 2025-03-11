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
import { PlanRoute } from '../../routes/Routes';
import type { Plan } from './Plan';
import type { PlanApi } from './PlanApi';

export const planGetMany = (
  queryParams?: QueryParams<Partial<Plan>>,
): Promise<ResourceList<PlanApi>> => {
  const config: QueryParams<Partial<Plan>> = {
    method: 'get',
    url: queryParams?.url ?? PlanRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanApi>>(config)
    : getResponse<ResourceList<PlanApi>, Partial<Plan>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Plan>>,
): Promise<PlanApi> => {
  const config: QueryParams<Partial<Plan>> = {
    method: 'get',
    url: `${queryParams?.url ?? PlanRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanApi>(config)
    : getResponse<PlanApi, Partial<Plan>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Plan>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Plan>> = {
    method: 'delete',
    url: `${queryParams?.url ?? PlanRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Plan>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planDeleteMany = (
  data: (Partial<Plan> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Plan> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Plan> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? PlanRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Plan> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planUpdateOne = (
  id: number,
  data: Partial<Plan>,
  queryParams?: QueryParams<Partial<Plan>>,
): Promise<Plan> => {
  const config: QueryParams<Partial<Plan>> = {
    method: 'put',
    url: `${queryParams?.url ?? PlanRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan, Partial<Plan>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planUpdateMany = (
  data: (Partial<Plan> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Plan> & { id: number }>,
): Promise<Plan[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Plan> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? PlanRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Plan[]>(config)
        : getResponse<Plan[], Partial<Plan> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planCreateOne = (
  data: Partial<Plan>,
  queryParams?: QueryParams<Partial<Plan>>,
): Promise<Plan> => {
  const config: QueryParams<Partial<Plan>> = {
    method: 'post',
    url: queryParams?.url ?? PlanRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan, Partial<Plan>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planCreateMany = (
  data: Partial<Plan>[],
  queryParams?: QueryParamsWithList<Partial<Plan>>,
): Promise<Plan[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Plan>> = {
        method: 'post',
        url: queryParams?.url ?? PlanRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Plan[]>(config)
        : getResponse<Plan[], Partial<Plan>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
