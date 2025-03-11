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
import { PullRequestRoute } from '../../routes/Routes';
import type { PullRequest } from './PullRequest';
import type { PullRequestApi } from './PullRequestApi';

export const pullRequestGetMany = (
  queryParams?: QueryParams<Partial<PullRequest>>,
): Promise<ResourceList<PullRequestApi>> => {
  const config: QueryParams<Partial<PullRequest>> = {
    method: 'get',
    url: queryParams?.url ?? PullRequestRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PullRequestApi>>(config)
    : getResponse<ResourceList<PullRequestApi>, Partial<PullRequest>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<PullRequest>>,
): Promise<PullRequestApi> => {
  const config: QueryParams<Partial<PullRequest>> = {
    method: 'get',
    url: `${queryParams?.url ?? PullRequestRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestApi>(config)
    : getResponse<PullRequestApi, Partial<PullRequest>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<PullRequest>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<PullRequest>> = {
    method: 'delete',
    url: `${queryParams?.url ?? PullRequestRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<PullRequest>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestDeleteMany = (
  data: (Partial<PullRequest> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<PullRequest> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PullRequest> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? PullRequestRoute() + '/delete',
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<PullRequest> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const pullRequestUpdateOne = (
  id: number,
  data: Partial<PullRequest>,
  queryParams?: QueryParams<Partial<PullRequest>>,
): Promise<PullRequest> => {
  const config: QueryParams<Partial<PullRequest>> = {
    method: 'put',
    url: `${queryParams?.url ?? PullRequestRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequest>(config)
    : getResponse<PullRequest, Partial<PullRequest>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestUpdateMany = (
  data: (Partial<PullRequest> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<PullRequest> & { id: number }>,
): Promise<PullRequest[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PullRequest> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? PullRequestRoute(),
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PullRequest[]>(config)
        : getResponse<PullRequest[], Partial<PullRequest> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const pullRequestCreateOne = (
  data: Partial<PullRequest>,
  queryParams?: QueryParams<Partial<PullRequest>>,
): Promise<PullRequest> => {
  const config: QueryParams<Partial<PullRequest>> = {
    method: 'post',
    url: queryParams?.url ?? PullRequestRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequest>(config)
    : getResponse<PullRequest, Partial<PullRequest>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestCreateMany = (
  data: Partial<PullRequest>[],
  queryParams?: QueryParamsWithList<Partial<PullRequest>>,
): Promise<PullRequest[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PullRequest>> = {
        method: 'post',
        url: queryParams?.url ?? PullRequestRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PullRequest[]>(config)
        : getResponse<PullRequest[], Partial<PullRequest>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
