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
import { StatusTypeRoute } from '../../routes/Routes';
import type { StatusType } from './StatusType';
import type { StatusTypeApi } from './StatusTypeApi';

export const statusTypeGetMany = (
  queryParams?: QueryParams<StatusType>,
): Promise<ResourceList<StatusTypeApi>> => {
  const config: QueryParams<StatusType> = {
    method: 'get',
    url: queryParams?.url ?? StatusTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<StatusTypeApi>>(config)
    : getResponse<ResourceList<StatusTypeApi>, StatusType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const statusTypeGetOne = (
  id: number,
  queryParams?: QueryParams<StatusType>,
): Promise<StatusTypeApi> => {
  const config: QueryParams<StatusType> = {
    method: 'get',
    url: `${queryParams?.url ?? StatusTypeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StatusTypeApi>(config)
    : getResponse<StatusTypeApi, StatusType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const statusTypeDeleteOne = (
  id: number,
  queryParams?: QueryParams<StatusType>,
): Promise<MessageResponse> => {
  const config: QueryParams<StatusType> = {
    method: 'delete',
    url: `${queryParams?.url ?? StatusTypeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, StatusType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const statusTypeDeleteMany = (
  data: (Partial<StatusType> & { id: number })[],
  queryParams?: QueryParamsWithList<StatusType>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<StatusType> = {
        method: 'post',
        url: queryParams?.url ?? StatusTypeRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, StatusType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const statusTypeUpdateOne = (
  id: number,
  data: Partial<StatusType>,
  queryParams?: QueryParams<StatusType>,
): Promise<StatusType> => {
  const config: QueryParams<StatusType> = {
    method: 'put',
    url: `${queryParams?.url ?? StatusTypeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StatusType>(config)
    : getResponse<StatusType>(queryParams?.api ?? _client?.api, config);
};

export const statusTypeUpdateMany = (
  data: (Partial<StatusType> & { id: number })[],
  queryParams?: QueryParamsWithList<StatusType>,
): Promise<StatusType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<StatusType> = {
        method: 'post',
        url: queryParams?.url ?? StatusTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<StatusType[]>(config)
        : getResponse<StatusType[], StatusType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const statusTypeCreateOne = (
  data: Partial<StatusType>,
  queryParams?: QueryParams<StatusType>,
): Promise<StatusType> => {
  const config: QueryParams<StatusType> = {
    method: 'post',
    url: queryParams?.url ?? StatusTypeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StatusType>(config)
    : getResponse<StatusType>(queryParams?.api ?? _client?.api, config);
};

export const statusTypeCreateMany = (
  data: Partial<StatusType>[],
  queryParams?: QueryParamsWithList<StatusType>,
): Promise<StatusType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<StatusType> = {
        method: 'post',
        url: queryParams?.url ?? StatusTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<StatusType[]>(config)
        : getResponse<StatusType[], StatusType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
