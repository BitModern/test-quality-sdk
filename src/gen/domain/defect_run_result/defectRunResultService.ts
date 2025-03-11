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
import type { DefectRunResult } from './DefectRunResult';
import type { DefectRunResultApi } from './DefectRunResultApi';

export const defectRunResultDetach = (
  data: Partial<DefectRunResult>,
  queryParams?: QueryParams<DefectRunResult>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<DefectRunResult> = {
    method: 'delete',
    url: `/defect_run_result/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DefectRunResult>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectRunResultDeleteMany = (
  data: (Partial<DefectRunResult> & { id: number })[],
  queryParams?: QueryParamsWithList<DefectRunResult>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DefectRunResult> = {
        method: 'post',
        url: `/defect_run_result/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, DefectRunResult>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectRunResultUpdateOne = (
  id: number,
  data: Partial<DefectRunResult>,
  queryParams?: QueryParams<DefectRunResult>,
): Promise<DefectRunResult> => {
  const config: QueryParams<DefectRunResult> = {
    method: 'put',
    url: `/defect_run_result/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRunResult>(config)
    : getResponse<DefectRunResult>(queryParams?.api ?? _client?.api, config);
};

export const defectRunResultUpdateMany = (
  data: (Partial<DefectRunResult> & { id: number })[],
  queryParams?: QueryParamsWithList<DefectRunResult>,
): Promise<DefectRunResult[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DefectRunResult> = {
        method: 'post',
        url: queryParams?.url ?? `/defect_run_result`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectRunResult[]>(config)
        : getResponse<DefectRunResult[], DefectRunResult>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectRunResultCreateOne = (
  data: Partial<DefectRunResult>,
  queryParams?: QueryParams<DefectRunResult>,
): Promise<DefectRunResult> => {
  const config: QueryParams<DefectRunResult> = {
    method: 'post',
    url: queryParams?.url ?? `/defect_run_result`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRunResult>(config)
    : getResponse<DefectRunResult>(queryParams?.api ?? _client?.api, config);
};

export const defectRunResultCreateMany = (
  data: Partial<DefectRunResult>[],
  queryParams?: QueryParamsWithList<DefectRunResult>,
): Promise<DefectRunResult[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DefectRunResult> = {
        method: 'post',
        url: queryParams?.url ?? `/defect_run_result`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectRunResult[]>(config)
        : getResponse<DefectRunResult[], DefectRunResult>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectRunResultGetMany = (
  queryParams?: QueryParams<DefectRunResult>,
): Promise<ResourceList<DefectRunResultApi>> => {
  const config: QueryParams<DefectRunResult> = {
    method: 'get',
    url: queryParams?.url ?? `/defect_run_result`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectRunResultApi>>(config)
    : getResponse<ResourceList<DefectRunResultApi>, DefectRunResult>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectRunResultGetOne = (
  id: number,
  queryParams?: QueryParams<DefectRunResult>,
): Promise<DefectRunResultApi> => {
  const config: QueryParams<DefectRunResult> = {
    method: 'get',
    url: `${queryParams?.url ?? `/defect_run_result/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRunResultApi>(config)
    : getResponse<DefectRunResultApi, DefectRunResult>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
