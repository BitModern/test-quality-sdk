/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import {
  DefectStatusRoute,
  NativeDefectStatusRoute,
} from '../../routes/Routes';
import { NativeDefectStatus } from '../native_defect_status/NativeDefectStatus';
import { DefectStatus } from '../defect_status/DefectStatus';
import { DefectStatusNativeDefectStatus } from './DefectStatusNativeDefectStatus';
import { DefectStatusNativeDefectStatusApi } from './DefectStatusNativeDefectStatusApi';

export const defectStatusNativeDefectStatusDetach = (
  data: Partial<DefectStatusNativeDefectStatus>,
  queryParams?: QueryParams<DefectStatusNativeDefectStatus>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<DefectStatusNativeDefectStatus> = {
    method: 'delete',
    url: `/defect_status_native_defect_status/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DefectStatusNativeDefectStatus>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectStatusNativeDefectStatusUpdateOne = (
  id: number,
  data: Partial<DefectStatusNativeDefectStatus>,
  queryParams?: QueryParams<DefectStatusNativeDefectStatus>
): Promise<DefectStatus> => {
  const config: QueryParams<DefectStatusNativeDefectStatus> = {
    method: 'put',
    url: `/defect_status_native_defect_status/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatus>(config)
    : getResponse<DefectStatus, Partial<DefectStatusNativeDefectStatus>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectStatusNativeDefectStatusGetMany = (
  queryParams?: QueryParams<DefectStatusNativeDefectStatus>
): Promise<ResourceList<DefectStatusNativeDefectStatusApi>> => {
  const config: QueryParams<DefectStatusNativeDefectStatus> = {
    method: 'get',
    url: queryParams?.url || `/defect_status_native_defect_status`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<
        ResourceList<DefectStatusNativeDefectStatusApi>
      >(config)
    : getResponse<
        ResourceList<DefectStatusNativeDefectStatusApi>,
        DefectStatusNativeDefectStatus
      >(queryParams?.api || _client?.api, config);
};

export const defectStatusNativeDefectStatusGetOne = (
  id: number,
  queryParams?: QueryParams<DefectStatusNativeDefectStatus>
): Promise<DefectStatusNativeDefectStatusApi> => {
  const config: QueryParams<DefectStatusNativeDefectStatus> = {
    method: 'get',
    url: `${queryParams?.url || `/defect_status_native_defect_status/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatusNativeDefectStatusApi>(config)
    : getResponse<
        DefectStatusNativeDefectStatusApi,
        DefectStatusNativeDefectStatus
      >(queryParams?.api || _client?.api, config);
};

/**
 * defectStatusAttachManyNativeDefectStatus
 * This will remove any associations not in the list.
 * @param defectStatusId
 * @param list of children to associate
 * @param queryParams
 */
export const defectStatusAttachManyNativeDefectStatus = (
  defectStatusId: number,
  list: Partial<NativeDefectStatus>[],
  queryParams?: QueryParams<DefectStatus>
): Promise<DefectStatus> => {
  const config: QueryParams<
    DefectStatus & { native_defect_status: Partial<NativeDefectStatus>[] }
  > = {
    method: 'put',
    url: `${DefectStatusRoute()}/${defectStatusId}`,
    params: queryParams?.params,
    data: {
      native_defect_status: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatus>(config)
    : getResponse<DefectStatus>(queryParams?.api || _client?.api, config);
};

/**
 * nativeDefectStatusAttachManyDefectStatus
 * This will remove any associations not in the list.
 * @param nativeDefectStatusId
 * @param list of children to associate
 * @param queryParams
 */
export const nativeDefectStatusAttachManyDefectStatus = (
  nativeDefectStatusId: number,
  list: Partial<DefectStatus>[],
  queryParams?: QueryParams<NativeDefectStatus>
): Promise<NativeDefectStatus> => {
  const config: QueryParams<
    NativeDefectStatus & { defect_status: Partial<DefectStatus>[] }
  > = {
    method: 'put',
    url: `${NativeDefectStatusRoute()}/${nativeDefectStatusId}`,
    params: queryParams?.params,
    data: {
      defect_status: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectStatus>(config)
    : getResponse<NativeDefectStatus>(queryParams?.api || _client?.api, config);
};

export const defectStatusAttachNativeDefectStatus = (
  defectStatusId: number,
  nativeDefectStatusId: number,
  defectStatusNativeDefectStatus?: Partial<DefectStatusNativeDefectStatus>,
  queryParams?: QueryParams
): Promise<DefectStatus> => {
  const config: QueryParams<{
    id: number;
    native_defect_status_id: number;
    defect_status_native_defect_status?: Partial<DefectStatusNativeDefectStatus>;
  }> = {
    method: 'post',
    url: DefectStatusRoute(),
    params: queryParams?.params,
    data: {
      id: defectStatusId,
      native_defect_status_id: nativeDefectStatusId,
      defect_status_native_defect_status: defectStatusNativeDefectStatus,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatus>(config)
    : getResponse<
        DefectStatus,
        {
          id: number;
          native_defect_status_id: number;
          defect_status_native_defect_status?: Partial<DefectStatusNativeDefectStatus>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const defectStatusCreateWithNativeDefectStatus = (
  nativeDefectStatusId: number,
  data: Partial<DefectStatus>,
  defectStatusNativeDefectStatus?: Partial<DefectStatusNativeDefectStatus>,
  queryParams?: QueryParams
): Promise<DefectStatus> => {
  const config: QueryParams<
    DefectStatus & {
      native_defect_status_id: number;
      defect_status_native_defect_status?: Partial<DefectStatusNativeDefectStatus>;
    }
  > = {
    method: 'post',
    url: DefectStatusRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      native_defect_status_id: nativeDefectStatusId,
      defect_status_native_defect_status: defectStatusNativeDefectStatus,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatus>(config)
    : getResponse<
        DefectStatus,
        DefectStatus & {
          native_defect_status_id: number;
          defect_status_native_defect_status?: Partial<DefectStatusNativeDefectStatus>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const nativeDefectStatusAttachDefectStatus = (
  nativeDefectStatusId: number,
  defectStatusId: number,
  defectStatusNativeDefectStatus?: Partial<DefectStatusNativeDefectStatus>,
  queryParams?: QueryParams
): Promise<NativeDefectStatus> => {
  const config: QueryParams<{
    id: number;
    defect_status_id: number;
    defect_status_native_defect_status?: Partial<DefectStatusNativeDefectStatus>;
  }> = {
    method: 'post',
    url: NativeDefectStatusRoute(),
    params: queryParams?.params,
    data: {
      id: nativeDefectStatusId,
      defect_status_id: defectStatusId,
      defect_status_native_defect_status: defectStatusNativeDefectStatus,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectStatus>(config)
    : getResponse<
        NativeDefectStatus,
        {
          id: number;
          defect_status_id: number;
          defect_status_native_defect_status: Partial<DefectStatusNativeDefectStatus>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const nativeDefectStatusCreateWithDefectStatus = (
  defectStatusId: number,
  data: Partial<NativeDefectStatus>,
  defectStatusNativeDefectStatus?: Partial<DefectStatusNativeDefectStatus>,
  queryParams?: QueryParams
): Promise<NativeDefectStatus> => {
  const config: QueryParams<
    NativeDefectStatus & {
      defect_status_id: number;
      defect_status_native_defect_status?: Partial<DefectStatusNativeDefectStatus>;
    }
  > = {
    method: 'post',
    url: NativeDefectStatusRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      defect_status_id: defectStatusId,
      defect_status_native_defect_status: defectStatusNativeDefectStatus,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectStatus>(config)
    : getResponse<
        NativeDefectStatus,
        NativeDefectStatus & {
          defect_status_id: number;
          defect_status_native_defect_status?: Partial<DefectStatusNativeDefectStatus>;
        }
      >(queryParams?.api || _client?.api, config);
};
