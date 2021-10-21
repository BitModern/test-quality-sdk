/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { SuiteRoute, TestRoute } from '../../routes/Routes';
import { Test } from '../test/Test';
import { Suite } from '../suite/Suite';
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
): Promise<Suite> => {
  const config: QueryParams<SuiteTest> = {
    method: 'put',
    url: `/suite_test/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<Suite, Partial<SuiteTest>>(
        queryParams?.api || _client?.api,
        config
      );
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

/**
 * suiteAttachManyTest
 * This will remove any associations not in the list.
 * @param suiteId
 * @param list of children to associate
 * @param queryParams
 */
export const suiteAttachManyTest = (
  suiteId: number,
  list: Partial<Test>[],
  queryParams?: QueryParams<Suite>
): Promise<Suite> => {
  const config: QueryParams<Suite & { test: Partial<Test>[] }> = {
    method: 'put',
    url: `${SuiteRoute()}/${suiteId}`,
    params: queryParams?.params,
    data: {
      test: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<Suite>(queryParams?.api || _client?.api, config);
};

/**
 * testAttachManySuite
 * This will remove any associations not in the list.
 * @param testId
 * @param list of children to associate
 * @param queryParams
 */
export const testAttachManySuite = (
  testId: number,
  list: Partial<Suite>[],
  queryParams?: QueryParams<Test>
): Promise<Test> => {
  const config: QueryParams<Test & { suite: Partial<Suite>[] }> = {
    method: 'put',
    url: `${TestRoute()}/${testId}`,
    params: queryParams?.params,
    data: {
      suite: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Test>(config)
    : getResponse<Test>(queryParams?.api || _client?.api, config);
};

export const suiteAttachTest = (
  suiteId: number,
  testId: number,
  suiteTest?: Partial<SuiteTest>,
  queryParams?: QueryParams
): Promise<Suite> => {
  const config: QueryParams<{
    id: number;
    test_id: number;
    suite_test?: Partial<SuiteTest>;
  }> = {
    method: 'put',
    url: `${SuiteRoute()}/${suiteId}`,
    params: queryParams?.params,
    data: {
      id: suiteId,
      test_id: testId,
      suite_test: suiteTest,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<
        Suite,
        { id: number; test_id: number; suite_test?: Partial<SuiteTest> }
      >(queryParams?.api || _client?.api, config);
};

export const suiteCreateWithTest = (
  testId: number,
  data: Partial<Suite>,
  suiteTest?: Partial<SuiteTest>,
  queryParams?: QueryParams
): Promise<Suite> => {
  const config: QueryParams<
    Suite & { test_id: number; suite_test?: Partial<SuiteTest> }
  > = {
    method: 'post',
    url: SuiteRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      test_id: testId,
      suite_test: suiteTest,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<
        Suite,
        Suite & { test_id: number; suite_test?: Partial<SuiteTest> }
      >(queryParams?.api || _client?.api, config);
};

export const testAttachSuite = (
  testId: number,
  suiteId: number,
  suiteTest?: Partial<SuiteTest>,
  queryParams?: QueryParams
): Promise<Test> => {
  const config: QueryParams<{
    id: number;
    suite_id: number;
    suite_test?: Partial<SuiteTest>;
  }> = {
    method: 'put',
    url: `${TestRoute()}/${testId}`,
    params: queryParams?.params,
    data: {
      id: testId,
      suite_id: suiteId,
      suite_test: suiteTest,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Test>(config)
    : getResponse<
        Test,
        { id: number; suite_id: number; suite_test: Partial<SuiteTest> }
      >(queryParams?.api || _client?.api, config);
};

export const testCreateWithSuite = (
  suiteId: number,
  data: Partial<Test>,
  suiteTest?: Partial<SuiteTest>,
  queryParams?: QueryParams
): Promise<Test> => {
  const config: QueryParams<
    Test & { suite_id: number; suite_test?: Partial<SuiteTest> }
  > = {
    method: 'post',
    url: TestRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      suite_id: suiteId,
      suite_test: suiteTest,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Test>(config)
    : getResponse<
        Test,
        Test & { suite_id: number; suite_test?: Partial<SuiteTest> }
      >(queryParams?.api || _client?.api, config);
};
