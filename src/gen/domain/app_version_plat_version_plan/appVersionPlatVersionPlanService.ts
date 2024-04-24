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
import type { AppVersionPlatVersionPlan } from './AppVersionPlatVersionPlan';
import type { AppVersionPlatVersionPlanApi } from './AppVersionPlatVersionPlanApi';

export const appVersionPlatVersionPlanDetach = (
  data: Partial<AppVersionPlatVersionPlan>,
  queryParams?: QueryParams<AppVersionPlatVersionPlan>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<AppVersionPlatVersionPlan> = {
    method: 'delete',
    url: `/app_version_plat_version_plan/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, AppVersionPlatVersionPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const appVersionPlatVersionPlanUpdateOne = (
  id: number,
  data: Partial<AppVersionPlatVersionPlan>,
  queryParams?: QueryParams<AppVersionPlatVersionPlan>,
): Promise<AppVersionPlatVersionPlan> => {
  const config: QueryParams<AppVersionPlatVersionPlan> = {
    method: 'put',
    url: `/app_version_plat_version_plan/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersionPlan>(config)
    : getResponse<AppVersionPlatVersionPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const appVersionPlatVersionPlanCreateOne = (
  data: Partial<AppVersionPlatVersionPlan>,
  queryParams?: QueryParams<AppVersionPlatVersionPlan>,
): Promise<AppVersionPlatVersionPlan> => {
  const config: QueryParams<AppVersionPlatVersionPlan> = {
    method: 'post',
    url: queryParams?.url ?? `/app_version_plat_version_plan`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersionPlan>(config)
    : getResponse<AppVersionPlatVersionPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const appVersionPlatVersionPlanCreateMany = (
  data: Partial<AppVersionPlatVersionPlan>[],
  queryParams?: QueryParamsWithList<AppVersionPlatVersionPlan>,
): Promise<AppVersionPlatVersionPlan[]> => {
  const config: QueryParamsWithList<AppVersionPlatVersionPlan> = {
    method: 'post',
    url: queryParams?.url ?? `/app_version_plat_version_plan`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersionPlan[]>(config)
    : getResponse<AppVersionPlatVersionPlan[], AppVersionPlatVersionPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const appVersionPlatVersionPlanGetMany = (
  queryParams?: QueryParams<AppVersionPlatVersionPlan>,
): Promise<ResourceList<AppVersionPlatVersionPlanApi>> => {
  const config: QueryParams<AppVersionPlatVersionPlan> = {
    method: 'get',
    url: queryParams?.url ?? `/app_version_plat_version_plan`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AppVersionPlatVersionPlanApi>>(
        config,
      )
    : getResponse<
        ResourceList<AppVersionPlatVersionPlanApi>,
        AppVersionPlatVersionPlan
      >(queryParams?.api ?? _client?.api, config);
};

export const appVersionPlatVersionPlanGetOne = (
  id: number,
  queryParams?: QueryParams<AppVersionPlatVersionPlan>,
): Promise<AppVersionPlatVersionPlanApi> => {
  const config: QueryParams<AppVersionPlatVersionPlan> = {
    method: 'get',
    url: `${queryParams?.url ?? `/app_version_plat_version_plan/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersionPlanApi>(config)
    : getResponse<AppVersionPlatVersionPlanApi, AppVersionPlatVersionPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
