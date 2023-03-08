/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PlanPullRequest } from './PlanPullRequest';
import { PlanPullRequestApi } from './PlanPullRequestApi';

export const planPullRequestDetach = (
  data: Partial<PlanPullRequest>,
  queryParams?: QueryParams<PlanPullRequest>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<PlanPullRequest> = {
    method: 'delete',
    url: `/plan_pull_request/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, PlanPullRequest>(
        queryParams?.api || _client?.api,
        config
      );
};

export const planPullRequestUpdateOne = (
  id: number,
  data: Partial<PlanPullRequest>,
  queryParams?: QueryParams<PlanPullRequest>
): Promise<PlanPullRequest> => {
  const config: QueryParams<PlanPullRequest> = {
    method: 'put',
    url: `/plan_pull_request/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPullRequest>(config)
    : getResponse<PlanPullRequest>(queryParams?.api || _client?.api, config);
};

export const planPullRequestCreateOne = (
  data: Partial<PlanPullRequest>,
  queryParams?: QueryParams<PlanPullRequest>
): Promise<PlanPullRequest> => {
  const config: QueryParams<PlanPullRequest> = {
    method: 'post',
    url: queryParams?.url || `/plan_pull_request`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPullRequest>(config)
    : getResponse<PlanPullRequest>(queryParams?.api || _client?.api, config);
};

export const planPullRequestGetMany = (
  queryParams?: QueryParams<PlanPullRequest>
): Promise<ResourceList<PlanPullRequestApi>> => {
  const config: QueryParams<PlanPullRequest> = {
    method: 'get',
    url: queryParams?.url || `/plan_pull_request`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanPullRequestApi>>(config)
    : getResponse<ResourceList<PlanPullRequestApi>, PlanPullRequest>(
        queryParams?.api || _client?.api,
        config
      );
};

export const planPullRequestGetOne = (
  id: number,
  queryParams?: QueryParams<PlanPullRequest>
): Promise<PlanPullRequestApi> => {
  const config: QueryParams<PlanPullRequest> = {
    method: 'get',
    url: `${queryParams?.url || `/plan_pull_request/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPullRequestApi>(config)
    : getResponse<PlanPullRequestApi, PlanPullRequest>(
        queryParams?.api || _client?.api,
        config
      );
};
