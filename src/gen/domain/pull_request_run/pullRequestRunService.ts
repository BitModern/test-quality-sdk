/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PullRequestRun } from './PullRequestRun';
import { PullRequestRunApi } from './PullRequestRunApi';

export const pullRequestRunDetach = (
  data: Partial<PullRequestRun>,
  queryParams?: QueryParams<PullRequestRun>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<PullRequestRun> = {
    method: 'delete',
    url: `/pull_request_run/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, PullRequestRun>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const pullRequestRunUpdateOne = (
  id: number,
  data: Partial<PullRequestRun>,
  queryParams?: QueryParams<PullRequestRun>,
): Promise<PullRequestRun> => {
  const config: QueryParams<PullRequestRun> = {
    method: 'put',
    url: `/pull_request_run/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRun>(config)
    : getResponse<PullRequestRun>(queryParams?.api || _client?.api, config);
};

export const pullRequestRunCreateOne = (
  data: Partial<PullRequestRun>,
  queryParams?: QueryParams<PullRequestRun>,
): Promise<PullRequestRun> => {
  const config: QueryParams<PullRequestRun> = {
    method: 'post',
    url: queryParams?.url || `/pull_request_run`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRun>(config)
    : getResponse<PullRequestRun>(queryParams?.api || _client?.api, config);
};

export const pullRequestRunCreateMany = (
  data: Partial<PullRequestRun>[],
  queryParams?: QueryParamsWithList<PullRequestRun>,
): Promise<PullRequestRun[]> => {
  const config: QueryParamsWithList<PullRequestRun> = {
    method: 'post',
    url: queryParams?.url || `/pull_request_run`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRun[]>(config)
    : getResponse<PullRequestRun[], PullRequestRun>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const pullRequestRunGetMany = (
  queryParams?: QueryParams<PullRequestRun>,
): Promise<ResourceList<PullRequestRunApi>> => {
  const config: QueryParams<PullRequestRun> = {
    method: 'get',
    url: queryParams?.url || `/pull_request_run`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PullRequestRunApi>>(config)
    : getResponse<ResourceList<PullRequestRunApi>, PullRequestRun>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const pullRequestRunGetOne = (
  id: number,
  queryParams?: QueryParams<PullRequestRun>,
): Promise<PullRequestRunApi> => {
  const config: QueryParams<PullRequestRun> = {
    method: 'get',
    url: `${queryParams?.url || `/pull_request_run/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRunApi>(config)
    : getResponse<PullRequestRunApi, PullRequestRun>(
        queryParams?.api || _client?.api,
        config,
      );
};
