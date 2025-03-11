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
import { CheckListRoute } from '../../routes/Routes';
import type { CheckList } from './CheckList';
import type { CheckListApi } from './CheckListApi';

export const checkListGetMany = (
  queryParams?: QueryParams<Partial<CheckList>>,
): Promise<ResourceList<CheckListApi>> => {
  const config: QueryParams<Partial<CheckList>> = {
    method: 'get',
    url: queryParams?.url ?? CheckListRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CheckListApi>>(config)
    : getResponse<ResourceList<CheckListApi>, Partial<CheckList>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<CheckList>>,
): Promise<CheckListApi> => {
  const config: QueryParams<Partial<CheckList>> = {
    method: 'get',
    url: `${queryParams?.url ?? CheckListRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckListApi>(config)
    : getResponse<CheckListApi, Partial<CheckList>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<CheckList>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<CheckList>> = {
    method: 'delete',
    url: `${queryParams?.url ?? CheckListRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<CheckList>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListDeleteMany = (
  data: (Partial<CheckList> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CheckList> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CheckList> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? CheckListRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<CheckList> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkListUpdateOne = (
  id: number,
  data: Partial<CheckList>,
  queryParams?: QueryParams<Partial<CheckList>>,
): Promise<CheckList> => {
  const config: QueryParams<Partial<CheckList>> = {
    method: 'put',
    url: `${queryParams?.url ?? CheckListRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckList>(config)
    : getResponse<CheckList, Partial<CheckList>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListUpdateMany = (
  data: (Partial<CheckList> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CheckList> & { id: number }>,
): Promise<CheckList[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CheckList> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? CheckListRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckList[]>(config)
        : getResponse<CheckList[], Partial<CheckList> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const checkListCreateOne = (
  data: Partial<CheckList>,
  queryParams?: QueryParams<Partial<CheckList>>,
): Promise<CheckList> => {
  const config: QueryParams<Partial<CheckList>> = {
    method: 'post',
    url: queryParams?.url ?? CheckListRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckList>(config)
    : getResponse<CheckList, Partial<CheckList>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const checkListCreateMany = (
  data: Partial<CheckList>[],
  queryParams?: QueryParamsWithList<Partial<CheckList>>,
): Promise<CheckList[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CheckList>> = {
        method: 'post',
        url: queryParams?.url ?? CheckListRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CheckList[]>(config)
        : getResponse<CheckList[], Partial<CheckList>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
