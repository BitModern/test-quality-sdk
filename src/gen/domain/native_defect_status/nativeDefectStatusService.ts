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
import { NativeDefectStatusRoute } from '../../routes/Routes';
import type { NativeDefectStatus } from './NativeDefectStatus';
import type { NativeDefectStatusApi } from './NativeDefectStatusApi';

export const nativeDefectStatusGetMany = (
  queryParams?: QueryParams<Partial<NativeDefectStatus>>,
): Promise<ResourceList<NativeDefectStatusApi>> => {
  const config: QueryParams<Partial<NativeDefectStatus>> = {
    method: 'get',
    url: queryParams?.url ?? NativeDefectStatusRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<NativeDefectStatusApi>>(config)
    : getResponse<
        ResourceList<NativeDefectStatusApi>,
        Partial<NativeDefectStatus>
      >(queryParams?.api ?? _client?.api, config);
};

export const nativeDefectStatusGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<NativeDefectStatus>>,
): Promise<NativeDefectStatusApi> => {
  const config: QueryParams<Partial<NativeDefectStatus>> = {
    method: 'get',
    url: `${queryParams?.url ?? NativeDefectStatusRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectStatusApi>(config)
    : getResponse<NativeDefectStatusApi, Partial<NativeDefectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const nativeDefectStatusDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<NativeDefectStatus>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<NativeDefectStatus>> = {
    method: 'delete',
    url: `${queryParams?.url ?? NativeDefectStatusRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<NativeDefectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const nativeDefectStatusDeleteMany = (
  data: (Partial<NativeDefectStatus> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<NativeDefectStatus> & { id: number }
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<NativeDefectStatus> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? NativeDefectStatusRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<NativeDefectStatus> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const nativeDefectStatusUpdateOne = (
  id: number,
  data: Partial<NativeDefectStatus>,
  queryParams?: QueryParams<Partial<NativeDefectStatus>>,
): Promise<NativeDefectStatus> => {
  const config: QueryParams<Partial<NativeDefectStatus>> = {
    method: 'put',
    url: `${queryParams?.url ?? NativeDefectStatusRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectStatus>(config)
    : getResponse<NativeDefectStatus, Partial<NativeDefectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const nativeDefectStatusUpdateMany = (
  data: (Partial<NativeDefectStatus> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<NativeDefectStatus> & { id: number }
  >,
): Promise<NativeDefectStatus[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<NativeDefectStatus> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? NativeDefectStatusRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<NativeDefectStatus[]>(config)
        : getResponse<
            NativeDefectStatus[],
            Partial<NativeDefectStatus> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const nativeDefectStatusCreateOne = (
  data: Partial<NativeDefectStatus>,
  queryParams?: QueryParams<Partial<NativeDefectStatus>>,
): Promise<NativeDefectStatus> => {
  const config: QueryParams<Partial<NativeDefectStatus>> = {
    method: 'post',
    url: queryParams?.url ?? NativeDefectStatusRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectStatus>(config)
    : getResponse<NativeDefectStatus, Partial<NativeDefectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const nativeDefectStatusCreateMany = (
  data: Partial<NativeDefectStatus>[],
  queryParams?: QueryParamsWithList<Partial<NativeDefectStatus>>,
): Promise<NativeDefectStatus[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<NativeDefectStatus>> = {
        method: 'post',
        url: queryParams?.url ?? NativeDefectStatusRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<NativeDefectStatus[]>(config)
        : getResponse<NativeDefectStatus[], Partial<NativeDefectStatus>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
