/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { DefectResRoute, NativeDefectResRoute } from '../../routes/Routes';
import { NativeDefectRes } from '../native_defect_res/NativeDefectRes';
import { DefectRes } from '../defect_res/DefectRes';
import { DefectResNativeDefectRes } from './DefectResNativeDefectRes';
import { DefectResNativeDefectResApi } from './DefectResNativeDefectResApi';

export const defectResNativeDefectResDetach = (
  data: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams<DefectResNativeDefectRes>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<DefectResNativeDefectRes> = {
    method: 'delete',
    url: `/defect_res_native_defect_res/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DefectResNativeDefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectResNativeDefectResUpdateOne = (
  id: number,
  data: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams<DefectResNativeDefectRes>
): Promise<DefectRes> => {
  const config: QueryParams<DefectResNativeDefectRes> = {
    method: 'put',
    url: `/defect_res_native_defect_res/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRes>(config)
    : getResponse<DefectRes, Partial<DefectResNativeDefectRes>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectResNativeDefectResGetMany = (
  queryParams?: QueryParams<DefectResNativeDefectRes>
): Promise<ResourceList<DefectResNativeDefectResApi>> => {
  const config: QueryParams<DefectResNativeDefectRes> = {
    method: 'get',
    url: queryParams?.url || `/defect_res_native_defect_res`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectResNativeDefectResApi>>(
        config
      )
    : getResponse<
        ResourceList<DefectResNativeDefectResApi>,
        DefectResNativeDefectRes
      >(queryParams?.api || _client?.api, config);
};

export const defectResNativeDefectResGetOne = (
  id: number,
  queryParams?: QueryParams<DefectResNativeDefectRes>
): Promise<DefectResNativeDefectResApi> => {
  const config: QueryParams<DefectResNativeDefectRes> = {
    method: 'get',
    url: `${queryParams?.url || `/defect_res_native_defect_res/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResNativeDefectResApi>(config)
    : getResponse<DefectResNativeDefectResApi, DefectResNativeDefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};

/**
 * defectResAttachManyNativeDefectRes
 * This will remove any associations not in the list.
 * @param defectResId
 * @param list of children to associate
 * @param queryParams
 */
export const defectResAttachManyNativeDefectRes = (
  defectResId: number,
  list: Partial<NativeDefectRes>[],
  queryParams?: QueryParams<DefectRes>
): Promise<DefectRes> => {
  const config: QueryParams<
    DefectRes & { native_defect_res: Partial<NativeDefectRes>[] }
  > = {
    method: 'put',
    url: `${DefectResRoute()}/${defectResId}`,
    params: queryParams?.params,
    data: {
      native_defect_res: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRes>(config)
    : getResponse<DefectRes>(queryParams?.api || _client?.api, config);
};

/**
 * nativeDefectResAttachManyDefectRes
 * This will remove any associations not in the list.
 * @param nativeDefectResId
 * @param list of children to associate
 * @param queryParams
 */
export const nativeDefectResAttachManyDefectRes = (
  nativeDefectResId: number,
  list: Partial<DefectRes>[],
  queryParams?: QueryParams<NativeDefectRes>
): Promise<NativeDefectRes> => {
  const config: QueryParams<
    NativeDefectRes & { defect_res: Partial<DefectRes>[] }
  > = {
    method: 'put',
    url: `${NativeDefectResRoute()}/${nativeDefectResId}`,
    params: queryParams?.params,
    data: {
      defect_res: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectRes>(config)
    : getResponse<NativeDefectRes>(queryParams?.api || _client?.api, config);
};

export const defectResAttachNativeDefectRes = (
  defectResId: number,
  nativeDefectResId: number,
  defectResNativeDefectRes?: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams
): Promise<DefectRes> => {
  const config: QueryParams<{
    id: number;
    native_defect_res_id: number;
    defect_res_native_defect_res?: Partial<DefectResNativeDefectRes>;
  }> = {
    method: 'put',
    url: `${DefectResRoute()}/${defectResId}`,
    params: queryParams?.params,
    data: {
      id: defectResId,
      native_defect_res_id: nativeDefectResId,
      defect_res_native_defect_res: defectResNativeDefectRes,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRes>(config)
    : getResponse<
        DefectRes,
        {
          id: number;
          native_defect_res_id: number;
          defect_res_native_defect_res?: Partial<DefectResNativeDefectRes>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const defectResCreateWithNativeDefectRes = (
  nativeDefectResId: number,
  data: Partial<DefectRes>,
  defectResNativeDefectRes?: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams
): Promise<DefectRes> => {
  const config: QueryParams<
    DefectRes & {
      native_defect_res_id: number;
      defect_res_native_defect_res?: Partial<DefectResNativeDefectRes>;
    }
  > = {
    method: 'post',
    url: DefectResRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      native_defect_res_id: nativeDefectResId,
      defect_res_native_defect_res: defectResNativeDefectRes,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRes>(config)
    : getResponse<
        DefectRes,
        DefectRes & {
          native_defect_res_id: number;
          defect_res_native_defect_res?: Partial<DefectResNativeDefectRes>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const nativeDefectResAttachDefectRes = (
  nativeDefectResId: number,
  defectResId: number,
  defectResNativeDefectRes?: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams
): Promise<NativeDefectRes> => {
  const config: QueryParams<{
    id: number;
    defect_res_id: number;
    defect_res_native_defect_res?: Partial<DefectResNativeDefectRes>;
  }> = {
    method: 'put',
    url: `${NativeDefectResRoute()}/${nativeDefectResId}`,
    params: queryParams?.params,
    data: {
      id: nativeDefectResId,
      defect_res_id: defectResId,
      defect_res_native_defect_res: defectResNativeDefectRes,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectRes>(config)
    : getResponse<
        NativeDefectRes,
        {
          id: number;
          defect_res_id: number;
          defect_res_native_defect_res: Partial<DefectResNativeDefectRes>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const nativeDefectResCreateWithDefectRes = (
  defectResId: number,
  data: Partial<NativeDefectRes>,
  defectResNativeDefectRes?: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams
): Promise<NativeDefectRes> => {
  const config: QueryParams<
    NativeDefectRes & {
      defect_res_id: number;
      defect_res_native_defect_res?: Partial<DefectResNativeDefectRes>;
    }
  > = {
    method: 'post',
    url: NativeDefectResRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      defect_res_id: defectResId,
      defect_res_native_defect_res: defectResNativeDefectRes,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectRes>(config)
    : getResponse<
        NativeDefectRes,
        NativeDefectRes & {
          defect_res_id: number;
          defect_res_native_defect_res?: Partial<DefectResNativeDefectRes>;
        }
      >(queryParams?.api || _client?.api, config);
};
