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
import type { IntegrationUser } from './IntegrationUser';
import type { IntegrationUserApi } from './IntegrationUserApi';

export const integrationUserDetach = (
  data: Partial<IntegrationUser>,
  queryParams?: QueryParams<Partial<IntegrationUser>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<IntegrationUser>> = {
    method: 'delete',
    url: `/integration_user/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<IntegrationUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationUserDeleteMany = (
  data: (Partial<IntegrationUser> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<IntegrationUser & { id: number }>>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<IntegrationUser> & { id: number }
      > = {
        method: 'post',
        url: `/integration_user/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<IntegrationUser> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const integrationUserUpdateOne = (
  id: number,
  data: Partial<IntegrationUser>,
  queryParams?: QueryParams<Partial<IntegrationUser>>,
): Promise<IntegrationUser> => {
  const config: QueryParams<Partial<IntegrationUser>> = {
    method: 'put',
    url: `/integration_user/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationUser>(config)
    : getResponse<IntegrationUser, Partial<IntegrationUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationUserUpdateMany = (
  data: (Partial<IntegrationUser> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<IntegrationUser> & { id: number }>,
): Promise<IntegrationUser[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<IntegrationUser> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/integration_user`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<IntegrationUser[]>(config)
        : getResponse<
            IntegrationUser[],
            Partial<IntegrationUser> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const integrationUserCreateOne = (
  data: Partial<IntegrationUser>,
  queryParams?: QueryParams<Partial<IntegrationUser>>,
): Promise<IntegrationUser> => {
  const config: QueryParams<Partial<IntegrationUser>> = {
    method: 'post',
    url: queryParams?.url ?? `/integration_user`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationUser>(config)
    : getResponse<IntegrationUser, Partial<IntegrationUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationUserCreateMany = (
  data: Partial<IntegrationUser>[],
  queryParams?: QueryParamsWithList<Partial<IntegrationUser>>,
): Promise<IntegrationUser[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<IntegrationUser>> = {
        method: 'post',
        url: queryParams?.url ?? `/integration_user`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<IntegrationUser[]>(config)
        : getResponse<IntegrationUser[], Partial<IntegrationUser>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const integrationUserGetMany = (
  queryParams?: QueryParams<Partial<IntegrationUser>>,
): Promise<ResourceList<IntegrationUserApi>> => {
  const config: QueryParams<Partial<IntegrationUser>> = {
    method: 'get',
    url: queryParams?.url ?? `/integration_user`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<IntegrationUserApi>>(config)
    : getResponse<ResourceList<IntegrationUserApi>, Partial<IntegrationUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationUserGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<IntegrationUser>>,
): Promise<IntegrationUserApi> => {
  const config: QueryParams<Partial<IntegrationUser>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/integration_user/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationUserApi>(config)
    : getResponse<IntegrationUserApi, Partial<IntegrationUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
