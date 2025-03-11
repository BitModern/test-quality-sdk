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
import { CaseTypeRoute } from '../../routes/Routes';
import type { CaseType } from './CaseType';
import type { CaseTypeApi } from './CaseTypeApi';

export const caseTypeGetMany = (
  queryParams?: QueryParams<Partial<CaseType>>,
): Promise<ResourceList<CaseTypeApi>> => {
  const config: QueryParams<Partial<CaseType>> = {
    method: 'get',
    url: queryParams?.url ?? CaseTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CaseTypeApi>>(config)
    : getResponse<ResourceList<CaseTypeApi>, Partial<CaseType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<CaseType>>,
): Promise<CaseTypeApi> => {
  const config: QueryParams<Partial<CaseType>> = {
    method: 'get',
    url: `${queryParams?.url ?? CaseTypeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeApi>(config)
    : getResponse<CaseTypeApi, Partial<CaseType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<CaseType>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<CaseType>> = {
    method: 'delete',
    url: `${queryParams?.url ?? CaseTypeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<CaseType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeDeleteMany = (
  data: (Partial<CaseType> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CaseType> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CaseType> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? CaseTypeRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<CaseType> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const caseTypeUpdateOne = (
  id: number,
  data: Partial<CaseType>,
  queryParams?: QueryParams<Partial<CaseType>>,
): Promise<CaseType> => {
  const config: QueryParams<Partial<CaseType>> = {
    method: 'put',
    url: `${queryParams?.url ?? CaseTypeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseType>(config)
    : getResponse<CaseType, Partial<CaseType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeUpdateMany = (
  data: (Partial<CaseType> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CaseType> & { id: number }>,
): Promise<CaseType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CaseType> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? CaseTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CaseType[]>(config)
        : getResponse<CaseType[], Partial<CaseType> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const caseTypeCreateOne = (
  data: Partial<CaseType>,
  queryParams?: QueryParams<Partial<CaseType>>,
): Promise<CaseType> => {
  const config: QueryParams<Partial<CaseType>> = {
    method: 'post',
    url: queryParams?.url ?? CaseTypeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseType>(config)
    : getResponse<CaseType, Partial<CaseType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeCreateMany = (
  data: Partial<CaseType>[],
  queryParams?: QueryParamsWithList<Partial<CaseType>>,
): Promise<CaseType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CaseType>> = {
        method: 'post',
        url: queryParams?.url ?? CaseTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CaseType[]>(config)
        : getResponse<CaseType[], Partial<CaseType>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
