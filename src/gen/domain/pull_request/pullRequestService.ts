/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PullRequestRoute } from '../../routes/Routes';
import { PullRequest } from './PullRequest';
import { PullRequestApi } from './PullRequestApi';

export const pullRequestGetMany = (
  queryParams?: QueryParams<PullRequest>
): Promise<ResourceList<PullRequestApi>> => {
  const config: QueryParams<PullRequest> = {
    method: 'get',
    url: queryParams?.url || PullRequestRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PullRequestApi>>(config)
    : getResponse<ResourceList<PullRequestApi>, PullRequest>(
        queryParams?.api || _client?.api,
        config
      );
};

export const pullRequestGetOne = (
  id: number,
  queryParams?: QueryParams<PullRequest>
): Promise<PullRequestApi> => {
  const config: QueryParams<PullRequest> = {
    method: 'get',
    url: `${queryParams?.url || PullRequestRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestApi>(config)
    : getResponse<PullRequestApi, PullRequest>(
        queryParams?.api || _client?.api,
        config
      );
};

export const pullRequestDeleteOne = (
  id: number,
  queryParams?: QueryParams<PullRequest>
): Promise<MessageResponse> => {
  const config: QueryParams<PullRequest> = {
    method: 'delete',
    url: `${queryParams?.url || PullRequestRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, PullRequest>(
        queryParams?.api || _client?.api,
        config
      );
};

export const pullRequestUpdateOne = (
  id: number,
  data: Partial<PullRequest>,
  queryParams?: QueryParams<PullRequest>
): Promise<PullRequest> => {
  const config: QueryParams<PullRequest> = {
    method: 'put',
    url: `${queryParams?.url || PullRequestRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequest>(config)
    : getResponse<PullRequest>(queryParams?.api || _client?.api, config);
};

export const pullRequestCreateOne = (
  data: Partial<PullRequest>,
  queryParams?: QueryParams<PullRequest>
): Promise<PullRequest> => {
  const config: QueryParams<PullRequest> = {
    method: 'post',
    url: queryParams?.url || PullRequestRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequest>(config)
    : getResponse<PullRequest>(queryParams?.api || _client?.api, config);
};
