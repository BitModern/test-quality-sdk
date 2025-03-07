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
import { DocRoute } from '../../routes/Routes';
import type { Doc } from './Doc';
import type { DocApi } from './DocApi';

export const docGetMany = (
  queryParams?: QueryParams<Doc>,
): Promise<ResourceList<DocApi>> => {
  const config: QueryParams<Doc> = {
    method: 'get',
    url: queryParams?.url ?? DocRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DocApi>>(config)
    : getResponse<ResourceList<DocApi>, Doc>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docGetOne = (
  id: number,
  queryParams?: QueryParams<Doc>,
): Promise<DocApi> => {
  const config: QueryParams<Doc> = {
    method: 'get',
    url: `${queryParams?.url ?? DocRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocApi>(config)
    : getResponse<DocApi, Doc>(queryParams?.api ?? _client?.api, config);
};

export const docDeleteOne = (
  id: number,
  queryParams?: QueryParams<Doc>,
): Promise<MessageResponse> => {
  const config: QueryParams<Doc> = {
    method: 'delete',
    url: `${queryParams?.url ?? DocRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Doc>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docDeleteMany = (
  data: Partial<Doc>[],
  queryParams?: QueryParamsWithList<Doc>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Doc> = {
        method: 'post',
        url: queryParams?.url ?? DocRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Doc>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const docUpdateOne = (
  id: number,
  data: Partial<Doc>,
  queryParams?: QueryParams<Doc>,
): Promise<Doc> => {
  const config: QueryParams<Doc> = {
    method: 'put',
    url: `${queryParams?.url ?? DocRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Doc>(config)
    : getResponse<Doc>(queryParams?.api ?? _client?.api, config);
};

export const docCreateOne = (
  data: Partial<Doc>,
  queryParams?: QueryParams<Doc>,
): Promise<Doc> => {
  const config: QueryParams<Doc> = {
    method: 'post',
    url: queryParams?.url ?? DocRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Doc>(config)
    : getResponse<Doc>(queryParams?.api ?? _client?.api, config);
};

export const docCreateMany = (
  data: Partial<Doc>[],
  queryParams?: QueryParamsWithList<Doc>,
): Promise<Doc[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Doc> = {
        method: 'post',
        url: queryParams?.url ?? DocRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Doc[]>(config)
        : getResponse<Doc[], Doc>(queryParams?.api ?? _client?.api, config);
    }),
  );
};
