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
import type { EnvironmentPlan } from './EnvironmentPlan';
import type { EnvironmentPlanApi } from './EnvironmentPlanApi';

export const environmentPlanDetach = (
  data: Partial<EnvironmentPlan>,
  queryParams?: QueryParams<Partial<EnvironmentPlan>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<EnvironmentPlan>> = {
    method: 'delete',
    url: `/environment_plan/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<EnvironmentPlan>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentPlanDeleteMany = (
  data: (Partial<EnvironmentPlan> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<EnvironmentPlan & { id: number }>>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<EnvironmentPlan> & { id: number }
      > = {
        method: 'post',
        url: `/environment_plan/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<EnvironmentPlan> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const environmentPlanUpdateOne = (
  id: number,
  data: Partial<EnvironmentPlan>,
  queryParams?: QueryParams<Partial<EnvironmentPlan>>,
): Promise<EnvironmentPlan> => {
  const config: QueryParams<Partial<EnvironmentPlan>> = {
    method: 'put',
    url: `/environment_plan/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentPlan>(config)
    : getResponse<EnvironmentPlan, Partial<EnvironmentPlan>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentPlanUpdateMany = (
  data: (Partial<EnvironmentPlan> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<EnvironmentPlan> & { id: number }>,
): Promise<EnvironmentPlan[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<EnvironmentPlan> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/environment_plan`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<EnvironmentPlan[]>(config)
        : getResponse<
            EnvironmentPlan[],
            Partial<EnvironmentPlan> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const environmentPlanCreateOne = (
  data: Partial<EnvironmentPlan>,
  queryParams?: QueryParams<Partial<EnvironmentPlan>>,
): Promise<EnvironmentPlan> => {
  const config: QueryParams<Partial<EnvironmentPlan>> = {
    method: 'post',
    url: queryParams?.url ?? `/environment_plan`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentPlan>(config)
    : getResponse<EnvironmentPlan, Partial<EnvironmentPlan>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentPlanCreateMany = (
  data: Partial<EnvironmentPlan>[],
  queryParams?: QueryParamsWithList<Partial<EnvironmentPlan>>,
): Promise<EnvironmentPlan[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<EnvironmentPlan>> = {
        method: 'post',
        url: queryParams?.url ?? `/environment_plan`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<EnvironmentPlan[]>(config)
        : getResponse<EnvironmentPlan[], Partial<EnvironmentPlan>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const environmentPlanGetMany = (
  queryParams?: QueryParams<Partial<EnvironmentPlan>>,
): Promise<ResourceList<EnvironmentPlanApi>> => {
  const config: QueryParams<Partial<EnvironmentPlan>> = {
    method: 'get',
    url: queryParams?.url ?? `/environment_plan`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<EnvironmentPlanApi>>(config)
    : getResponse<ResourceList<EnvironmentPlanApi>, Partial<EnvironmentPlan>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentPlanGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<EnvironmentPlan>>,
): Promise<EnvironmentPlanApi> => {
  const config: QueryParams<Partial<EnvironmentPlan>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/environment_plan/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentPlanApi>(config)
    : getResponse<EnvironmentPlanApi, Partial<EnvironmentPlan>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
