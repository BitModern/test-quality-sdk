/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { SuiteTest } from './SuiteTest';
import { SuiteTestApi } from './SuiteTestApi';

export const suiteTestDetach = (
  data: Partial<SuiteTest>,
  queryParams?: QueryParams<SuiteTest>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<SuiteTest> = {
    method: 'delete',
    url: `/suite_test/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, SuiteTest>(
        queryParams?.api || _client?.api,
        config
      );
};

export const suiteTestUpdateOne = (
  id: number,
  data: Partial<SuiteTest>,
  queryParams?: QueryParams<SuiteTest>
): Promise<SuiteTest> => {
  const config: QueryParams<SuiteTest> = {
    method: 'put',
    url: `/suite_test/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SuiteTest>(config)
    : getResponse<SuiteTest>(queryParams?.api || _client?.api, config);
};

export const suiteTestCreateOne = (
  data: Partial<SuiteTest>,
  queryParams?: QueryParams<SuiteTest>
): Promise<SuiteTest> => {
  const config: QueryParams<SuiteTest> = {
    method: 'post',
    url: queryParams?.url || `/suite_test`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SuiteTest>(config)
    : getResponse<SuiteTest>(queryParams?.api || _client?.api, config);
};

export const suiteTestGetMany = (
  queryParams?: QueryParams<SuiteTest>
): Promise<ResourceList<SuiteTestApi>> => {
  const config: QueryParams<SuiteTest> = {
    method: 'get',
    url: queryParams?.url || `/suite_test`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SuiteTestApi>>(config)
    : getResponse<ResourceList<SuiteTestApi>, SuiteTest>(
        queryParams?.api || _client?.api,
        config
      );
};

export const suiteTestGetOne = (
  id: number,
  queryParams?: QueryParams<SuiteTest>
): Promise<SuiteTestApi> => {
  const config: QueryParams<SuiteTest> = {
    method: 'get',
    url: `${queryParams?.url || `/suite_test/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SuiteTestApi>(config)
    : getResponse<SuiteTestApi, SuiteTest>(
        queryParams?.api || _client?.api,
        config
      );
};
