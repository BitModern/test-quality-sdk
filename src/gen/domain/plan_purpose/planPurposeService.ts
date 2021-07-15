/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PlanRoute, PurposeRoute } from '../../routes/Routes';
import { Purpose } from '../purpose/Purpose';
import { Plan } from '../plan/Plan';
import { PlanPurpose } from './PlanPurpose';
import { PlanPurposeApi } from './PlanPurposeApi';

export const planPurposeDetach = (
  data: Partial<PlanPurpose>,
  queryParams?: QueryParams<PlanPurpose>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<PlanPurpose> = {
    method: 'delete',
    url: `/plan_purpose/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, PlanPurpose>(
        queryParams?.api || _client?.api,
        config
      );
};

export const planPurposeUpdateOne = (
  id: number,
  data: Partial<PlanPurpose>,
  queryParams?: QueryParams<PlanPurpose>
): Promise<Plan> => {
  const config: QueryParams<PlanPurpose> = {
    method: 'put',
    url: `/plan_purpose/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan, Partial<PlanPurpose>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const planPurposeGetMany = (
  queryParams?: QueryParams<PlanPurpose>
): Promise<ResourceList<PlanPurposeApi>> => {
  const config: QueryParams<PlanPurpose> = {
    method: 'get',
    url: queryParams?.url || `/plan_purpose`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanPurposeApi>>(config)
    : getResponse<ResourceList<PlanPurposeApi>, PlanPurpose>(
        queryParams?.api || _client?.api,
        config
      );
};

export const planPurposeGetOne = (
  id: number,
  queryParams?: QueryParams<PlanPurpose>
): Promise<PlanPurposeApi> => {
  const config: QueryParams<PlanPurpose> = {
    method: 'get',
    url: `${queryParams?.url || `/plan_purpose/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPurposeApi>(config)
    : getResponse<PlanPurposeApi, PlanPurpose>(
        queryParams?.api || _client?.api,
        config
      );
};

/**
 * planAttachManyPurpose
 * This will remove any associations not in the list.
 * @param planId
 * @param list of children to associate
 * @param queryParams
 */
export const planAttachManyPurpose = (
  planId: number,
  list: Partial<Purpose>[],
  queryParams?: QueryParams<Plan>
): Promise<Plan> => {
  const config: QueryParams<Plan & { purpose: Partial<Purpose>[] }> = {
    method: 'put',
    url: `${PlanRoute()}/${planId}`,
    params: queryParams?.params,
    data: {
      purpose: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan>(queryParams?.api || _client?.api, config);
};

/**
 * purposeAttachManyPlan
 * This will remove any associations not in the list.
 * @param purposeId
 * @param list of children to associate
 * @param queryParams
 */
export const purposeAttachManyPlan = (
  purposeId: number,
  list: Partial<Plan>[],
  queryParams?: QueryParams<Purpose>
): Promise<Purpose> => {
  const config: QueryParams<Purpose & { plan: Partial<Plan>[] }> = {
    method: 'put',
    url: `${PurposeRoute()}/${purposeId}`,
    params: queryParams?.params,
    data: {
      plan: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Purpose>(config)
    : getResponse<Purpose>(queryParams?.api || _client?.api, config);
};

export const planAttachPurpose = (
  planId: number,
  purposeId: number,
  planPurpose?: Partial<PlanPurpose>,
  queryParams?: QueryParams
): Promise<Plan> => {
  const config: QueryParams<{
    id: number;
    purpose_id: number;
    plan_purpose?: Partial<PlanPurpose>;
  }> = {
    method: 'post',
    url: PlanRoute(),
    params: queryParams?.params,
    data: {
      id: planId,
      purpose_id: purposeId,
      plan_purpose: planPurpose,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<
        Plan,
        { id: number; purpose_id: number; plan_purpose?: Partial<PlanPurpose> }
      >(queryParams?.api || _client?.api, config);
};

export const planCreateWithPurpose = (
  purposeId: number,
  data: Partial<Plan>,
  planPurpose?: Partial<PlanPurpose>,
  queryParams?: QueryParams
): Promise<Plan> => {
  const config: QueryParams<
    Plan & { purpose_id: number; plan_purpose?: Partial<PlanPurpose> }
  > = {
    method: 'post',
    url: PlanRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      purpose_id: purposeId,
      plan_purpose: planPurpose,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<
        Plan,
        Plan & { purpose_id: number; plan_purpose?: Partial<PlanPurpose> }
      >(queryParams?.api || _client?.api, config);
};

export const purposeAttachPlan = (
  purposeId: number,
  planId: number,
  planPurpose?: Partial<PlanPurpose>,
  queryParams?: QueryParams
): Promise<Purpose> => {
  const config: QueryParams<{
    id: number;
    plan_id: number;
    plan_purpose?: Partial<PlanPurpose>;
  }> = {
    method: 'post',
    url: PurposeRoute(),
    params: queryParams?.params,
    data: {
      id: purposeId,
      plan_id: planId,
      plan_purpose: planPurpose,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Purpose>(config)
    : getResponse<
        Purpose,
        { id: number; plan_id: number; plan_purpose: Partial<PlanPurpose> }
      >(queryParams?.api || _client?.api, config);
};

export const purposeCreateWithPlan = (
  planId: number,
  data: Partial<Purpose>,
  planPurpose?: Partial<PlanPurpose>,
  queryParams?: QueryParams
): Promise<Purpose> => {
  const config: QueryParams<
    Purpose & { plan_id: number; plan_purpose?: Partial<PlanPurpose> }
  > = {
    method: 'post',
    url: PurposeRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      plan_id: planId,
      plan_purpose: planPurpose,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Purpose>(config)
    : getResponse<
        Purpose,
        Purpose & { plan_id: number; plan_purpose?: Partial<PlanPurpose> }
      >(queryParams?.api || _client?.api, config);
};
