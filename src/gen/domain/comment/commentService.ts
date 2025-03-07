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
import { CommentRoute } from '../../routes/Routes';
import type { Comment } from './Comment';
import type { CommentApi } from './CommentApi';

export const commentGetMany = (
  queryParams?: QueryParams<Comment>,
): Promise<ResourceList<CommentApi>> => {
  const config: QueryParams<Comment> = {
    method: 'get',
    url: queryParams?.url ?? CommentRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CommentApi>>(config)
    : getResponse<ResourceList<CommentApi>, Comment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const commentGetOne = (
  id: number,
  queryParams?: QueryParams<Comment>,
): Promise<CommentApi> => {
  const config: QueryParams<Comment> = {
    method: 'get',
    url: `${queryParams?.url ?? CommentRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CommentApi>(config)
    : getResponse<CommentApi, Comment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const commentDeleteOne = (
  id: number,
  queryParams?: QueryParams<Comment>,
): Promise<MessageResponse> => {
  const config: QueryParams<Comment> = {
    method: 'delete',
    url: `${queryParams?.url ?? CommentRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Comment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const commentDeleteMany = (
  data: Partial<Comment>[],
  queryParams?: QueryParamsWithList<Comment>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Comment> = {
        method: 'post',
        url: queryParams?.url ?? CommentRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Comment>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const commentUpdateOne = (
  id: number,
  data: Partial<Comment>,
  queryParams?: QueryParams<Comment>,
): Promise<Comment> => {
  const config: QueryParams<Comment> = {
    method: 'put',
    url: `${queryParams?.url ?? CommentRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Comment>(config)
    : getResponse<Comment>(queryParams?.api ?? _client?.api, config);
};

export const commentCreateOne = (
  data: Partial<Comment>,
  queryParams?: QueryParams<Comment>,
): Promise<Comment> => {
  const config: QueryParams<Comment> = {
    method: 'post',
    url: queryParams?.url ?? CommentRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Comment>(config)
    : getResponse<Comment>(queryParams?.api ?? _client?.api, config);
};

export const commentCreateMany = (
  data: Partial<Comment>[],
  queryParams?: QueryParamsWithList<Comment>,
): Promise<Comment[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Comment> = {
        method: 'post',
        url: queryParams?.url ?? CommentRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Comment[]>(config)
        : getResponse<Comment[], Comment>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
