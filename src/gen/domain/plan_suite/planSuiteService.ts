/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PlanRoute, SuiteRoute } from '../../routes/Routes';
import { Suite } from '../suite/Suite';
import { Plan } from '../plan/Plan';
import { PlanSuite } from './PlanSuite';
import { PlanSuiteApi } from './PlanSuiteApi';

export const planSuiteDetach = (
  data: Partial<PlanSuite>,
  queryParams?: QueryParams<PlanSuite>
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
        queryParams?.api || _client?.api,
        config
      );
};

export const planSuiteUpdateOne = (
  id: number,
  data: Partial<PlanSuite>,
  queryParams?: QueryParams<PlanSuite>
): Promise<Plan> => {
  const config: QueryParams<PlanSuite> = {
    method: 'put',
    url: `/plan_suite/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan, Partial<PlanSuite>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const planSuiteGetMany = (
  queryParams?: QueryParams<PlanSuite>
): Promise<ResourceList<PlanSuiteApi>> => {
  const config: QueryParams<PlanSuite> = {
    method: 'get',
    url: queryParams?.url || `/plan_suite`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanSuiteApi>>(config)
    : getResponse<ResourceList<PlanSuiteApi>, PlanSuite>(
        queryParams?.api || _client?.api,
        config
      );
};

export const planSuiteGetOne = (
  id: number,
  queryParams?: QueryParams<PlanSuite>
): Promise<PlanSuiteApi> => {
  const config: QueryParams<PlanSuite> = {
    method: 'get',
    url: `${queryParams?.url || `/plan_suite/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuiteApi>(config)
    : getResponse<PlanSuiteApi, PlanSuite>(
        queryParams?.api || _client?.api,
        config
      );
};

/**
 * planAttachManySuite
 * This will remove any associations not in the list.
 * @param planId
 * @param list of children to associate
 * @param queryParams
 */
export const planAttachManySuite = (
  planId: number,
  list: Partial<Suite>[],
  queryParams?: QueryParams<Plan>
): Promise<Plan> => {
  const config: QueryParams<Plan & { suite: Partial<Suite>[] }> = {
    method: 'put',
    url: `${PlanRoute()}/${planId}`,
    params: queryParams?.params,
    data: {
      suite: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan>(queryParams?.api || _client?.api, config);
};

/**
 * suiteAttachManyPlan
 * This will remove any associations not in the list.
 * @param suiteId
 * @param list of children to associate
 * @param queryParams
 */
export const suiteAttachManyPlan = (
  suiteId: number,
  list: Partial<Plan>[],
  queryParams?: QueryParams<Suite>
): Promise<Suite> => {
  const config: QueryParams<Suite & { plan: Partial<Plan>[] }> = {
    method: 'put',
    url: `${SuiteRoute()}/${suiteId}`,
    params: queryParams?.params,
    data: {
      plan: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<Suite>(queryParams?.api || _client?.api, config);
};

export const planAttachSuite = (
  planId: number,
  suiteId: number,
  planSuite?: Partial<PlanSuite>,
  queryParams?: QueryParams
): Promise<Plan> => {
  const config: QueryParams<{
    id: number;
    suite_id: number;
    plan_suite?: Partial<PlanSuite>;
  }> = {
    method: 'put',
    url: `${PlanRoute()}/${planId}`,
    params: queryParams?.params,
    data: {
      id: planId,
      suite_id: suiteId,
      plan_suite: planSuite,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<
        Plan,
        { id: number; suite_id: number; plan_suite?: Partial<PlanSuite> }
      >(queryParams?.api || _client?.api, config);
};

export const planCreateWithSuite = (
  suiteId: number,
  data: Partial<Plan>,
  planSuite?: Partial<PlanSuite>,
  queryParams?: QueryParams
): Promise<Plan> => {
  const config: QueryParams<
    Plan & { suite_id: number; plan_suite?: Partial<PlanSuite> }
  > = {
    method: 'post',
    url: PlanRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      suite_id: suiteId,
      plan_suite: planSuite,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<
        Plan,
        Plan & { suite_id: number; plan_suite?: Partial<PlanSuite> }
      >(queryParams?.api || _client?.api, config);
};

export const suiteAttachPlan = (
  suiteId: number,
  planId: number,
  planSuite?: Partial<PlanSuite>,
  queryParams?: QueryParams
): Promise<Suite> => {
  const config: QueryParams<{
    id: number;
    plan_id: number;
    plan_suite?: Partial<PlanSuite>;
  }> = {
    method: 'put',
    url: `${SuiteRoute()}/${suiteId}`,
    params: queryParams?.params,
    data: {
      id: suiteId,
      plan_id: planId,
      plan_suite: planSuite,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<
        Suite,
        { id: number; plan_id: number; plan_suite: Partial<PlanSuite> }
      >(queryParams?.api || _client?.api, config);
};

export const suiteCreateWithPlan = (
  planId: number,
  data: Partial<Suite>,
  planSuite?: Partial<PlanSuite>,
  queryParams?: QueryParams
): Promise<Suite> => {
  const config: QueryParams<
    Suite & { plan_id: number; plan_suite?: Partial<PlanSuite> }
  > = {
    method: 'post',
    url: SuiteRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      plan_id: planId,
      plan_suite: planSuite,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<
        Suite,
        Suite & { plan_id: number; plan_suite?: Partial<PlanSuite> }
      >(queryParams?.api || _client?.api, config);
};
