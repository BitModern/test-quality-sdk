/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { UserRoute } from '../../routes/Routes';
import { User } from './User';
import { UserApi } from './UserApi';

export const userGetMany = (
  queryParams?: QueryParams<User>,
): Promise<ResourceList<UserApi>> => {
  const config: QueryParams<User> = {
    method: 'get',
    url: queryParams?.url || UserRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<UserApi>>(config)
    : getResponse<ResourceList<UserApi>, User>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const userGetOne = (
  id: number,
  queryParams?: QueryParams<User>,
): Promise<UserApi> => {
  const config: QueryParams<User> = {
    method: 'get',
    url: `${queryParams?.url || UserRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<UserApi>(config)
    : getResponse<UserApi, User>(queryParams?.api || _client?.api, config);
};

export const userDeleteOne = (
  id: number,
  queryParams?: QueryParams<User>,
): Promise<MessageResponse> => {
  const config: QueryParams<User> = {
    method: 'delete',
    url: `${queryParams?.url || UserRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, User>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const userUpdateOne = (
  id: number,
  data: Partial<User>,
  queryParams?: QueryParams<User>,
): Promise<User> => {
  const config: QueryParams<User> = {
    method: 'put',
    url: `${queryParams?.url || UserRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User>(config)
    : getResponse<User>(queryParams?.api || _client?.api, config);
};

export const userCreateOne = (
  data: Partial<User>,
  queryParams?: QueryParams<User>,
): Promise<User> => {
  const config: QueryParams<User> = {
    method: 'post',
    url: queryParams?.url || UserRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User>(config)
    : getResponse<User>(queryParams?.api || _client?.api, config);
};

export const userCreateMany = (
  data: Partial<User>[],
  queryParams?: QueryParamsWithList<User>,
): Promise<User[]> => {
  const config: QueryParamsWithList<User> = {
    method: 'post',
    url: queryParams?.url || UserRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User[]>(config)
    : getResponse<User[], User>(queryParams?.api || _client?.api, config);
};
