/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { NotificationsRoute } from '../../routes/Routes';
import { Notifications } from './Notifications';
import { NotificationsApi } from './NotificationsApi';

export const notificationsGetMany = (
  queryParams?: QueryParams<Notifications>,
): Promise<ResourceList<NotificationsApi>> => {
  const config: QueryParams<Notifications> = {
    method: 'get',
    url: queryParams?.url || NotificationsRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<NotificationsApi>>(config)
    : getResponse<ResourceList<NotificationsApi>, Notifications>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const notificationsGetOne = (
  id: string,
  queryParams?: QueryParams<Notifications>,
): Promise<NotificationsApi> => {
  const config: QueryParams<Notifications> = {
    method: 'get',
    url: `${queryParams?.url || NotificationsRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NotificationsApi>(config)
    : getResponse<NotificationsApi, Notifications>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const notificationsDeleteOne = (
  id: string,
  queryParams?: QueryParams<Notifications>,
): Promise<MessageResponse> => {
  const config: QueryParams<Notifications> = {
    method: 'delete',
    url: `${queryParams?.url || NotificationsRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Notifications>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const notificationsUpdateOne = (
  id: string,
  data: Partial<Notifications>,
  queryParams?: QueryParams<Notifications>,
): Promise<Notifications> => {
  const config: QueryParams<Notifications> = {
    method: 'put',
    url: `${queryParams?.url || NotificationsRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Notifications>(config)
    : getResponse<Notifications>(queryParams?.api || _client?.api, config);
};

export const notificationsCreateOne = (
  data: Partial<Notifications>,
  queryParams?: QueryParams<Notifications>,
): Promise<Notifications> => {
  const config: QueryParams<Notifications> = {
    method: 'post',
    url: queryParams?.url || NotificationsRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Notifications>(config)
    : getResponse<Notifications>(queryParams?.api || _client?.api, config);
};

export const notificationsCreateMany = (
  data: Partial<Notifications>[],
  queryParams?: QueryParamsWithList<Notifications>,
): Promise<Notifications[]> => {
  const config: QueryParamsWithList<Notifications> = {
    method: 'post',
    url: queryParams?.url || NotificationsRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Notifications[]>(config)
    : getResponse<Notifications[], Notifications>(
        queryParams?.api || _client?.api,
        config,
      );
};
