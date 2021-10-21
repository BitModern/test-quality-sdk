/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { AccessRoleRoute, UserRoute } from '../../routes/Routes';
import { User } from '../user/User';
import { AccessRole } from '../access_role/AccessRole';
import { AccessRoleUser } from './AccessRoleUser';
import { AccessRoleUserApi } from './AccessRoleUserApi';

export const accessRoleUserDetach = (
  data: Partial<AccessRoleUser>,
  queryParams?: QueryParams<AccessRoleUser>
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
        queryParams?.api || _client?.api,
        config
      );
};

export const accessRoleUserUpdateOne = (
  id: number,
  data: Partial<AccessRoleUser>,
  queryParams?: QueryParams<AccessRoleUser>
): Promise<AccessRole> => {
  const config: QueryParams<AccessRoleUser> = {
    method: 'put',
    url: `/access_role_user/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRole>(config)
    : getResponse<AccessRole, Partial<AccessRoleUser>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const accessRoleUserGetMany = (
  queryParams?: QueryParams<AccessRoleUser>
): Promise<ResourceList<AccessRoleUserApi>> => {
  const config: QueryParams<AccessRoleUser> = {
    method: 'get',
    url: queryParams?.url || `/access_role_user`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AccessRoleUserApi>>(config)
    : getResponse<ResourceList<AccessRoleUserApi>, AccessRoleUser>(
        queryParams?.api || _client?.api,
        config
      );
};

export const accessRoleUserGetOne = (
  id: number,
  queryParams?: QueryParams<AccessRoleUser>
): Promise<AccessRoleUserApi> => {
  const config: QueryParams<AccessRoleUser> = {
    method: 'get',
    url: `${queryParams?.url || `/access_role_user/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRoleUserApi>(config)
    : getResponse<AccessRoleUserApi, AccessRoleUser>(
        queryParams?.api || _client?.api,
        config
      );
};

/**
 * accessRoleAttachManyUser
 * This will remove any associations not in the list.
 * @param accessRoleId
 * @param list of children to associate
 * @param queryParams
 */
export const accessRoleAttachManyUser = (
  accessRoleId: number,
  list: Partial<User>[],
  queryParams?: QueryParams<AccessRole>
): Promise<AccessRole> => {
  const config: QueryParams<AccessRole & { user: Partial<User>[] }> = {
    method: 'put',
    url: `${AccessRoleRoute()}/${accessRoleId}`,
    params: queryParams?.params,
    data: {
      user: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRole>(config)
    : getResponse<AccessRole>(queryParams?.api || _client?.api, config);
};

/**
 * userAttachManyAccessRole
 * This will remove any associations not in the list.
 * @param userId
 * @param list of children to associate
 * @param queryParams
 */
export const userAttachManyAccessRole = (
  userId: number,
  list: Partial<AccessRole>[],
  queryParams?: QueryParams<User>
): Promise<User> => {
  const config: QueryParams<User & { access_role: Partial<AccessRole>[] }> = {
    method: 'put',
    url: `${UserRoute()}/${userId}`,
    params: queryParams?.params,
    data: {
      access_role: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User>(config)
    : getResponse<User>(queryParams?.api || _client?.api, config);
};

export const accessRoleAttachUser = (
  accessRoleId: number,
  userId: number,
  accessRoleUser?: Partial<AccessRoleUser>,
  queryParams?: QueryParams
): Promise<AccessRole> => {
  const config: QueryParams<{
    id: number;
    user_id: number;
    access_role_user?: Partial<AccessRoleUser>;
  }> = {
    method: 'put',
    url: AccessRoleRoute(),
    params: queryParams?.params,
    data: {
      id: accessRoleId,
      user_id: userId,
      access_role_user: accessRoleUser,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRole>(config)
    : getResponse<
        AccessRole,
        {
          id: number;
          user_id: number;
          access_role_user?: Partial<AccessRoleUser>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const accessRoleCreateWithUser = (
  userId: number,
  data: Partial<AccessRole>,
  accessRoleUser?: Partial<AccessRoleUser>,
  queryParams?: QueryParams
): Promise<AccessRole> => {
  const config: QueryParams<
    AccessRole & { user_id: number; access_role_user?: Partial<AccessRoleUser> }
  > = {
    method: 'post',
    url: AccessRoleRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      user_id: userId,
      access_role_user: accessRoleUser,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRole>(config)
    : getResponse<
        AccessRole,
        AccessRole & {
          user_id: number;
          access_role_user?: Partial<AccessRoleUser>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const userAttachAccessRole = (
  userId: number,
  accessRoleId: number,
  accessRoleUser?: Partial<AccessRoleUser>,
  queryParams?: QueryParams
): Promise<User> => {
  const config: QueryParams<{
    id: number;
    access_role_id: number;
    access_role_user?: Partial<AccessRoleUser>;
  }> = {
    method: 'put',
    url: UserRoute(),
    params: queryParams?.params,
    data: {
      id: userId,
      access_role_id: accessRoleId,
      access_role_user: accessRoleUser,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User>(config)
    : getResponse<
        User,
        {
          id: number;
          access_role_id: number;
          access_role_user: Partial<AccessRoleUser>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const userCreateWithAccessRole = (
  accessRoleId: number,
  data: Partial<User>,
  accessRoleUser?: Partial<AccessRoleUser>,
  queryParams?: QueryParams
): Promise<User> => {
  const config: QueryParams<
    User & {
      access_role_id: number;
      access_role_user?: Partial<AccessRoleUser>;
    }
  > = {
    method: 'post',
    url: UserRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      access_role_id: accessRoleId,
      access_role_user: accessRoleUser,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User>(config)
    : getResponse<
        User,
        User & {
          access_role_id: number;
          access_role_user?: Partial<AccessRoleUser>;
        }
      >(queryParams?.api || _client?.api, config);
};
