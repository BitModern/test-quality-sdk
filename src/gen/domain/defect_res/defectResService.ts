/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { DefectResRoute } from '../../routes/Routes';
import { DefectRes } from './DefectRes';
import { DefectResApi } from './DefectResApi';

export const defectResGetMany = (
  queryParams?: QueryParams<DefectRes>
): Promise<ResourceList<DefectResApi>> => {
  const config: QueryParams<DefectRes> = {
    method: 'get',
    url: queryParams?.url || DefectResRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectResApi>>(config)
    : getResponse<ResourceList<DefectResApi>, DefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectResGetOne = (
  id: number,
  queryParams?: QueryParams<DefectRes>
): Promise<DefectResApi> => {
  const config: QueryParams<DefectRes> = {
    method: 'get',
    url: `${queryParams?.url || DefectResRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResApi>(config)
    : getResponse<DefectResApi, DefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectResDeleteOne = (
  id: number,
  queryParams?: QueryParams<DefectRes>
): Promise<MessageResponse> => {
  const config: QueryParams<DefectRes> = {
    method: 'delete',
    url: `${queryParams?.url || DefectResRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectResUpdateOne = (
  id: number,
  data: Partial<DefectRes>,
  queryParams?: QueryParams<DefectRes>
): Promise<DefectRes> => {
  const config: QueryParams<DefectRes> = {
    method: 'put',
    url: `${queryParams?.url || DefectResRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRes>(config)
    : getResponse<DefectRes>(queryParams?.api || _client?.api, config);
};

export const defectResCreateOne = (
  data: Partial<DefectRes>,
  queryParams?: QueryParams<DefectRes>
): Promise<DefectRes> => {
  const config: QueryParams<DefectRes> = {
    method: 'post',
    url: queryParams?.url || DefectResRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRes>(config)
    : getResponse<DefectRes>(queryParams?.api || _client?.api, config);
};

export const defectResCreateMany = (
  data: Partial<DefectRes>[],
  queryParams?: QueryParamsWithList<DefectRes>
): Promise<DefectRes[]> => {
  const config: QueryParamsWithList<DefectRes> = {
    method: 'post',
    url: queryParams?.url || DefectResRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectRes[]>(config)
    : getResponse<DefectRes[], DefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};
