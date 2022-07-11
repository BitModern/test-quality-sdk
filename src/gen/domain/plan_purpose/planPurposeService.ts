/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
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
): Promise<PlanPurpose> => {
  const config: QueryParams<PlanPurpose> = {
    method: 'put',
    url: `/plan_purpose/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPurpose>(config)
    : getResponse<PlanPurpose>(queryParams?.api || _client?.api, config);
};

export const planPurposeCreateOne = (
  data: Partial<PlanPurpose>,
  queryParams?: QueryParams<PlanPurpose>
): Promise<PlanPurpose> => {
  const config: QueryParams<PlanPurpose> = {
    method: 'post',
    url: queryParams?.url || `/plan_purpose`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPurpose>(config)
    : getResponse<PlanPurpose>(queryParams?.api || _client?.api, config);
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
