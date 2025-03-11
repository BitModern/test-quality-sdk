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
import { StatusRoute } from '../../routes/Routes';
import type { Status } from './Status';
import type { StatusApi } from './StatusApi';

export const statusGetMany = (
  queryParams?: QueryParams<Partial<Status>>,
): Promise<ResourceList<StatusApi>> => {
  const config: QueryParams<Partial<Status>> = {
    method: 'get',
    url: queryParams?.url ?? StatusRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<StatusApi>>(config)
    : getResponse<ResourceList<StatusApi>, Partial<Status>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const statusGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Status>>,
): Promise<StatusApi> => {
  const config: QueryParams<Partial<Status>> = {
    method: 'get',
    url: `${queryParams?.url ?? StatusRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StatusApi>(config)
    : getResponse<StatusApi, Partial<Status>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const statusDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Status>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Status>> = {
    method: 'delete',
    url: `${queryParams?.url ?? StatusRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Status>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const statusDeleteMany = (
  data: (Partial<Status> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Status> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Status> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? StatusRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Status> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const statusUpdateOne = (
  id: number,
  data: Partial<Status>,
  queryParams?: QueryParams<Partial<Status>>,
): Promise<Status> => {
  const config: QueryParams<Partial<Status>> = {
    method: 'put',
    url: `${queryParams?.url ?? StatusRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Status>(config)
    : getResponse<Status, Partial<Status>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const statusUpdateMany = (
  data: (Partial<Status> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Status> & { id: number }>,
): Promise<Status[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Status> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? StatusRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Status[]>(config)
        : getResponse<Status[], Partial<Status> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const statusCreateOne = (
  data: Partial<Status>,
  queryParams?: QueryParams<Partial<Status>>,
): Promise<Status> => {
  const config: QueryParams<Partial<Status>> = {
    method: 'post',
    url: queryParams?.url ?? StatusRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Status>(config)
    : getResponse<Status, Partial<Status>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const statusCreateMany = (
  data: Partial<Status>[],
  queryParams?: QueryParamsWithList<Partial<Status>>,
): Promise<Status[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Status>> = {
        method: 'post',
        url: queryParams?.url ?? StatusRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Status[]>(config)
        : getResponse<Status[], Partial<Status>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
