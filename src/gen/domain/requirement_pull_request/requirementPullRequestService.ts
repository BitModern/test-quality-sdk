/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { RequirementPullRequest } from './RequirementPullRequest';
import { RequirementPullRequestApi } from './RequirementPullRequestApi';

export const requirementPullRequestDetach = (
  data: Partial<RequirementPullRequest>,
  queryParams?: QueryParams<RequirementPullRequest>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<RequirementPullRequest> = {
    method: 'delete',
    url: `/requirement_pull_request/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, RequirementPullRequest>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const requirementPullRequestUpdateOne = (
  id: number,
  data: Partial<RequirementPullRequest>,
  queryParams?: QueryParams<RequirementPullRequest>,
): Promise<RequirementPullRequest> => {
  const config: QueryParams<RequirementPullRequest> = {
    method: 'put',
    url: `/requirement_pull_request/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementPullRequest>(config)
    : getResponse<RequirementPullRequest>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const requirementPullRequestCreateOne = (
  data: Partial<RequirementPullRequest>,
  queryParams?: QueryParams<RequirementPullRequest>,
): Promise<RequirementPullRequest> => {
  const config: QueryParams<RequirementPullRequest> = {
    method: 'post',
    url: queryParams?.url || `/requirement_pull_request`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementPullRequest>(config)
    : getResponse<RequirementPullRequest>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const requirementPullRequestCreateMany = (
  data: Partial<RequirementPullRequest>[],
  queryParams?: QueryParamsWithList<RequirementPullRequest>,
): Promise<RequirementPullRequest[]> => {
  const config: QueryParamsWithList<RequirementPullRequest> = {
    method: 'post',
    url: queryParams?.url || `/requirement_pull_request`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementPullRequest[]>(config)
    : getResponse<RequirementPullRequest[], RequirementPullRequest>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const requirementPullRequestGetMany = (
  queryParams?: QueryParams<RequirementPullRequest>,
): Promise<ResourceList<RequirementPullRequestApi>> => {
  const config: QueryParams<RequirementPullRequest> = {
    method: 'get',
    url: queryParams?.url || `/requirement_pull_request`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RequirementPullRequestApi>>(
        config,
      )
    : getResponse<
        ResourceList<RequirementPullRequestApi>,
        RequirementPullRequest
      >(queryParams?.api || _client?.api, config);
};

export const requirementPullRequestGetOne = (
  id: number,
  queryParams?: QueryParams<RequirementPullRequest>,
): Promise<RequirementPullRequestApi> => {
  const config: QueryParams<RequirementPullRequest> = {
    method: 'get',
    url: `${queryParams?.url || `/requirement_pull_request/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementPullRequestApi>(config)
    : getResponse<RequirementPullRequestApi, RequirementPullRequest>(
        queryParams?.api || _client?.api,
        config,
      );
};
