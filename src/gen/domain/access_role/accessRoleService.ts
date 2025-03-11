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
import { AccessRoleRoute } from '../../routes/Routes';
import type { AccessRole } from './AccessRole';
import type { AccessRoleApi } from './AccessRoleApi';

export const accessRoleGetMany = (
  queryParams?: QueryParams<AccessRole>,
): Promise<ResourceList<AccessRoleApi>> => {
  const config: QueryParams<AccessRole> = {
    method: 'get',
    url: queryParams?.url ?? AccessRoleRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AccessRoleApi>>(config)
    : getResponse<ResourceList<AccessRoleApi>, AccessRole>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const accessRoleGetOne = (
  id: number,
  queryParams?: QueryParams<AccessRole>,
): Promise<AccessRoleApi> => {
  const config: QueryParams<AccessRole> = {
    method: 'get',
    url: `${queryParams?.url ?? AccessRoleRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRoleApi>(config)
    : getResponse<AccessRoleApi, AccessRole>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const accessRoleDeleteOne = (
  id: number,
  queryParams?: QueryParams<AccessRole>,
): Promise<MessageResponse> => {
  const config: QueryParams<AccessRole> = {
    method: 'delete',
    url: `${queryParams?.url ?? AccessRoleRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, AccessRole>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const accessRoleDeleteMany = (
  data: (Partial<AccessRole> & { id: number })[],
  queryParams?: QueryParamsWithList<AccessRole>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<AccessRole> = {
        method: 'post',
        url: queryParams?.url ?? AccessRoleRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, AccessRole>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const accessRoleUpdateOne = (
  id: number,
  data: Partial<AccessRole>,
  queryParams?: QueryParams<AccessRole>,
): Promise<AccessRole> => {
  const config: QueryParams<AccessRole> = {
    method: 'put',
    url: `${queryParams?.url ?? AccessRoleRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRole>(config)
    : getResponse<AccessRole>(queryParams?.api ?? _client?.api, config);
};

export const accessRoleUpdateMany = (
  data: (Partial<AccessRole> & { id: number })[],
  queryParams?: QueryParamsWithList<AccessRole>,
): Promise<AccessRole[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<AccessRole> = {
        method: 'post',
        url: queryParams?.url ?? AccessRoleRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<AccessRole[]>(config)
        : getResponse<AccessRole[], AccessRole>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const accessRoleCreateOne = (
  data: Partial<AccessRole>,
  queryParams?: QueryParams<AccessRole>,
): Promise<AccessRole> => {
  const config: QueryParams<AccessRole> = {
    method: 'post',
    url: queryParams?.url ?? AccessRoleRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRole>(config)
    : getResponse<AccessRole>(queryParams?.api ?? _client?.api, config);
};

export const accessRoleCreateMany = (
  data: Partial<AccessRole>[],
  queryParams?: QueryParamsWithList<AccessRole>,
): Promise<AccessRole[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<AccessRole> = {
        method: 'post',
        url: queryParams?.url ?? AccessRoleRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<AccessRole[]>(config)
        : getResponse<AccessRole[], AccessRole>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
