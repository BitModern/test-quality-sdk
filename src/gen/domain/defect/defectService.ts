/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { DefectRoute } from '../../routes/Routes';
import { Defect } from './Defect';
import { DefectApi } from './DefectApi';

export const defectGetMany = (
  queryParams?: QueryParams<Defect>,
): Promise<ResourceList<DefectApi>> => {
  const config: QueryParams<Defect> = {
    method: 'get',
    url: queryParams?.url || DefectRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectApi>>(config)
    : getResponse<ResourceList<DefectApi>, Defect>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const defectGetOne = (
  id: number,
  queryParams?: QueryParams<Defect>,
): Promise<DefectApi> => {
  const config: QueryParams<Defect> = {
    method: 'get',
    url: `${queryParams?.url || DefectRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectApi>(config)
    : getResponse<DefectApi, Defect>(queryParams?.api || _client?.api, config);
};

export const defectDeleteOne = (
  id: number,
  queryParams?: QueryParams<Defect>,
): Promise<MessageResponse> => {
  const config: QueryParams<Defect> = {
    method: 'delete',
    url: `${queryParams?.url || DefectRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Defect>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const defectUpdateOne = (
  id: number,
  data: Partial<Defect>,
  queryParams?: QueryParams<Defect>,
): Promise<Defect> => {
  const config: QueryParams<Defect> = {
    method: 'put',
    url: `${queryParams?.url || DefectRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Defect>(config)
    : getResponse<Defect>(queryParams?.api || _client?.api, config);
};

export const defectCreateOne = (
  data: Partial<Defect>,
  queryParams?: QueryParams<Defect>,
): Promise<Defect> => {
  const config: QueryParams<Defect> = {
    method: 'post',
    url: queryParams?.url || DefectRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Defect>(config)
    : getResponse<Defect>(queryParams?.api || _client?.api, config);
};

export const defectCreateMany = (
  data: Partial<Defect>[],
  queryParams?: QueryParamsWithList<Defect>,
): Promise<Defect[]> => {
  const config: QueryParamsWithList<Defect> = {
    method: 'post',
    url: queryParams?.url || DefectRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Defect[]>(config)
    : getResponse<Defect[], Defect>(queryParams?.api || _client?.api, config);
};
