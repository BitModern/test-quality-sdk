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
import type { AccessRoleUser } from './AccessRoleUser';
import type { AccessRoleUserApi } from './AccessRoleUserApi';

export const accessRoleUserDetach = (
  data: Partial<AccessRoleUser>,
  queryParams?: QueryParams<AccessRoleUser>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<AccessRoleUser> = {
    method: 'delete',
    url: `/access_role_user/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, AccessRoleUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const accessRoleUserDeleteMany = (
  data: Partial<AccessRoleUser>[],
  queryParams?: QueryParamsWithList<AccessRoleUser>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<AccessRoleUser> = {
        method: 'post',
        url: `/access_role_user/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, AccessRoleUser>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const accessRoleUserUpdateOne = (
  id: number,
  data: Partial<AccessRoleUser>,
  queryParams?: QueryParams<AccessRoleUser>,
): Promise<AccessRoleUser> => {
  const config: QueryParams<AccessRoleUser> = {
    method: 'put',
    url: `/access_role_user/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRoleUser>(config)
    : getResponse<AccessRoleUser>(queryParams?.api ?? _client?.api, config);
};

export const accessRoleUserCreateOne = (
  data: Partial<AccessRoleUser>,
  queryParams?: QueryParams<AccessRoleUser>,
): Promise<AccessRoleUser> => {
  const config: QueryParams<AccessRoleUser> = {
    method: 'post',
    url: queryParams?.url ?? `/access_role_user`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRoleUser>(config)
    : getResponse<AccessRoleUser>(queryParams?.api ?? _client?.api, config);
};

export const accessRoleUserCreateMany = (
  data: Partial<AccessRoleUser>[],
  queryParams?: QueryParamsWithList<AccessRoleUser>,
): Promise<AccessRoleUser[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<AccessRoleUser> = {
        method: 'post',
        url: queryParams?.url ?? `/access_role_user`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<AccessRoleUser[]>(config)
        : getResponse<AccessRoleUser[], AccessRoleUser>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const accessRoleUserGetMany = (
  queryParams?: QueryParams<AccessRoleUser>,
): Promise<ResourceList<AccessRoleUserApi>> => {
  const config: QueryParams<AccessRoleUser> = {
    method: 'get',
    url: queryParams?.url ?? `/access_role_user`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AccessRoleUserApi>>(config)
    : getResponse<ResourceList<AccessRoleUserApi>, AccessRoleUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const accessRoleUserGetOne = (
  id: number,
  queryParams?: QueryParams<AccessRoleUser>,
): Promise<AccessRoleUserApi> => {
  const config: QueryParams<AccessRoleUser> = {
    method: 'get',
    url: `${queryParams?.url ?? `/access_role_user/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRoleUserApi>(config)
    : getResponse<AccessRoleUserApi, AccessRoleUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
