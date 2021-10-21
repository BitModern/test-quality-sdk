/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { IntegrationRoute, UserRoute } from '../../routes/Routes';
import { User } from '../user/User';
import { Integration } from '../integration/Integration';
import { IntegrationUser } from './IntegrationUser';
import { IntegrationUserApi } from './IntegrationUserApi';

export const integrationUserDetach = (
  data: Partial<IntegrationUser>,
  queryParams?: QueryParams<IntegrationUser>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<IntegrationUser> = {
    method: 'delete',
    url: `/integration_user/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, IntegrationUser>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationUserUpdateOne = (
  id: number,
  data: Partial<IntegrationUser>,
  queryParams?: QueryParams<IntegrationUser>
): Promise<Integration> => {
  const config: QueryParams<IntegrationUser> = {
    method: 'put',
    url: `/integration_user/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<Integration, Partial<IntegrationUser>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationUserGetMany = (
  queryParams?: QueryParams<IntegrationUser>
): Promise<ResourceList<IntegrationUserApi>> => {
  const config: QueryParams<IntegrationUser> = {
    method: 'get',
    url: queryParams?.url || `/integration_user`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<IntegrationUserApi>>(config)
    : getResponse<ResourceList<IntegrationUserApi>, IntegrationUser>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationUserGetOne = (
  id: number,
  queryParams?: QueryParams<IntegrationUser>
): Promise<IntegrationUserApi> => {
  const config: QueryParams<IntegrationUser> = {
    method: 'get',
    url: `${queryParams?.url || `/integration_user/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationUserApi>(config)
    : getResponse<IntegrationUserApi, IntegrationUser>(
        queryParams?.api || _client?.api,
        config
      );
};

/**
 * integrationAttachManyUser
 * This will remove any associations not in the list.
 * @param integrationId
 * @param list of children to associate
 * @param queryParams
 */
export const integrationAttachManyUser = (
  integrationId: number,
  list: Partial<User>[],
  queryParams?: QueryParams<Integration>
): Promise<Integration> => {
  const config: QueryParams<Integration & { user: Partial<User>[] }> = {
    method: 'put',
    url: `${IntegrationRoute()}/${integrationId}`,
    params: queryParams?.params,
    data: {
      user: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<Integration>(queryParams?.api || _client?.api, config);
};

/**
 * userAttachManyIntegration
 * This will remove any associations not in the list.
 * @param userId
 * @param list of children to associate
 * @param queryParams
 */
export const userAttachManyIntegration = (
  userId: number,
  list: Partial<Integration>[],
  queryParams?: QueryParams<User>
): Promise<User> => {
  const config: QueryParams<User & { integration: Partial<Integration>[] }> = {
    method: 'put',
    url: `${UserRoute()}/${userId}`,
    params: queryParams?.params,
    data: {
      integration: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User>(config)
    : getResponse<User>(queryParams?.api || _client?.api, config);
};

export const integrationAttachUser = (
  integrationId: number,
  userId: number,
  integrationUser?: Partial<IntegrationUser>,
  queryParams?: QueryParams
): Promise<Integration> => {
  const config: QueryParams<{
    id: number;
    user_id: number;
    integration_user?: Partial<IntegrationUser>;
  }> = {
    method: 'put',
    url: `${IntegrationRoute()}/${integrationId}`,
    params: queryParams?.params,
    data: {
      id: integrationId,
      user_id: userId,
      integration_user: integrationUser,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<
        Integration,
        {
          id: number;
          user_id: number;
          integration_user?: Partial<IntegrationUser>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const integrationCreateWithUser = (
  userId: number,
  data: Partial<Integration>,
  integrationUser?: Partial<IntegrationUser>,
  queryParams?: QueryParams
): Promise<Integration> => {
  const config: QueryParams<
    Integration & {
      user_id: number;
      integration_user?: Partial<IntegrationUser>;
    }
  > = {
    method: 'post',
    url: IntegrationRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      user_id: userId,
      integration_user: integrationUser,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<
        Integration,
        Integration & {
          user_id: number;
          integration_user?: Partial<IntegrationUser>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const userAttachIntegration = (
  userId: number,
  integrationId: number,
  integrationUser?: Partial<IntegrationUser>,
  queryParams?: QueryParams
): Promise<User> => {
  const config: QueryParams<{
    id: number;
    integration_id: number;
    integration_user?: Partial<IntegrationUser>;
  }> = {
    method: 'put',
    url: `${UserRoute()}/${userId}`,
    params: queryParams?.params,
    data: {
      id: userId,
      integration_id: integrationId,
      integration_user: integrationUser,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User>(config)
    : getResponse<
        User,
        {
          id: number;
          integration_id: number;
          integration_user: Partial<IntegrationUser>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const userCreateWithIntegration = (
  integrationId: number,
  data: Partial<User>,
  integrationUser?: Partial<IntegrationUser>,
  queryParams?: QueryParams
): Promise<User> => {
  const config: QueryParams<
    User & {
      integration_id: number;
      integration_user?: Partial<IntegrationUser>;
    }
  > = {
    method: 'post',
    url: UserRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      integration_id: integrationId,
      integration_user: integrationUser,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<User>(config)
    : getResponse<
        User,
        User & {
          integration_id: number;
          integration_user?: Partial<IntegrationUser>;
        }
      >(queryParams?.api || _client?.api, config);
};
