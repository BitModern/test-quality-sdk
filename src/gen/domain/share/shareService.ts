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
  queryParams?: QueryParams<Share>,
): Promise<ResourceList<ShareApi>> => {
  const config: QueryParams<Share> = {
    method: 'get',
    url: queryParams?.url ?? ShareRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ShareApi>>(config)
    : getResponse<ResourceList<ShareApi>, Share>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const shareGetOne = (
  id: number,
  queryParams?: QueryParams<Share>,
): Promise<ShareApi> => {
  const config: QueryParams<Share> = {
    method: 'get',
    url: `${queryParams?.url ?? ShareRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ShareApi>(config)
    : getResponse<ShareApi, Share>(queryParams?.api ?? _client?.api, config);
};

export const shareDeleteOne = (
  id: number,
  queryParams?: QueryParams<Share>,
): Promise<MessageResponse> => {
  const config: QueryParams<Share> = {
    method: 'delete',
    url: `${queryParams?.url ?? ShareRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Share>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const shareDeleteMany = (
  data: Partial<Share>[],
  queryParams?: QueryParamsWithList<Share>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Share> = {
        method: 'post',
        url: queryParams?.url ?? ShareRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Share>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const shareUpdateOne = (
  id: number,
  data: Partial<Share>,
  queryParams?: QueryParams<Share>,
): Promise<Share> => {
  const config: QueryParams<Share> = {
    method: 'put',
    url: `${queryParams?.url ?? ShareRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Share>(config)
    : getResponse<Share>(queryParams?.api ?? _client?.api, config);
};

export const shareCreateOne = (
  data: Partial<Share>,
  queryParams?: QueryParams<Share>,
): Promise<Share> => {
  const config: QueryParams<Share> = {
    method: 'post',
    url: queryParams?.url ?? ShareRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Share>(config)
    : getResponse<Share>(queryParams?.api ?? _client?.api, config);
};

export const shareCreateMany = (
  data: Partial<Share>[],
  queryParams?: QueryParamsWithList<Share>,
): Promise<Share[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Share> = {
        method: 'post',
        url: queryParams?.url ?? ShareRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Share[]>(config)
        : getResponse<Share[], Share>(queryParams?.api ?? _client?.api, config);
    }),
  );
};
