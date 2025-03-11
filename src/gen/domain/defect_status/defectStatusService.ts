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
import { DefectStatusRoute } from '../../routes/Routes';
import type { DefectStatus } from './DefectStatus';
import type { DefectStatusApi } from './DefectStatusApi';

export const defectStatusGetMany = (
  queryParams?: QueryParams<Partial<DefectStatus>>,
): Promise<ResourceList<DefectStatusApi>> => {
  const config: QueryParams<Partial<DefectStatus>> = {
    method: 'get',
    url: queryParams?.url ?? DefectStatusRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectStatusApi>>(config)
    : getResponse<ResourceList<DefectStatusApi>, Partial<DefectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectStatusGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<DefectStatus>>,
): Promise<DefectStatusApi> => {
  const config: QueryParams<Partial<DefectStatus>> = {
    method: 'get',
    url: `${queryParams?.url ?? DefectStatusRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatusApi>(config)
    : getResponse<DefectStatusApi, Partial<DefectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectStatusDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<DefectStatus>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<DefectStatus>> = {
    method: 'delete',
    url: `${queryParams?.url ?? DefectStatusRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<DefectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectStatusDeleteMany = (
  data: (Partial<DefectStatus> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<DefectStatus> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<DefectStatus> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? DefectStatusRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<DefectStatus> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const defectStatusUpdateOne = (
  id: number,
  data: Partial<DefectStatus>,
  queryParams?: QueryParams<Partial<DefectStatus>>,
): Promise<DefectStatus> => {
  const config: QueryParams<Partial<DefectStatus>> = {
    method: 'put',
    url: `${queryParams?.url ?? DefectStatusRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatus>(config)
    : getResponse<DefectStatus, Partial<DefectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectStatusUpdateMany = (
  data: (Partial<DefectStatus> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<DefectStatus> & { id: number }>,
): Promise<DefectStatus[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<DefectStatus> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? DefectStatusRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectStatus[]>(config)
        : getResponse<DefectStatus[], Partial<DefectStatus> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectStatusCreateOne = (
  data: Partial<DefectStatus>,
  queryParams?: QueryParams<Partial<DefectStatus>>,
): Promise<DefectStatus> => {
  const config: QueryParams<Partial<DefectStatus>> = {
    method: 'post',
    url: queryParams?.url ?? DefectStatusRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatus>(config)
    : getResponse<DefectStatus, Partial<DefectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectStatusCreateMany = (
  data: Partial<DefectStatus>[],
  queryParams?: QueryParamsWithList<Partial<DefectStatus>>,
): Promise<DefectStatus[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<DefectStatus>> = {
        method: 'post',
        url: queryParams?.url ?? DefectStatusRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectStatus[]>(config)
        : getResponse<DefectStatus[], Partial<DefectStatus>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
