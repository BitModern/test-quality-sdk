/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { chunkArray } from '../../actions/chunkArray';
import type {
  QueryParams,
  QueryParamsWithList,
} from '../../actions/QueryParams';
import type { MessageResponse } from '../../actions/MessageResponse';
import type { ResourceList } from '../../models/ResourceList';
import type { CheckSuitePullRequest } from './CheckSuitePullRequest';
import type { CheckSuitePullRequestApi } from './CheckSuitePullRequestApi';

export const checkSuitePullRequestDetach = (
  data: Partial<CheckSuitePullRequest>,
  queryParams?: QueryParams<CheckSuitePullRequest>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<CheckSuitePullRequest> = {
    method: 'delete',
    url: `/check_suite_pull_request/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CheckSuitePullRequest>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuitePullRequestDeleteMany = (
  data: (Partial<CheckSuitePullRequest> & { id: number })[],
  queryParams?: QueryParamsWithList<CheckSuitePullRequest>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CheckSuitePullRequest> = {
        method: 'post',
        url: `/check_suite_pull_request/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, CheckSuitePullRequest>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkSuitePullRequestUpdateOne = (
  id: number,
  data: Partial<CheckSuitePullRequest>,
  queryParams?: QueryParams<CheckSuitePullRequest>,
): Promise<CheckSuitePullRequest> => {
  const config: QueryParams<CheckSuitePullRequest> = {
    method: 'put',
    url: `/check_suite_pull_request/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuitePullRequest>(config)
    : getResponse<CheckSuitePullRequest>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuitePullRequestUpdateMany = (
  data: (Partial<CheckSuitePullRequest> & { id: number })[],
  queryParams?: QueryParamsWithList<CheckSuitePullRequest>,
): Promise<CheckSuitePullRequest[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CheckSuitePullRequest> = {
        method: 'post',
        url: queryParams?.url ?? `/check_suite_pull_request`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckSuitePullRequest[]>(config)
        : getResponse<CheckSuitePullRequest[], CheckSuitePullRequest>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkSuitePullRequestCreateOne = (
  data: Partial<CheckSuitePullRequest>,
  queryParams?: QueryParams<CheckSuitePullRequest>,
): Promise<CheckSuitePullRequest> => {
  const config: QueryParams<CheckSuitePullRequest> = {
    method: 'post',
    url: queryParams?.url ?? `/check_suite_pull_request`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuitePullRequest>(config)
    : getResponse<CheckSuitePullRequest>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkSuitePullRequestCreateMany = (
  data: Partial<CheckSuitePullRequest>[],
  queryParams?: QueryParamsWithList<CheckSuitePullRequest>,
): Promise<CheckSuitePullRequest[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CheckSuitePullRequest> = {
        method: 'post',
        url: queryParams?.url ?? `/check_suite_pull_request`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckSuitePullRequest[]>(config)
        : getResponse<CheckSuitePullRequest[], CheckSuitePullRequest>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkSuitePullRequestGetMany = (
  queryParams?: QueryParams<CheckSuitePullRequest>,
): Promise<ResourceList<CheckSuitePullRequestApi>> => {
  const config: QueryParams<CheckSuitePullRequest> = {
    method: 'get',
    url: queryParams?.url ?? `/check_suite_pull_request`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CheckSuitePullRequestApi>>(config)
    : getResponse<
        ResourceList<CheckSuitePullRequestApi>,
        CheckSuitePullRequest
      >(queryParams?.api ?? _client?.api, config);
};

export const checkSuitePullRequestGetOne = (
  id: number,
  queryParams?: QueryParams<CheckSuitePullRequest>,
): Promise<CheckSuitePullRequestApi> => {
  const config: QueryParams<CheckSuitePullRequest> = {
    method: 'get',
    url: `${queryParams?.url ?? `/check_suite_pull_request/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuitePullRequestApi>(config)
    : getResponse<CheckSuitePullRequestApi, CheckSuitePullRequest>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
