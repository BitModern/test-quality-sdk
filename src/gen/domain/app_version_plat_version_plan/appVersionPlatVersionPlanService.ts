/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { AppVersionPlatVersionRoute, PlanRoute } from '../../routes/Routes';
import { Plan } from '../plan/Plan';
import { AppVersionPlatVersion } from '../app_version_plat_version/AppVersionPlatVersion';
import { AppVersionPlatVersionPlan } from './AppVersionPlatVersionPlan';
import { AppVersionPlatVersionPlanApi } from './AppVersionPlatVersionPlanApi';

export const appVersionPlatVersionPlanDetach = (
  data: Partial<AppVersionPlatVersionPlan>,
  queryParams?: QueryParams<AppVersionPlatVersionPlan>
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
        queryParams?.api || _client?.api,
        config
      );
};

export const appVersionPlatVersionPlanUpdateOne = (
  id: number,
  data: Partial<AppVersionPlatVersionPlan>,
  queryParams?: QueryParams<AppVersionPlatVersionPlan>
): Promise<AppVersionPlatVersion> => {
  const config: QueryParams<AppVersionPlatVersionPlan> = {
    method: 'put',
    url: `/app_version_plat_version_plan/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersion>(config)
    : getResponse<AppVersionPlatVersion, Partial<AppVersionPlatVersionPlan>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appVersionPlatVersionPlanGetMany = (
  queryParams?: QueryParams<AppVersionPlatVersionPlan>
): Promise<ResourceList<AppVersionPlatVersionPlanApi>> => {
  const config: QueryParams<AppVersionPlatVersionPlan> = {
    method: 'get',
    url: queryParams?.url || `/app_version_plat_version_plan`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AppVersionPlatVersionPlanApi>>(
        config
      )
    : getResponse<
        ResourceList<AppVersionPlatVersionPlanApi>,
        AppVersionPlatVersionPlan
      >(queryParams?.api || _client?.api, config);
};

export const appVersionPlatVersionPlanGetOne = (
  id: number,
  queryParams?: QueryParams<AppVersionPlatVersionPlan>
): Promise<AppVersionPlatVersionPlanApi> => {
  const config: QueryParams<AppVersionPlatVersionPlan> = {
    method: 'get',
    url: `${queryParams?.url || `/app_version_plat_version_plan/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersionPlanApi>(config)
    : getResponse<AppVersionPlatVersionPlanApi, AppVersionPlatVersionPlan>(
        queryParams?.api || _client?.api,
        config
      );
};

/**
 * appVersionPlatVersionAttachManyPlan
 * This will remove any associations not in the list.
 * @param appVersionPlatVersionId
 * @param list of children to associate
 * @param queryParams
 */
export const appVersionPlatVersionAttachManyPlan = (
  appVersionPlatVersionId: number,
  list: Partial<Plan>[],
  queryParams?: QueryParams<AppVersionPlatVersion>
): Promise<AppVersionPlatVersion> => {
  const config: QueryParams<AppVersionPlatVersion & { plan: Partial<Plan>[] }> =
    {
      method: 'put',
      url: `${AppVersionPlatVersionRoute()}/${appVersionPlatVersionId}`,
      params: queryParams?.params,
      data: {
        plan: list,
      },
    };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersion>(config)
    : getResponse<AppVersionPlatVersion>(
        queryParams?.api || _client?.api,
        config
      );
};

/**
 * planAttachManyAppVersionPlatVersion
 * This will remove any associations not in the list.
 * @param planId
 * @param list of children to associate
 * @param queryParams
 */
export const planAttachManyAppVersionPlatVersion = (
  planId: number,
  list: Partial<AppVersionPlatVersion>[],
  queryParams?: QueryParams<Plan>
): Promise<Plan> => {
  const config: QueryParams<
    Plan & { app_version_plat_version: Partial<AppVersionPlatVersion>[] }
  > = {
    method: 'put',
    url: `${PlanRoute()}/${planId}`,
    params: queryParams?.params,
    data: {
      app_version_plat_version: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan>(queryParams?.api || _client?.api, config);
};

export const appVersionPlatVersionAttachPlan = (
  appVersionPlatVersionId: number,
  planId: number,
  appVersionPlatVersionPlan?: Partial<AppVersionPlatVersionPlan>,
  queryParams?: QueryParams
): Promise<AppVersionPlatVersion> => {
  const config: QueryParams<{
    id: number;
    plan_id: number;
    app_version_plat_version_plan?: Partial<AppVersionPlatVersionPlan>;
  }> = {
    method: 'put',
    url: `${AppVersionPlatVersionRoute()}/${appVersionPlatVersionId}`,
    params: queryParams?.params,
    data: {
      id: appVersionPlatVersionId,
      plan_id: planId,
      app_version_plat_version_plan: appVersionPlatVersionPlan,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersion>(config)
    : getResponse<
        AppVersionPlatVersion,
        {
          id: number;
          plan_id: number;
          app_version_plat_version_plan?: Partial<AppVersionPlatVersionPlan>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const appVersionPlatVersionCreateWithPlan = (
  planId: number,
  data: Partial<AppVersionPlatVersion>,
  appVersionPlatVersionPlan?: Partial<AppVersionPlatVersionPlan>,
  queryParams?: QueryParams
): Promise<AppVersionPlatVersion> => {
  const config: QueryParams<
    AppVersionPlatVersion & {
      plan_id: number;
      app_version_plat_version_plan?: Partial<AppVersionPlatVersionPlan>;
    }
  > = {
    method: 'post',
    url: AppVersionPlatVersionRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      plan_id: planId,
      app_version_plat_version_plan: appVersionPlatVersionPlan,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersion>(config)
    : getResponse<
        AppVersionPlatVersion,
        AppVersionPlatVersion & {
          plan_id: number;
          app_version_plat_version_plan?: Partial<AppVersionPlatVersionPlan>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const planAttachAppVersionPlatVersion = (
  planId: number,
  appVersionPlatVersionId: number,
  appVersionPlatVersionPlan?: Partial<AppVersionPlatVersionPlan>,
  queryParams?: QueryParams
): Promise<Plan> => {
  const config: QueryParams<{
    id: number;
    app_version_plat_version_id: number;
    app_version_plat_version_plan?: Partial<AppVersionPlatVersionPlan>;
  }> = {
    method: 'put',
    url: `${PlanRoute()}/${planId}`,
    params: queryParams?.params,
    data: {
      id: planId,
      app_version_plat_version_id: appVersionPlatVersionId,
      app_version_plat_version_plan: appVersionPlatVersionPlan,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<
        Plan,
        {
          id: number;
          app_version_plat_version_id: number;
          app_version_plat_version_plan: Partial<AppVersionPlatVersionPlan>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const planCreateWithAppVersionPlatVersion = (
  appVersionPlatVersionId: number,
  data: Partial<Plan>,
  appVersionPlatVersionPlan?: Partial<AppVersionPlatVersionPlan>,
  queryParams?: QueryParams
): Promise<Plan> => {
  const config: QueryParams<
    Plan & {
      app_version_plat_version_id: number;
      app_version_plat_version_plan?: Partial<AppVersionPlatVersionPlan>;
    }
  > = {
    method: 'post',
    url: PlanRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      app_version_plat_version_id: appVersionPlatVersionId,
      app_version_plat_version_plan: appVersionPlatVersionPlan,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<
        Plan,
        Plan & {
          app_version_plat_version_id: number;
          app_version_plat_version_plan?: Partial<AppVersionPlatVersionPlan>;
        }
      >(queryParams?.api || _client?.api, config);
};
