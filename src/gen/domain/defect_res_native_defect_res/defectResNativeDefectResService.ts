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
import type { DefectResNativeDefectRes } from './DefectResNativeDefectRes';
import type { DefectResNativeDefectResApi } from './DefectResNativeDefectResApi';

export const defectResNativeDefectResDetach = (
  data: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams<Partial<DefectResNativeDefectRes>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<DefectResNativeDefectRes>> = {
    method: 'delete',
    url: `/defect_res_native_defect_res/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<DefectResNativeDefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResNativeDefectResDeleteMany = (
  data: (Partial<DefectResNativeDefectRes> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<DefectResNativeDefectRes & { id: number }>
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<DefectResNativeDefectRes> & { id: number }
      > = {
        method: 'post',
        url: `/defect_res_native_defect_res/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<DefectResNativeDefectRes> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const defectResNativeDefectResUpdateOne = (
  id: number,
  data: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams<Partial<DefectResNativeDefectRes>>,
): Promise<DefectResNativeDefectRes> => {
  const config: QueryParams<Partial<DefectResNativeDefectRes>> = {
    method: 'put',
    url: `/defect_res_native_defect_res/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResNativeDefectRes>(config)
    : getResponse<DefectResNativeDefectRes, Partial<DefectResNativeDefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResNativeDefectResUpdateMany = (
  data: (Partial<DefectResNativeDefectRes> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<DefectResNativeDefectRes> & { id: number }
  >,
): Promise<DefectResNativeDefectRes[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<DefectResNativeDefectRes> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/defect_res_native_defect_res`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectResNativeDefectRes[]>(config)
        : getResponse<
            DefectResNativeDefectRes[],
            Partial<DefectResNativeDefectRes> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const defectResNativeDefectResCreateOne = (
  data: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams<Partial<DefectResNativeDefectRes>>,
): Promise<DefectResNativeDefectRes> => {
  const config: QueryParams<Partial<DefectResNativeDefectRes>> = {
    method: 'post',
    url: queryParams?.url ?? `/defect_res_native_defect_res`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResNativeDefectRes>(config)
    : getResponse<DefectResNativeDefectRes, Partial<DefectResNativeDefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResNativeDefectResCreateMany = (
  data: Partial<DefectResNativeDefectRes>[],
  queryParams?: QueryParamsWithList<Partial<DefectResNativeDefectRes>>,
): Promise<DefectResNativeDefectRes[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<DefectResNativeDefectRes>> = {
        method: 'post',
        url: queryParams?.url ?? `/defect_res_native_defect_res`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectResNativeDefectRes[]>(config)
        : getResponse<
            DefectResNativeDefectRes[],
            Partial<DefectResNativeDefectRes>
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const defectResNativeDefectResGetMany = (
  queryParams?: QueryParams<Partial<DefectResNativeDefectRes>>,
): Promise<ResourceList<DefectResNativeDefectResApi>> => {
  const config: QueryParams<Partial<DefectResNativeDefectRes>> = {
    method: 'get',
    url: queryParams?.url ?? `/defect_res_native_defect_res`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectResNativeDefectResApi>>(
        config,
      )
    : getResponse<
        ResourceList<DefectResNativeDefectResApi>,
        Partial<DefectResNativeDefectRes>
      >(queryParams?.api ?? _client?.api, config);
};

export const defectResNativeDefectResGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<DefectResNativeDefectRes>>,
): Promise<DefectResNativeDefectResApi> => {
  const config: QueryParams<Partial<DefectResNativeDefectRes>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/defect_res_native_defect_res/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResNativeDefectResApi>(config)
    : getResponse<
        DefectResNativeDefectResApi,
        Partial<DefectResNativeDefectRes>
      >(queryParams?.api ?? _client?.api, config);
};
