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
import { DefectResRoute } from '../../routes/Routes';
import type { DefectRes } from './DefectRes';
import type { DefectResApi } from './DefectResApi';

export const defectResGetMany = (
  queryParams?: QueryParams<Partial<DefectRes>>,
): Promise<ResourceList<DefectResApi>> => {
  const config: QueryParams<Partial<DefectRes>> = {
    method: 'get',
    url: queryParams?.url ?? DefectResRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectResApi>>(config)
    : getResponse<ResourceList<DefectResApi>, Partial<DefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<DefectRes>>,
): Promise<DefectResApi> => {
  const config: QueryParams<Partial<DefectRes>> = {
    method: 'get',
    url: `${queryParams?.url ?? DefectResRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResApi>(config)
    : getResponse<DefectResApi, Partial<DefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<DefectRes>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<DefectRes>> = {
    method: 'delete',
    url: `${queryParams?.url ?? DefectResRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<DefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResDeleteMany = (
  data: (Partial<DefectRes> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<DefectRes> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<DefectRes> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? DefectResRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<DefectRes> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectResUpdateOne = (
  id: number,
  data: Partial<DefectRes>,
  queryParams?: QueryParams<Partial<DefectRes>>,
): Promise<DefectRes> => {
  const config: QueryParams<Partial<DefectRes>> = {
    method: 'put',
    url: `${queryParams?.url ?? DefectResRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRes>(config)
    : getResponse<DefectRes, Partial<DefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResUpdateMany = (
  data: (Partial<DefectRes> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<DefectRes> & { id: number }>,
): Promise<DefectRes[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<DefectRes> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? DefectResRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectRes[]>(config)
        : getResponse<DefectRes[], Partial<DefectRes> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectResCreateOne = (
  data: Partial<DefectRes>,
  queryParams?: QueryParams<Partial<DefectRes>>,
): Promise<DefectRes> => {
  const config: QueryParams<Partial<DefectRes>> = {
    method: 'post',
    url: queryParams?.url ?? DefectResRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRes>(config)
    : getResponse<DefectRes, Partial<DefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResCreateMany = (
  data: Partial<DefectRes>[],
  queryParams?: QueryParamsWithList<Partial<DefectRes>>,
): Promise<DefectRes[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<DefectRes>> = {
        method: 'post',
        url: queryParams?.url ?? DefectResRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectRes[]>(config)
        : getResponse<DefectRes[], Partial<DefectRes>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
