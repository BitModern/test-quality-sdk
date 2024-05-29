/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type {
  QueryParams,
  QueryParamsWithList,
} from '../../actions/QueryParams';
import type { MessageResponse } from '../../actions/MessageResponse';
import type { ResourceList } from '../../models/ResourceList';
import { TestPlanRoute } from '../../routes/Routes';
import type { TestPlan } from './TestPlan';
import type { TestPlanApi } from './TestPlanApi';

export const testPlanGetMany = (
  queryParams?: QueryParams<TestPlan>,
): Promise<ResourceList<TestPlanApi>> => {
  const config: QueryParams<TestPlan> = {
    method: 'get',
    url: queryParams?.url ?? TestPlanRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<TestPlanApi>>(config)
    : getResponse<ResourceList<TestPlanApi>, TestPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testPlanGetOne = (
  id: number,
  queryParams?: QueryParams<TestPlan>,
): Promise<TestPlanApi> => {
  const config: QueryParams<TestPlan> = {
    method: 'get',
    url: `${queryParams?.url ?? TestPlanRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestPlanApi>(config)
    : getResponse<TestPlanApi, TestPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testPlanDeleteOne = (
  id: number,
  queryParams?: QueryParams<TestPlan>,
): Promise<MessageResponse> => {
  const config: QueryParams<TestPlan> = {
    method: 'delete',
    url: `${queryParams?.url ?? TestPlanRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, TestPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const testPlanUpdateOne = (
  id: number,
  data: Partial<TestPlan>,
  queryParams?: QueryParams<TestPlan>,
): Promise<TestPlan> => {
  const config: QueryParams<TestPlan> = {
    method: 'put',
    url: `${queryParams?.url ?? TestPlanRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestPlan>(config)
    : getResponse<TestPlan>(queryParams?.api ?? _client?.api, config);
};

export const testPlanCreateOne = (
  data: Partial<TestPlan>,
  queryParams?: QueryParams<TestPlan>,
): Promise<TestPlan> => {
  const config: QueryParams<TestPlan> = {
    method: 'post',
    url: queryParams?.url ?? TestPlanRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestPlan>(config)
    : getResponse<TestPlan>(queryParams?.api ?? _client?.api, config);
};

export const testPlanCreateMany = (
  data: Partial<TestPlan>[],
  queryParams?: QueryParamsWithList<TestPlan>,
): Promise<TestPlan[]> => {
  const config: QueryParamsWithList<TestPlan> = {
    method: 'post',
    url: queryParams?.url ?? TestPlanRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestPlan[]>(config)
    : getResponse<TestPlan[], TestPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
