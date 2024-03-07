/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { AccessRoleRoute } from '../../routes/Routes';
import { AccessRole } from './AccessRole';
import { AccessRoleApi } from './AccessRoleApi';

export const accessRoleGetMany = (
  queryParams?: QueryParams<AccessRole>
): Promise<ResourceList<AccessRoleApi>> => {
  const config: QueryParams<AccessRole> = {
    method: 'get',
    url: queryParams?.url || AccessRoleRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AccessRoleApi>>(config)
    : getResponse<ResourceList<AccessRoleApi>, AccessRole>(
        queryParams?.api || _client?.api,
        config
      );
};

export const accessRoleGetOne = (
  id: number,
  queryParams?: QueryParams<AccessRole>
): Promise<AccessRoleApi> => {
  const config: QueryParams<AccessRole> = {
    method: 'get',
    url: `${queryParams?.url || AccessRoleRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRoleApi>(config)
    : getResponse<AccessRoleApi, AccessRole>(
        queryParams?.api || _client?.api,
        config
      );
};

export const accessRoleDeleteOne = (
  id: number,
  queryParams?: QueryParams<AccessRole>
): Promise<MessageResponse> => {
  const config: QueryParams<AccessRole> = {
    method: 'delete',
    url: `${queryParams?.url || AccessRoleRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, AccessRole>(
        queryParams?.api || _client?.api,
        config
      );
};

export const accessRoleUpdateOne = (
  id: number,
  data: Partial<AccessRole>,
  queryParams?: QueryParams<AccessRole>
): Promise<AccessRole> => {
  const config: QueryParams<AccessRole> = {
    method: 'put',
    url: `${queryParams?.url || AccessRoleRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRole>(config)
    : getResponse<AccessRole>(queryParams?.api || _client?.api, config);
};

export const accessRoleCreateOne = (
  data: Partial<AccessRole>,
  queryParams?: QueryParams<AccessRole>
): Promise<AccessRole> => {
  const config: QueryParams<AccessRole> = {
    method: 'post',
    url: queryParams?.url || AccessRoleRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRole>(config)
    : getResponse<AccessRole>(queryParams?.api || _client?.api, config);
};

export const accessRoleCreateMany = (
  data: Partial<AccessRole>[],
  queryParams?: QueryParamsWithList<AccessRole>
): Promise<AccessRole[]> => {
  const config: QueryParamsWithList<AccessRole> = {
    method: 'post',
    url: queryParams?.url || AccessRoleRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRole[]>(config)
    : getResponse<AccessRole[], AccessRole>(
        queryParams?.api || _client?.api,
        config
      );
};
