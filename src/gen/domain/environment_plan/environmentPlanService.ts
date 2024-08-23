/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
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
  queryParams?: QueryParams<EnvironmentPlan>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<EnvironmentPlan> = {
    method: 'delete',
    url: `/environment_plan/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, EnvironmentPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentPlanUpdateOne = (
  id: number,
  data: Partial<EnvironmentPlan>,
  queryParams?: QueryParams<EnvironmentPlan>,
): Promise<EnvironmentPlan> => {
  const config: QueryParams<EnvironmentPlan> = {
    method: 'put',
    url: `/environment_plan/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentPlan>(config)
    : getResponse<EnvironmentPlan>(queryParams?.api ?? _client?.api, config);
};

export const environmentPlanCreateOne = (
  data: Partial<EnvironmentPlan>,
  queryParams?: QueryParams<EnvironmentPlan>,
): Promise<EnvironmentPlan> => {
  const config: QueryParams<EnvironmentPlan> = {
    method: 'post',
    url: queryParams?.url ?? `/environment_plan`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentPlan>(config)
    : getResponse<EnvironmentPlan>(queryParams?.api ?? _client?.api, config);
};

export const environmentPlanCreateMany = (
  data: Partial<EnvironmentPlan>[],
  queryParams?: QueryParamsWithList<EnvironmentPlan>,
): Promise<EnvironmentPlan[]> => {
  const config: QueryParamsWithList<EnvironmentPlan> = {
    method: 'post',
    url: queryParams?.url ?? `/environment_plan`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentPlan[]>(config)
    : getResponse<EnvironmentPlan[], EnvironmentPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentPlanGetMany = (
  queryParams?: QueryParams<EnvironmentPlan>,
): Promise<ResourceList<EnvironmentPlanApi>> => {
  const config: QueryParams<EnvironmentPlan> = {
    method: 'get',
    url: queryParams?.url ?? `/environment_plan`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<EnvironmentPlanApi>>(config)
    : getResponse<ResourceList<EnvironmentPlanApi>, EnvironmentPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentPlanGetOne = (
  id: number,
  queryParams?: QueryParams<EnvironmentPlan>,
): Promise<EnvironmentPlanApi> => {
  const config: QueryParams<EnvironmentPlan> = {
    method: 'get',
    url: `${queryParams?.url ?? `/environment_plan/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentPlanApi>(config)
    : getResponse<EnvironmentPlanApi, EnvironmentPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
