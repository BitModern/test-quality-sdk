/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { TestQualityTypeRoute } from '../../routes/Routes';
import { TestQualityType } from './TestQualityType';
import { TestQualityTypeApi } from './TestQualityTypeApi';

export const testQualityTypeGetMany = (
  queryParams?: QueryParams<TestQualityType>,
): Promise<ResourceList<TestQualityTypeApi>> => {
  const config: QueryParams<TestQualityType> = {
    method: 'get',
    url: queryParams?.url || TestQualityTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<TestQualityTypeApi>>(config)
    : getResponse<ResourceList<TestQualityTypeApi>, TestQualityType>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const testQualityTypeGetOne = (
  id: number,
  queryParams?: QueryParams<TestQualityType>,
): Promise<TestQualityTypeApi> => {
  const config: QueryParams<TestQualityType> = {
    method: 'get',
    url: `${queryParams?.url || TestQualityTypeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityTypeApi>(config)
    : getResponse<TestQualityTypeApi, TestQualityType>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const testQualityTypeDeleteOne = (
  id: number,
  queryParams?: QueryParams<TestQualityType>,
): Promise<MessageResponse> => {
  const config: QueryParams<TestQualityType> = {
    method: 'delete',
    url: `${queryParams?.url || TestQualityTypeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, TestQualityType>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const testQualityTypeUpdateOne = (
  id: number,
  data: Partial<TestQualityType>,
  queryParams?: QueryParams<TestQualityType>,
): Promise<TestQualityType> => {
  const config: QueryParams<TestQualityType> = {
    method: 'put',
    url: `${queryParams?.url || TestQualityTypeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityType>(config)
    : getResponse<TestQualityType>(queryParams?.api || _client?.api, config);
};

export const testQualityTypeCreateOne = (
  data: Partial<TestQualityType>,
  queryParams?: QueryParams<TestQualityType>,
): Promise<TestQualityType> => {
  const config: QueryParams<TestQualityType> = {
    method: 'post',
    url: queryParams?.url || TestQualityTypeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityType>(config)
    : getResponse<TestQualityType>(queryParams?.api || _client?.api, config);
};

export const testQualityTypeCreateMany = (
  data: Partial<TestQualityType>[],
  queryParams?: QueryParamsWithList<TestQualityType>,
): Promise<TestQualityType[]> => {
  const config: QueryParamsWithList<TestQualityType> = {
    method: 'post',
    url: queryParams?.url || TestQualityTypeRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityType[]>(config)
    : getResponse<TestQualityType[], TestQualityType>(
        queryParams?.api || _client?.api,
        config,
      );
};
