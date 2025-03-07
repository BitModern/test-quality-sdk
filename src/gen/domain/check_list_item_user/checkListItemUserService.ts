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
import type { CheckListItemUser } from './CheckListItemUser';
import type { CheckListItemUserApi } from './CheckListItemUserApi';

export const checkListItemUserDetach = (
  data: Partial<CheckListItemUser>,
  queryParams?: QueryParams<CheckListItemUser>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<CheckListItemUser> = {
    method: 'delete',
    url: `/check_list_item_user/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CheckListItemUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListItemUserDeleteMany = (
  data: Partial<CheckListItemUser>[],
  queryParams?: QueryParamsWithList<CheckListItemUser>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CheckListItemUser> = {
        method: 'post',
        url: `/check_list_item_user/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, CheckListItemUser>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkListItemUserUpdateOne = (
  id: number,
  data: Partial<CheckListItemUser>,
  queryParams?: QueryParams<CheckListItemUser>,
): Promise<CheckListItemUser> => {
  const config: QueryParams<CheckListItemUser> = {
    method: 'put',
    url: `/check_list_item_user/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckListItemUser>(config)
    : getResponse<CheckListItemUser>(queryParams?.api ?? _client?.api, config);
};

export const checkListItemUserCreateOne = (
  data: Partial<CheckListItemUser>,
  queryParams?: QueryParams<CheckListItemUser>,
): Promise<CheckListItemUser> => {
  const config: QueryParams<CheckListItemUser> = {
    method: 'post',
    url: queryParams?.url ?? `/check_list_item_user`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckListItemUser>(config)
    : getResponse<CheckListItemUser>(queryParams?.api ?? _client?.api, config);
};

export const checkListItemUserCreateMany = (
  data: Partial<CheckListItemUser>[],
  queryParams?: QueryParamsWithList<CheckListItemUser>,
): Promise<CheckListItemUser[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CheckListItemUser> = {
        method: 'post',
        url: queryParams?.url ?? `/check_list_item_user`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckListItemUser[]>(config)
        : getResponse<CheckListItemUser[], CheckListItemUser>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkListItemUserGetMany = (
  queryParams?: QueryParams<CheckListItemUser>,
): Promise<ResourceList<CheckListItemUserApi>> => {
  const config: QueryParams<CheckListItemUser> = {
    method: 'get',
    url: queryParams?.url ?? `/check_list_item_user`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CheckListItemUserApi>>(config)
    : getResponse<ResourceList<CheckListItemUserApi>, CheckListItemUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListItemUserGetOne = (
  id: number,
  queryParams?: QueryParams<CheckListItemUser>,
): Promise<CheckListItemUserApi> => {
  const config: QueryParams<CheckListItemUser> = {
    method: 'get',
    url: `${queryParams?.url ?? `/check_list_item_user/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckListItemUserApi>(config)
    : getResponse<CheckListItemUserApi, CheckListItemUser>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
