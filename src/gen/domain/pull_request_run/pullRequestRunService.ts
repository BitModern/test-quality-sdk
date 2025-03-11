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
import type { PullRequestRun } from './PullRequestRun';
import type { PullRequestRunApi } from './PullRequestRunApi';

export const pullRequestRunDetach = (
  data: Partial<PullRequestRun>,
  queryParams?: QueryParams<Partial<PullRequestRun>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<PullRequestRun>> = {
    method: 'delete',
    url: `/pull_request_run/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<PullRequestRun>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestRunDeleteMany = (
  data: (Partial<PullRequestRun> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<PullRequestRun & { id: number }>>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<PullRequestRun> & { id: number }
      > = {
        method: 'post',
        url: `/pull_request_run/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<PullRequestRun> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const pullRequestRunUpdateOne = (
  id: number,
  data: Partial<PullRequestRun>,
  queryParams?: QueryParams<Partial<PullRequestRun>>,
): Promise<PullRequestRun> => {
  const config: QueryParams<Partial<PullRequestRun>> = {
    method: 'put',
    url: `/pull_request_run/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRun>(config)
    : getResponse<PullRequestRun, Partial<PullRequestRun>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestRunUpdateMany = (
  data: (Partial<PullRequestRun> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<PullRequestRun> & { id: number }>,
): Promise<PullRequestRun[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<PullRequestRun> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/pull_request_run`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PullRequestRun[]>(config)
        : getResponse<
            PullRequestRun[],
            Partial<PullRequestRun> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const pullRequestRunCreateOne = (
  data: Partial<PullRequestRun>,
  queryParams?: QueryParams<Partial<PullRequestRun>>,
): Promise<PullRequestRun> => {
  const config: QueryParams<Partial<PullRequestRun>> = {
    method: 'post',
    url: queryParams?.url ?? `/pull_request_run`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRun>(config)
    : getResponse<PullRequestRun, Partial<PullRequestRun>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestRunCreateMany = (
  data: Partial<PullRequestRun>[],
  queryParams?: QueryParamsWithList<Partial<PullRequestRun>>,
): Promise<PullRequestRun[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PullRequestRun>> = {
        method: 'post',
        url: queryParams?.url ?? `/pull_request_run`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PullRequestRun[]>(config)
        : getResponse<PullRequestRun[], Partial<PullRequestRun>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const pullRequestRunGetMany = (
  queryParams?: QueryParams<Partial<PullRequestRun>>,
): Promise<ResourceList<PullRequestRunApi>> => {
  const config: QueryParams<Partial<PullRequestRun>> = {
    method: 'get',
    url: queryParams?.url ?? `/pull_request_run`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PullRequestRunApi>>(config)
    : getResponse<ResourceList<PullRequestRunApi>, Partial<PullRequestRun>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestRunGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<PullRequestRun>>,
): Promise<PullRequestRunApi> => {
  const config: QueryParams<Partial<PullRequestRun>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/pull_request_run/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRunApi>(config)
    : getResponse<PullRequestRunApi, Partial<PullRequestRun>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
