/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { RunPullRequest } from './RunPullRequest';
import { RunPullRequestApi } from './RunPullRequestApi';

export const runPullRequestDetach = (
  data: Partial<RunPullRequest>,
  queryParams?: QueryParams<RunPullRequest>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<RunPullRequest> = {
    method: 'delete',
    url: `/run_pull_request/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, RunPullRequest>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const runPullRequestUpdateOne = (
  id: number,
  data: Partial<RunPullRequest>,
  queryParams?: QueryParams<RunPullRequest>,
): Promise<RunPullRequest> => {
  const config: QueryParams<RunPullRequest> = {
    method: 'put',
    url: `/run_pull_request/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunPullRequest>(config)
    : getResponse<RunPullRequest>(queryParams?.api || _client?.api, config);
};

export const runPullRequestCreateOne = (
  data: Partial<RunPullRequest>,
  queryParams?: QueryParams<RunPullRequest>,
): Promise<RunPullRequest> => {
  const config: QueryParams<RunPullRequest> = {
    method: 'post',
    url: queryParams?.url || `/run_pull_request`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunPullRequest>(config)
    : getResponse<RunPullRequest>(queryParams?.api || _client?.api, config);
};

export const runPullRequestCreateMany = (
  data: Partial<RunPullRequest>[],
  queryParams?: QueryParamsWithList<RunPullRequest>,
): Promise<RunPullRequest[]> => {
  const config: QueryParamsWithList<RunPullRequest> = {
    method: 'post',
    url: queryParams?.url || `/run_pull_request`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunPullRequest[]>(config)
    : getResponse<RunPullRequest[], RunPullRequest>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const runPullRequestGetMany = (
  queryParams?: QueryParams<RunPullRequest>,
): Promise<ResourceList<RunPullRequestApi>> => {
  const config: QueryParams<RunPullRequest> = {
    method: 'get',
    url: queryParams?.url || `/run_pull_request`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RunPullRequestApi>>(config)
    : getResponse<ResourceList<RunPullRequestApi>, RunPullRequest>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const runPullRequestGetOne = (
  id: number,
  queryParams?: QueryParams<RunPullRequest>,
): Promise<RunPullRequestApi> => {
  const config: QueryParams<RunPullRequest> = {
    method: 'get',
    url: `${queryParams?.url || `/run_pull_request/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunPullRequestApi>(config)
    : getResponse<RunPullRequestApi, RunPullRequest>(
        queryParams?.api || _client?.api,
        config,
      );
};
