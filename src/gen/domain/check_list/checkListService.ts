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
import { CheckListRoute } from '../../routes/Routes';
import type { CheckList } from './CheckList';
import type { CheckListApi } from './CheckListApi';

export const checkListGetMany = (
  queryParams?: QueryParams<CheckList>,
): Promise<ResourceList<CheckListApi>> => {
  const config: QueryParams<CheckList> = {
    method: 'get',
    url: queryParams?.url ?? CheckListRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CheckListApi>>(config)
    : getResponse<ResourceList<CheckListApi>, CheckList>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListGetOne = (
  id: number,
  queryParams?: QueryParams<CheckList>,
): Promise<CheckListApi> => {
  const config: QueryParams<CheckList> = {
    method: 'get',
    url: `${queryParams?.url ?? CheckListRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckListApi>(config)
    : getResponse<CheckListApi, CheckList>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListDeleteOne = (
  id: number,
  queryParams?: QueryParams<CheckList>,
): Promise<MessageResponse> => {
  const config: QueryParams<CheckList> = {
    method: 'delete',
    url: `${queryParams?.url ?? CheckListRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CheckList>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListUpdateOne = (
  id: number,
  data: Partial<CheckList>,
  queryParams?: QueryParams<CheckList>,
): Promise<CheckList> => {
  const config: QueryParams<CheckList> = {
    method: 'put',
    url: `${queryParams?.url ?? CheckListRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckList>(config)
    : getResponse<CheckList>(queryParams?.api ?? _client?.api, config);
};

export const checkListCreateOne = (
  data: Partial<CheckList>,
  queryParams?: QueryParams<CheckList>,
): Promise<CheckList> => {
  const config: QueryParams<CheckList> = {
    method: 'post',
    url: queryParams?.url ?? CheckListRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckList>(config)
    : getResponse<CheckList>(queryParams?.api ?? _client?.api, config);
};

export const checkListCreateMany = (
  data: Partial<CheckList>[],
  queryParams?: QueryParamsWithList<CheckList>,
): Promise<CheckList[]> => {
  const config: QueryParamsWithList<CheckList> = {
    method: 'post',
    url: queryParams?.url ?? CheckListRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckList[]>(config)
    : getResponse<CheckList[], CheckList>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
