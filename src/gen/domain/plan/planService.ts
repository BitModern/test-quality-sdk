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
  queryParams?: QueryParams<Plan>,
): Promise<ResourceList<PlanApi>> => {
  const config: QueryParams<Plan> = {
    method: 'get',
    url: queryParams?.url ?? PlanRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanApi>>(config)
    : getResponse<ResourceList<PlanApi>, Plan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planGetOne = (
  id: number,
  queryParams?: QueryParams<Plan>,
): Promise<PlanApi> => {
  const config: QueryParams<Plan> = {
    method: 'get',
    url: `${queryParams?.url ?? PlanRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanApi>(config)
    : getResponse<PlanApi, Plan>(queryParams?.api ?? _client?.api, config);
};

export const planDeleteOne = (
  id: number,
  queryParams?: QueryParams<Plan>,
): Promise<MessageResponse> => {
  const config: QueryParams<Plan> = {
    method: 'delete',
    url: `${queryParams?.url ?? PlanRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Plan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planDeleteMany = (
  data: Partial<Plan>[],
  queryParams?: QueryParamsWithList<Plan>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Plan> = {
        method: 'post',
        url: queryParams?.url ?? PlanRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Plan>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planUpdateOne = (
  id: number,
  data: Partial<Plan>,
  queryParams?: QueryParams<Plan>,
): Promise<Plan> => {
  const config: QueryParams<Plan> = {
    method: 'put',
    url: `${queryParams?.url ?? PlanRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan>(queryParams?.api ?? _client?.api, config);
};

export const planCreateOne = (
  data: Partial<Plan>,
  queryParams?: QueryParams<Plan>,
): Promise<Plan> => {
  const config: QueryParams<Plan> = {
    method: 'post',
    url: queryParams?.url ?? PlanRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan>(queryParams?.api ?? _client?.api, config);
};

export const planCreateMany = (
  data: Partial<Plan>[],
  queryParams?: QueryParamsWithList<Plan>,
): Promise<Plan[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Plan> = {
        method: 'post',
        url: queryParams?.url ?? PlanRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Plan[]>(config)
        : getResponse<Plan[], Plan>(queryParams?.api ?? _client?.api, config);
    }),
  );
};
