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
import { DefectRoute } from '../../routes/Routes';
import type { Defect } from './Defect';
import type { DefectApi } from './DefectApi';

export const defectGetMany = (
  queryParams?: QueryParams<Partial<Defect>>,
): Promise<ResourceList<DefectApi>> => {
  const config: QueryParams<Partial<Defect>> = {
    method: 'get',
    url: queryParams?.url ?? DefectRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectApi>>(config)
    : getResponse<ResourceList<DefectApi>, Partial<Defect>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Defect>>,
): Promise<DefectApi> => {
  const config: QueryParams<Partial<Defect>> = {
    method: 'get',
    url: `${queryParams?.url ?? DefectRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectApi>(config)
    : getResponse<DefectApi, Partial<Defect>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Defect>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Defect>> = {
    method: 'delete',
    url: `${queryParams?.url ?? DefectRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Defect>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectDeleteMany = (
  data: (Partial<Defect> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Defect> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Defect> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? DefectRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Defect> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectUpdateOne = (
  id: number,
  data: Partial<Defect>,
  queryParams?: QueryParams<Partial<Defect>>,
): Promise<Defect> => {
  const config: QueryParams<Partial<Defect>> = {
    method: 'put',
    url: `${queryParams?.url ?? DefectRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Defect>(config)
    : getResponse<Defect, Partial<Defect>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectUpdateMany = (
  data: (Partial<Defect> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Defect> & { id: number }>,
): Promise<Defect[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Defect> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? DefectRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Defect[]>(config)
        : getResponse<Defect[], Partial<Defect> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectCreateOne = (
  data: Partial<Defect>,
  queryParams?: QueryParams<Partial<Defect>>,
): Promise<Defect> => {
  const config: QueryParams<Partial<Defect>> = {
    method: 'post',
    url: queryParams?.url ?? DefectRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Defect>(config)
    : getResponse<Defect, Partial<Defect>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectCreateMany = (
  data: Partial<Defect>[],
  queryParams?: QueryParamsWithList<Partial<Defect>>,
): Promise<Defect[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Defect>> = {
        method: 'post',
        url: queryParams?.url ?? DefectRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Defect[]>(config)
        : getResponse<Defect[], Partial<Defect>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
