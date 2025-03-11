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
import { NativeDefectResRoute } from '../../routes/Routes';
import type { NativeDefectRes } from './NativeDefectRes';
import type { NativeDefectResApi } from './NativeDefectResApi';

export const nativeDefectResGetMany = (
  queryParams?: QueryParams<Partial<NativeDefectRes>>,
): Promise<ResourceList<NativeDefectResApi>> => {
  const config: QueryParams<Partial<NativeDefectRes>> = {
    method: 'get',
    url: queryParams?.url ?? NativeDefectResRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<NativeDefectResApi>>(config)
    : getResponse<ResourceList<NativeDefectResApi>, Partial<NativeDefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const nativeDefectResGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<NativeDefectRes>>,
): Promise<NativeDefectResApi> => {
  const config: QueryParams<Partial<NativeDefectRes>> = {
    method: 'get',
    url: `${queryParams?.url ?? NativeDefectResRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectResApi>(config)
    : getResponse<NativeDefectResApi, Partial<NativeDefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const nativeDefectResDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<NativeDefectRes>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<NativeDefectRes>> = {
    method: 'delete',
    url: `${queryParams?.url ?? NativeDefectResRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<NativeDefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const nativeDefectResDeleteMany = (
  data: (Partial<NativeDefectRes> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<NativeDefectRes> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<NativeDefectRes> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? NativeDefectResRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<NativeDefectRes> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const nativeDefectResUpdateOne = (
  id: number,
  data: Partial<NativeDefectRes>,
  queryParams?: QueryParams<Partial<NativeDefectRes>>,
): Promise<NativeDefectRes> => {
  const config: QueryParams<Partial<NativeDefectRes>> = {
    method: 'put',
    url: `${queryParams?.url ?? NativeDefectResRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectRes>(config)
    : getResponse<NativeDefectRes, Partial<NativeDefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const nativeDefectResUpdateMany = (
  data: (Partial<NativeDefectRes> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<NativeDefectRes> & { id: number }>,
): Promise<NativeDefectRes[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<NativeDefectRes> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? NativeDefectResRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<NativeDefectRes[]>(config)
        : getResponse<
            NativeDefectRes[],
            Partial<NativeDefectRes> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const nativeDefectResCreateOne = (
  data: Partial<NativeDefectRes>,
  queryParams?: QueryParams<Partial<NativeDefectRes>>,
): Promise<NativeDefectRes> => {
  const config: QueryParams<Partial<NativeDefectRes>> = {
    method: 'post',
    url: queryParams?.url ?? NativeDefectResRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectRes>(config)
    : getResponse<NativeDefectRes, Partial<NativeDefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const nativeDefectResCreateMany = (
  data: Partial<NativeDefectRes>[],
  queryParams?: QueryParamsWithList<Partial<NativeDefectRes>>,
): Promise<NativeDefectRes[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<NativeDefectRes>> = {
        method: 'post',
        url: queryParams?.url ?? NativeDefectResRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<NativeDefectRes[]>(config)
        : getResponse<NativeDefectRes[], Partial<NativeDefectRes>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
