/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type {
  QueryParams,
  QueryParamsWithList,
} from '../../actions/QueryParams';
import type { MessageResponse } from '../../actions/MessageResponse';
import type { ResourceList } from '../../models/ResourceList';
import type { IntegrationUser } from './IntegrationUser';
import type { IntegrationUserApi } from './IntegrationUserApi';

export const integrationUserDetach = (
  data: Partial<IntegrationUser>,
  queryParams?: QueryParams<IntegrationUser>,
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
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationUserUpdateOne = (
  id: number,
  data: Partial<IntegrationUser>,
  queryParams?: QueryParams<IntegrationUser>,
): Promise<IntegrationUser> => {
  const config: QueryParams<IntegrationUser> = {
    method: 'put',
    url: `/integration_user/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationUser>(config)
    : getResponse<IntegrationUser>(queryParams?.api ?? _client?.api, config);
};

export const integrationUserCreateOne = (
  data: Partial<IntegrationUser>,
  queryParams?: QueryParams<IntegrationUser>,
): Promise<IntegrationUser> => {
  const config: QueryParams<IntegrationUser> = {
    method: 'post',
    url: queryParams?.url ?? `/integration_user`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationUser>(config)
    : getResponse<IntegrationUser>(queryParams?.api ?? _client?.api, config);
};

export const integrationUserCreateMany = (
  data: Partial<IntegrationUser>[],
  queryParams?: QueryParamsWithList<IntegrationUser>,
): Promise<IntegrationUser[]> => {
  const config: QueryParamsWithList<IntegrationUser> = {
    method: 'post',
    url: queryParams?.url ?? `/integration_user`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationUser[]>(config)
    : getResponse<IntegrationUser[], IntegrationUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationUserGetMany = (
  queryParams?: QueryParams<IntegrationUser>,
): Promise<ResourceList<IntegrationUserApi>> => {
  const config: QueryParams<IntegrationUser> = {
    method: 'get',
    url: queryParams?.url ?? `/integration_user`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<IntegrationUserApi>>(config)
    : getResponse<ResourceList<IntegrationUserApi>, IntegrationUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationUserGetOne = (
  id: number,
  queryParams?: QueryParams<IntegrationUser>,
): Promise<IntegrationUserApi> => {
  const config: QueryParams<IntegrationUser> = {
    method: 'get',
    url: `${queryParams?.url ?? `/integration_user/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationUserApi>(config)
    : getResponse<IntegrationUserApi, IntegrationUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
