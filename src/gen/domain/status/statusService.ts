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
  queryParams?: QueryParams<Status>,
): Promise<ResourceList<StatusApi>> => {
  const config: QueryParams<Status> = {
    method: 'get',
    url: queryParams?.url ?? StatusRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<StatusApi>>(config)
    : getResponse<ResourceList<StatusApi>, Status>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const statusGetOne = (
  id: number,
  queryParams?: QueryParams<Status>,
): Promise<StatusApi> => {
  const config: QueryParams<Status> = {
    method: 'get',
    url: `${queryParams?.url ?? StatusRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StatusApi>(config)
    : getResponse<StatusApi, Status>(queryParams?.api ?? _client?.api, config);
};

export const statusDeleteOne = (
  id: number,
  queryParams?: QueryParams<Status>,
): Promise<MessageResponse> => {
  const config: QueryParams<Status> = {
    method: 'delete',
    url: `${queryParams?.url ?? StatusRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Status>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const statusDeleteMany = (
  data: (Partial<Status> & { id: number })[],
  queryParams?: QueryParamsWithList<Status>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Status> = {
        method: 'post',
        url: queryParams?.url ?? StatusRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Status>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const statusUpdateOne = (
  id: number,
  data: Partial<Status>,
  queryParams?: QueryParams<Status>,
): Promise<Status> => {
  const config: QueryParams<Status> = {
    method: 'put',
    url: `${queryParams?.url ?? StatusRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Status>(config)
    : getResponse<Status>(queryParams?.api ?? _client?.api, config);
};

export const statusUpdateMany = (
  data: (Partial<Status> & { id: number })[],
  queryParams?: QueryParamsWithList<Status>,
): Promise<Status[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Status> = {
        method: 'post',
        url: queryParams?.url ?? StatusRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Status[]>(config)
        : getResponse<Status[], Status>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const statusCreateOne = (
  data: Partial<Status>,
  queryParams?: QueryParams<Status>,
): Promise<Status> => {
  const config: QueryParams<Status> = {
    method: 'post',
    url: queryParams?.url ?? StatusRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Status>(config)
    : getResponse<Status>(queryParams?.api ?? _client?.api, config);
};

export const statusCreateMany = (
  data: Partial<Status>[],
  queryParams?: QueryParamsWithList<Status>,
): Promise<Status[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Status> = {
        method: 'post',
        url: queryParams?.url ?? StatusRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Status[]>(config)
        : getResponse<Status[], Status>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
