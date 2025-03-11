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
  queryParams?: QueryParams<Partial<Comment>>,
): Promise<ResourceList<CommentApi>> => {
  const config: QueryParams<Partial<Comment>> = {
    method: 'get',
    url: queryParams?.url ?? CommentRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CommentApi>>(config)
    : getResponse<ResourceList<CommentApi>, Partial<Comment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const commentGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Comment>>,
): Promise<CommentApi> => {
  const config: QueryParams<Partial<Comment>> = {
    method: 'get',
    url: `${queryParams?.url ?? CommentRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CommentApi>(config)
    : getResponse<CommentApi, Partial<Comment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const commentDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Comment>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Comment>> = {
    method: 'delete',
    url: `${queryParams?.url ?? CommentRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Comment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const commentDeleteMany = (
  data: (Partial<Comment> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Comment> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Comment> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? CommentRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Comment> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const commentUpdateOne = (
  id: number,
  data: Partial<Comment>,
  queryParams?: QueryParams<Partial<Comment>>,
): Promise<Comment> => {
  const config: QueryParams<Partial<Comment>> = {
    method: 'put',
    url: `${queryParams?.url ?? CommentRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Comment>(config)
    : getResponse<Comment, Partial<Comment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const commentUpdateMany = (
  data: (Partial<Comment> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Comment> & { id: number }>,
): Promise<Comment[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Comment> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? CommentRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Comment[]>(config)
        : getResponse<Comment[], Partial<Comment> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const commentCreateOne = (
  data: Partial<Comment>,
  queryParams?: QueryParams<Partial<Comment>>,
): Promise<Comment> => {
  const config: QueryParams<Partial<Comment>> = {
    method: 'post',
    url: queryParams?.url ?? CommentRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Comment>(config)
    : getResponse<Comment, Partial<Comment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const commentCreateMany = (
  data: Partial<Comment>[],
  queryParams?: QueryParamsWithList<Partial<Comment>>,
): Promise<Comment[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Comment>> = {
        method: 'post',
        url: queryParams?.url ?? CommentRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Comment[]>(config)
        : getResponse<Comment[], Partial<Comment>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
