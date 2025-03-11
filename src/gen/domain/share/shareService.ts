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
import { ShareRoute } from '../../routes/Routes';
import type { Share } from './Share';
import type { ShareApi } from './ShareApi';

export const shareGetMany = (
  queryParams?: QueryParams<Partial<Share>>,
): Promise<ResourceList<ShareApi>> => {
  const config: QueryParams<Partial<Share>> = {
    method: 'get',
    url: queryParams?.url ?? ShareRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ShareApi>>(config)
    : getResponse<ResourceList<ShareApi>, Partial<Share>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const shareGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Share>>,
): Promise<ShareApi> => {
  const config: QueryParams<Partial<Share>> = {
    method: 'get',
    url: `${queryParams?.url ?? ShareRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ShareApi>(config)
    : getResponse<ShareApi, Partial<Share>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const shareDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Share>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Share>> = {
    method: 'delete',
    url: `${queryParams?.url ?? ShareRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Share>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const shareDeleteMany = (
  data: (Partial<Share> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Share> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Share> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? ShareRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Share> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const shareUpdateOne = (
  id: number,
  data: Partial<Share>,
  queryParams?: QueryParams<Partial<Share>>,
): Promise<Share> => {
  const config: QueryParams<Partial<Share>> = {
    method: 'put',
    url: `${queryParams?.url ?? ShareRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Share>(config)
    : getResponse<Share, Partial<Share>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const shareUpdateMany = (
  data: (Partial<Share> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Share> & { id: number }>,
): Promise<Share[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Share> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? ShareRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Share[]>(config)
        : getResponse<Share[], Partial<Share> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const shareCreateOne = (
  data: Partial<Share>,
  queryParams?: QueryParams<Partial<Share>>,
): Promise<Share> => {
  const config: QueryParams<Partial<Share>> = {
    method: 'post',
    url: queryParams?.url ?? ShareRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Share>(config)
    : getResponse<Share, Partial<Share>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const shareCreateMany = (
  data: Partial<Share>[],
  queryParams?: QueryParamsWithList<Partial<Share>>,
): Promise<Share[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Share>> = {
        method: 'post',
        url: queryParams?.url ?? ShareRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Share[]>(config)
        : getResponse<Share[], Partial<Share>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
