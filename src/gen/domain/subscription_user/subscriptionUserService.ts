/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { SubscriptionUserRoute } from '../../routes/Routes';
import { SubscriptionUser } from './SubscriptionUser';
import { SubscriptionUserApi } from './SubscriptionUserApi';

export const subscriptionUserGetMany = (
  queryParams?: QueryParams<SubscriptionUser>
): Promise<ResourceList<SubscriptionUserApi>> => {
  const config: QueryParams<SubscriptionUser> = {
    method: 'get',
    url: queryParams?.url || SubscriptionUserRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SubscriptionUserApi>>(config)
    : getResponse<ResourceList<SubscriptionUserApi>, SubscriptionUser>(
        queryParams?.api || _client?.api,
        config
      );
};

export const subscriptionUserGetOne = (
  id: number,
  queryParams?: QueryParams<SubscriptionUser>
): Promise<SubscriptionUserApi> => {
  const config: QueryParams<SubscriptionUser> = {
    method: 'get',
    url: `${queryParams?.url || SubscriptionUserRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionUserApi>(config)
    : getResponse<SubscriptionUserApi, SubscriptionUser>(
        queryParams?.api || _client?.api,
        config
      );
};

export const subscriptionUserDeleteOne = (
  id: number,
  queryParams?: QueryParams<SubscriptionUser>
): Promise<MessageResponse> => {
  const config: QueryParams<SubscriptionUser> = {
    method: 'delete',
    url: `${queryParams?.url || SubscriptionUserRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, SubscriptionUser>(
        queryParams?.api || _client?.api,
        config
      );
};

export const subscriptionUserUpdateOne = (
  id: number,
  data: Partial<SubscriptionUser>,
  queryParams?: QueryParams<SubscriptionUser>
): Promise<SubscriptionUser> => {
  const config: QueryParams<SubscriptionUser> = {
    method: 'put',
    url: `${queryParams?.url || SubscriptionUserRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionUser>(config)
    : getResponse<SubscriptionUser>(queryParams?.api || _client?.api, config);
};

export const subscriptionUserCreateOne = (
  data: Partial<SubscriptionUser>,
  queryParams?: QueryParams<SubscriptionUser>
): Promise<SubscriptionUser> => {
  const config: QueryParams<SubscriptionUser> = {
    method: 'post',
    url: queryParams?.url || SubscriptionUserRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionUser>(config)
    : getResponse<SubscriptionUser>(queryParams?.api || _client?.api, config);
};
