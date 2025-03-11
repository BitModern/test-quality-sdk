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
import { UserRoute } from '../../routes/Routes';
import type { User } from './User';
import type { UserApi } from './UserApi';

export const userGetMany = (
  queryParams?: QueryParams<Partial<User>>,
): Promise<ResourceList<UserApi>> => {
  const config: QueryParams<Partial<User>> = {
    method: 'get',
    url: queryParams?.url ?? UserRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<UserApi>>(config)
    : getResponse<ResourceList<UserApi>, Partial<User>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const userGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<User>>,
): Promise<UserApi> => {
  const config: QueryParams<Partial<User>> = {
    method: 'get',
    url: `${queryParams?.url ?? UserRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<UserApi>(config)
    : getResponse<UserApi, Partial<User>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const userDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<User>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<User>> = {
    method: 'delete',
    url: `${queryParams?.url ?? UserRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<User>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const userDeleteMany = (
  data: (Partial<User> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<User> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<User> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? UserRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<User> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const userUpdateOne = (
  id: number,
  data: Partial<User>,
  queryParams?: QueryParams<Partial<User>>,
): Promise<User> => {
  const config: QueryParams<Partial<User>> = {
    method: 'put',
    url: `${queryParams?.url ?? UserRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User>(config)
    : getResponse<User, Partial<User>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const userUpdateMany = (
  data: (Partial<User> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<User> & { id: number }>,
): Promise<User[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<User> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? UserRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<User[]>(config)
        : getResponse<User[], Partial<User> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const userCreateOne = (
  data: Partial<User>,
  queryParams?: QueryParams<Partial<User>>,
): Promise<User> => {
  const config: QueryParams<Partial<User>> = {
    method: 'post',
    url: queryParams?.url ?? UserRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User>(config)
    : getResponse<User, Partial<User>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const userCreateMany = (
  data: Partial<User>[],
  queryParams?: QueryParamsWithList<Partial<User>>,
): Promise<User[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<User>> = {
        method: 'post',
        url: queryParams?.url ?? UserRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<User[]>(config)
        : getResponse<User[], Partial<User>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
