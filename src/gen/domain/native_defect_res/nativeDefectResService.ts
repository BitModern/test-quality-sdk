/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { NativeDefectResRoute } from '../../routes/Routes';
import { NativeDefectRes } from './NativeDefectRes';
import { NativeDefectResApi } from './NativeDefectResApi';

export const nativeDefectResGetMany = (
  queryParams?: QueryParams<NativeDefectRes>
): Promise<ResourceList<NativeDefectResApi>> => {
  const config: QueryParams<NativeDefectRes> = {
    method: 'get',
    url: queryParams?.url || NativeDefectResRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<NativeDefectResApi>>(config)
    : getResponse<ResourceList<NativeDefectResApi>, NativeDefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};

export const nativeDefectResGetOne = (
  id: number,
  queryParams?: QueryParams<NativeDefectRes>
): Promise<NativeDefectResApi> => {
  const config: QueryParams<NativeDefectRes> = {
    method: 'get',
    url: `${queryParams?.url || NativeDefectResRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectResApi>(config)
    : getResponse<NativeDefectResApi, NativeDefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};

export const nativeDefectResDeleteOne = (
  id: number,
  queryParams?: QueryParams<NativeDefectRes>
): Promise<MessageResponse> => {
  const config: QueryParams<NativeDefectRes> = {
    method: 'delete',
    url: `${queryParams?.url || NativeDefectResRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, NativeDefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};

export const nativeDefectResUpdateOne = (
  id: number,
  data: Partial<NativeDefectRes>,
  queryParams?: QueryParams<NativeDefectRes>
): Promise<NativeDefectRes> => {
  const config: QueryParams<NativeDefectRes> = {
    method: 'put',
    url: `${queryParams?.url || NativeDefectResRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectRes>(config)
    : getResponse<NativeDefectRes>(queryParams?.api || _client?.api, config);
};

export const nativeDefectResCreateOne = (
  data: Partial<NativeDefectRes>,
  queryParams?: QueryParams<NativeDefectRes>
): Promise<NativeDefectRes> => {
  const config: QueryParams<NativeDefectRes> = {
    method: 'post',
    url: queryParams?.url || NativeDefectResRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectRes>(config)
    : getResponse<NativeDefectRes>(queryParams?.api || _client?.api, config);
};

export const nativeDefectResCreateMany = (
  data: Partial<NativeDefectRes>[],
  queryParams?: QueryParamsWithList<NativeDefectRes>
): Promise<NativeDefectRes[]> => {
  const config: QueryParamsWithList<NativeDefectRes> = {
    method: 'post',
    url: queryParams?.url || NativeDefectResRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectRes[]>(config)
    : getResponse<NativeDefectRes[], NativeDefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};
