/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PullRequestRequirement } from './PullRequestRequirement';
import { PullRequestRequirementApi } from './PullRequestRequirementApi';

export const pullRequestRequirementDetach = (
  data: Partial<PullRequestRequirement>,
  queryParams?: QueryParams<PullRequestRequirement>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<PullRequestRequirement> = {
    method: 'delete',
    url: `/pull_request_requirement/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, PullRequestRequirement>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const pullRequestRequirementUpdateOne = (
  id: number,
  data: Partial<PullRequestRequirement>,
  queryParams?: QueryParams<PullRequestRequirement>,
): Promise<PullRequestRequirement> => {
  const config: QueryParams<PullRequestRequirement> = {
    method: 'put',
    url: `/pull_request_requirement/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRequirement>(config)
    : getResponse<PullRequestRequirement>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const pullRequestRequirementCreateOne = (
  data: Partial<PullRequestRequirement>,
  queryParams?: QueryParams<PullRequestRequirement>,
): Promise<PullRequestRequirement> => {
  const config: QueryParams<PullRequestRequirement> = {
    method: 'post',
    url: queryParams?.url || `/pull_request_requirement`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRequirement>(config)
    : getResponse<PullRequestRequirement>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const pullRequestRequirementCreateMany = (
  data: Partial<PullRequestRequirement>[],
  queryParams?: QueryParamsWithList<PullRequestRequirement>,
): Promise<PullRequestRequirement[]> => {
  const config: QueryParamsWithList<PullRequestRequirement> = {
    method: 'post',
    url: queryParams?.url || `/pull_request_requirement`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRequirement[]>(config)
    : getResponse<PullRequestRequirement[], PullRequestRequirement>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const pullRequestRequirementGetMany = (
  queryParams?: QueryParams<PullRequestRequirement>,
): Promise<ResourceList<PullRequestRequirementApi>> => {
  const config: QueryParams<PullRequestRequirement> = {
    method: 'get',
    url: queryParams?.url || `/pull_request_requirement`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PullRequestRequirementApi>>(
        config,
      )
    : getResponse<
        ResourceList<PullRequestRequirementApi>,
        PullRequestRequirement
      >(queryParams?.api || _client?.api, config);
};

export const pullRequestRequirementGetOne = (
  id: number,
  queryParams?: QueryParams<PullRequestRequirement>,
): Promise<PullRequestRequirementApi> => {
  const config: QueryParams<PullRequestRequirement> = {
    method: 'get',
    url: `${queryParams?.url || `/pull_request_requirement/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRequirementApi>(config)
    : getResponse<PullRequestRequirementApi, PullRequestRequirement>(
        queryParams?.api || _client?.api,
        config,
      );
};
