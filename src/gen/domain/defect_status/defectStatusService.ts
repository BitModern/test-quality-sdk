/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { DefectStatusRoute } from '../../routes/Routes';
import { DefectStatus } from './DefectStatus';
import { DefectStatusApi } from './DefectStatusApi';

export const defectStatusGetMany = (
  queryParams?: QueryParams<DefectStatus>
): Promise<ResourceList<DefectStatusApi>> => {
  const config: QueryParams<DefectStatus> = {
    method: 'get',
    url: queryParams?.url || DefectStatusRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectStatusApi>>(config)
    : getResponse<ResourceList<DefectStatusApi>, DefectStatus>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectStatusGetOne = (
  id: number,
  queryParams?: QueryParams<DefectStatus>
): Promise<DefectStatusApi> => {
  const config: QueryParams<DefectStatus> = {
    method: 'get',
    url: `${queryParams?.url || DefectStatusRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatusApi>(config)
    : getResponse<DefectStatusApi, DefectStatus>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectStatusDeleteOne = (
  id: number,
  queryParams?: QueryParams<DefectStatus>
): Promise<MessageResponse> => {
  const config: QueryParams<DefectStatus> = {
    method: 'delete',
    url: `${queryParams?.url || DefectStatusRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DefectStatus>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectStatusUpdateOne = (
  id: number,
  data: Partial<DefectStatus>,
  queryParams?: QueryParams<DefectStatus>
): Promise<DefectStatus> => {
  const config: QueryParams<DefectStatus> = {
    method: 'put',
    url: `${queryParams?.url || DefectStatusRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatus>(config)
    : getResponse<DefectStatus>(queryParams?.api || _client?.api, config);
};

export const defectStatusCreateOne = (
  data: Partial<DefectStatus>,
  queryParams?: QueryParams<DefectStatus>
): Promise<DefectStatus> => {
  const config: QueryParams<DefectStatus> = {
    method: 'post',
    url: queryParams?.url || DefectStatusRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatus>(config)
    : getResponse<DefectStatus>(queryParams?.api || _client?.api, config);
};
