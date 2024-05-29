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
import { CheckListItemRoute } from '../../routes/Routes';
import type { CheckListItem } from './CheckListItem';
import type { CheckListItemApi } from './CheckListItemApi';

export const checkListItemGetMany = (
  queryParams?: QueryParams<CheckListItem>,
): Promise<ResourceList<CheckListItemApi>> => {
  const config: QueryParams<CheckListItem> = {
    method: 'get',
    url: queryParams?.url ?? CheckListItemRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CheckListItemApi>>(config)
    : getResponse<ResourceList<CheckListItemApi>, CheckListItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListItemGetOne = (
  id: number,
  queryParams?: QueryParams<CheckListItem>,
): Promise<CheckListItemApi> => {
  const config: QueryParams<CheckListItem> = {
    method: 'get',
    url: `${queryParams?.url ?? CheckListItemRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckListItemApi>(config)
    : getResponse<CheckListItemApi, CheckListItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListItemDeleteOne = (
  id: number,
  queryParams?: QueryParams<CheckListItem>,
): Promise<MessageResponse> => {
  const config: QueryParams<CheckListItem> = {
    method: 'delete',
    url: `${queryParams?.url ?? CheckListItemRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CheckListItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListItemUpdateOne = (
  id: number,
  data: Partial<CheckListItem>,
  queryParams?: QueryParams<CheckListItem>,
): Promise<CheckListItem> => {
  const config: QueryParams<CheckListItem> = {
    method: 'put',
    url: `${queryParams?.url ?? CheckListItemRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckListItem>(config)
    : getResponse<CheckListItem>(queryParams?.api ?? _client?.api, config);
};

export const checkListItemCreateOne = (
  data: Partial<CheckListItem>,
  queryParams?: QueryParams<CheckListItem>,
): Promise<CheckListItem> => {
  const config: QueryParams<CheckListItem> = {
    method: 'post',
    url: queryParams?.url ?? CheckListItemRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckListItem>(config)
    : getResponse<CheckListItem>(queryParams?.api ?? _client?.api, config);
};

export const checkListItemCreateMany = (
  data: Partial<CheckListItem>[],
  queryParams?: QueryParamsWithList<CheckListItem>,
): Promise<CheckListItem[]> => {
  const config: QueryParamsWithList<CheckListItem> = {
    method: 'post',
    url: queryParams?.url ?? CheckListItemRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckListItem[]>(config)
    : getResponse<CheckListItem[], CheckListItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
