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
import { TestQualityTypeRoute } from '../../routes/Routes';
import type { TestQualityType } from './TestQualityType';
import type { TestQualityTypeApi } from './TestQualityTypeApi';

export const testQualityTypeGetMany = (
  queryParams?: QueryParams<Partial<TestQualityType>>,
): Promise<ResourceList<TestQualityTypeApi>> => {
  const config: QueryParams<Partial<TestQualityType>> = {
    method: 'get',
    url: queryParams?.url ?? TestQualityTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<TestQualityTypeApi>>(config)
    : getResponse<ResourceList<TestQualityTypeApi>, Partial<TestQualityType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testQualityTypeGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<TestQualityType>>,
): Promise<TestQualityTypeApi> => {
  const config: QueryParams<Partial<TestQualityType>> = {
    method: 'get',
    url: `${queryParams?.url ?? TestQualityTypeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityTypeApi>(config)
    : getResponse<TestQualityTypeApi, Partial<TestQualityType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testQualityTypeDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<TestQualityType>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<TestQualityType>> = {
    method: 'delete',
    url: `${queryParams?.url ?? TestQualityTypeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<TestQualityType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testQualityTypeDeleteMany = (
  data: (Partial<TestQualityType> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<TestQualityType> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<TestQualityType> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? TestQualityTypeRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<TestQualityType> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const testQualityTypeUpdateOne = (
  id: number,
  data: Partial<TestQualityType>,
  queryParams?: QueryParams<Partial<TestQualityType>>,
): Promise<TestQualityType> => {
  const config: QueryParams<Partial<TestQualityType>> = {
    method: 'put',
    url: `${queryParams?.url ?? TestQualityTypeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityType>(config)
    : getResponse<TestQualityType, Partial<TestQualityType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testQualityTypeUpdateMany = (
  data: (Partial<TestQualityType> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<TestQualityType> & { id: number }>,
): Promise<TestQualityType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<TestQualityType> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? TestQualityTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<TestQualityType[]>(config)
        : getResponse<
            TestQualityType[],
            Partial<TestQualityType> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const testQualityTypeCreateOne = (
  data: Partial<TestQualityType>,
  queryParams?: QueryParams<Partial<TestQualityType>>,
): Promise<TestQualityType> => {
  const config: QueryParams<Partial<TestQualityType>> = {
    method: 'post',
    url: queryParams?.url ?? TestQualityTypeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityType>(config)
    : getResponse<TestQualityType, Partial<TestQualityType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testQualityTypeCreateMany = (
  data: Partial<TestQualityType>[],
  queryParams?: QueryParamsWithList<Partial<TestQualityType>>,
): Promise<TestQualityType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<TestQualityType>> = {
        method: 'post',
        url: queryParams?.url ?? TestQualityTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<TestQualityType[]>(config)
        : getResponse<TestQualityType[], Partial<TestQualityType>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
