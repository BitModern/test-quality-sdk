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
import type { PullRequestRequirement } from './PullRequestRequirement';
import type { PullRequestRequirementApi } from './PullRequestRequirementApi';

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
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestRequirementDeleteMany = (
  data: (Partial<PullRequestRequirement> & { id: number })[],
  queryParams?: QueryParamsWithList<PullRequestRequirement>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PullRequestRequirement> = {
        method: 'post',
        url: `/pull_request_requirement/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, PullRequestRequirement>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
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
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestRequirementUpdateMany = (
  data: (Partial<PullRequestRequirement> & { id: number })[],
  queryParams?: QueryParamsWithList<PullRequestRequirement>,
): Promise<PullRequestRequirement[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PullRequestRequirement> = {
        method: 'post',
        url: queryParams?.url ?? `/pull_request_requirement`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PullRequestRequirement[]>(config)
        : getResponse<PullRequestRequirement[], PullRequestRequirement>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const pullRequestRequirementCreateOne = (
  data: Partial<PullRequestRequirement>,
  queryParams?: QueryParams<PullRequestRequirement>,
): Promise<PullRequestRequirement> => {
  const config: QueryParams<PullRequestRequirement> = {
    method: 'post',
    url: queryParams?.url ?? `/pull_request_requirement`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRequirement>(config)
    : getResponse<PullRequestRequirement>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const pullRequestRequirementCreateMany = (
  data: Partial<PullRequestRequirement>[],
  queryParams?: QueryParamsWithList<PullRequestRequirement>,
): Promise<PullRequestRequirement[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PullRequestRequirement> = {
        method: 'post',
        url: queryParams?.url ?? `/pull_request_requirement`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PullRequestRequirement[]>(config)
        : getResponse<PullRequestRequirement[], PullRequestRequirement>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const pullRequestRequirementGetMany = (
  queryParams?: QueryParams<PullRequestRequirement>,
): Promise<ResourceList<PullRequestRequirementApi>> => {
  const config: QueryParams<PullRequestRequirement> = {
    method: 'get',
    url: queryParams?.url ?? `/pull_request_requirement`,
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
      >(queryParams?.api ?? _client?.api, config);
};

export const pullRequestRequirementGetOne = (
  id: number,
  queryParams?: QueryParams<PullRequestRequirement>,
): Promise<PullRequestRequirementApi> => {
  const config: QueryParams<PullRequestRequirement> = {
    method: 'get',
    url: `${queryParams?.url ?? `/pull_request_requirement/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestRequirementApi>(config)
    : getResponse<PullRequestRequirementApi, PullRequestRequirement>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
