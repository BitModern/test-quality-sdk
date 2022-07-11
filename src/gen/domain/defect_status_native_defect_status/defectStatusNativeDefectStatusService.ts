/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
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
): Promise<DefectStatusNativeDefectStatus> => {
  const config: QueryParams<DefectStatusNativeDefectStatus> = {
    method: 'put',
    url: `/defect_status_native_defect_status/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatusNativeDefectStatus>(config)
    : getResponse<DefectStatusNativeDefectStatus>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectStatusNativeDefectStatusCreateOne = (
  data: Partial<DefectStatusNativeDefectStatus>,
  queryParams?: QueryParams<DefectStatusNativeDefectStatus>
): Promise<DefectStatusNativeDefectStatus> => {
  const config: QueryParams<DefectStatusNativeDefectStatus> = {
    method: 'post',
    url: queryParams?.url || `/defect_status_native_defect_status`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatusNativeDefectStatus>(config)
    : getResponse<DefectStatusNativeDefectStatus>(
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
