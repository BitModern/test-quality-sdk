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
import type { ShareUser } from './ShareUser';
import type { ShareUserApi } from './ShareUserApi';

export const shareUserDetach = (
  data: Partial<ShareUser>,
  queryParams?: QueryParams<ShareUser>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<ShareUser> = {
    method: 'delete',
    url: `/share_user/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, ShareUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const shareUserDeleteMany = (
  data: Partial<ShareUser>[],
  queryParams?: QueryParamsWithList<ShareUser>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ShareUser> = {
        method: 'post',
        url: `/share_user/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, ShareUser>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const shareUserUpdateOne = (
  id: number,
  data: Partial<ShareUser>,
  queryParams?: QueryParams<ShareUser>,
): Promise<ShareUser> => {
  const config: QueryParams<ShareUser> = {
    method: 'put',
    url: `/share_user/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ShareUser>(config)
    : getResponse<ShareUser>(queryParams?.api ?? _client?.api, config);
};

export const shareUserCreateOne = (
  data: Partial<ShareUser>,
  queryParams?: QueryParams<ShareUser>,
): Promise<ShareUser> => {
  const config: QueryParams<ShareUser> = {
    method: 'post',
    url: queryParams?.url ?? `/share_user`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ShareUser>(config)
    : getResponse<ShareUser>(queryParams?.api ?? _client?.api, config);
};

export const shareUserCreateMany = (
  data: Partial<ShareUser>[],
  queryParams?: QueryParamsWithList<ShareUser>,
): Promise<ShareUser[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ShareUser> = {
        method: 'post',
        url: queryParams?.url ?? `/share_user`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ShareUser[]>(config)
        : getResponse<ShareUser[], ShareUser>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const shareUserGetMany = (
  queryParams?: QueryParams<ShareUser>,
): Promise<ResourceList<ShareUserApi>> => {
  const config: QueryParams<ShareUser> = {
    method: 'get',
    url: queryParams?.url ?? `/share_user`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ShareUserApi>>(config)
    : getResponse<ResourceList<ShareUserApi>, ShareUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const shareUserGetOne = (
  id: number,
  queryParams?: QueryParams<ShareUser>,
): Promise<ShareUserApi> => {
  const config: QueryParams<ShareUser> = {
    method: 'get',
    url: `${queryParams?.url ?? `/share_user/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ShareUserApi>(config)
    : getResponse<ShareUserApi, ShareUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
