/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { AppUserRoute } from '../../routes/Routes';
import { AppUser } from './AppUser';
import { AppUserApi } from './AppUserApi';

export const appUserGetMany = (
  queryParams?: QueryParams<AppUser>
): Promise<ResourceList<AppUserApi>> => {
  const config: QueryParams<AppUser> = {
    method: 'get',
    url: queryParams?.url || AppUserRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AppUserApi>>(config)
    : getResponse<ResourceList<AppUserApi>, AppUser>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appUserGetOne = (
  id: number,
  queryParams?: QueryParams<AppUser>
): Promise<AppUserApi> => {
  const config: QueryParams<AppUser> = {
    method: 'get',
    url: `${queryParams?.url || AppUserRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppUserApi>(config)
    : getResponse<AppUserApi, AppUser>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appUserDeleteOne = (
  id: number,
  queryParams?: QueryParams<AppUser>
): Promise<MessageResponse> => {
  const config: QueryParams<AppUser> = {
    method: 'delete',
    url: `${queryParams?.url || AppUserRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, AppUser>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appUserUpdateOne = (
  id: number,
  data: Partial<AppUser>,
  queryParams?: QueryParams<AppUser>
): Promise<AppUser> => {
  const config: QueryParams<AppUser> = {
    method: 'put',
    url: `${queryParams?.url || AppUserRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppUser>(config)
    : getResponse<AppUser>(queryParams?.api || _client?.api, config);
};

export const appUserCreateOne = (
  data: Partial<AppUser>,
  queryParams?: QueryParams<AppUser>
): Promise<AppUser> => {
  const config: QueryParams<AppUser> = {
    method: 'post',
    url: queryParams?.url || AppUserRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppUser>(config)
    : getResponse<AppUser>(queryParams?.api || _client?.api, config);
};
