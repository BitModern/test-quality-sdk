/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { chunkArray } from '../../actions/chunkArray';
import type {
  QueryParams,
  QueryParamsWithList,
} from '../../actions/QueryParams';
import type { MessageResponse } from '../../actions/MessageResponse';
import type { ResourceList } from '../../models/ResourceList';
import type { SuiteTest } from './SuiteTest';
import type { SuiteTestApi } from './SuiteTestApi';

export const suiteTestDetach = (
  data: Partial<SuiteTest>,
  queryParams?: QueryParams<SuiteTest>,
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
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const suiteTestDeleteMany = (
  data: (Partial<SuiteTest> & { id: number })[],
  queryParams?: QueryParamsWithList<SuiteTest>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<SuiteTest> = {
        method: 'post',
        url: `/suite_test/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, SuiteTest>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const suiteTestUpdateOne = (
  id: number,
  data: Partial<SuiteTest>,
  queryParams?: QueryParams<SuiteTest>,
): Promise<SuiteTest> => {
  const config: QueryParams<SuiteTest> = {
    method: 'put',
    url: `/suite_test/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SuiteTest>(config)
    : getResponse<SuiteTest>(queryParams?.api ?? _client?.api, config);
};

export const suiteTestUpdateMany = (
  data: (Partial<SuiteTest> & { id: number })[],
  queryParams?: QueryParamsWithList<SuiteTest>,
): Promise<SuiteTest[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<SuiteTest> = {
        method: 'post',
        url: queryParams?.url ?? `/suite_test`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SuiteTest[]>(config)
        : getResponse<SuiteTest[], SuiteTest>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const suiteTestCreateOne = (
  data: Partial<SuiteTest>,
  queryParams?: QueryParams<SuiteTest>,
): Promise<SuiteTest> => {
  const config: QueryParams<SuiteTest> = {
    method: 'post',
    url: queryParams?.url ?? `/suite_test`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SuiteTest>(config)
    : getResponse<SuiteTest>(queryParams?.api ?? _client?.api, config);
};

export const suiteTestCreateMany = (
  data: Partial<SuiteTest>[],
  queryParams?: QueryParamsWithList<SuiteTest>,
): Promise<SuiteTest[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<SuiteTest> = {
        method: 'post',
        url: queryParams?.url ?? `/suite_test`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SuiteTest[]>(config)
        : getResponse<SuiteTest[], SuiteTest>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const suiteTestGetMany = (
  queryParams?: QueryParams<SuiteTest>,
): Promise<ResourceList<SuiteTestApi>> => {
  const config: QueryParams<SuiteTest> = {
    method: 'get',
    url: queryParams?.url ?? `/suite_test`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SuiteTestApi>>(config)
    : getResponse<ResourceList<SuiteTestApi>, SuiteTest>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const suiteTestGetOne = (
  id: number,
  queryParams?: QueryParams<SuiteTest>,
): Promise<SuiteTestApi> => {
  const config: QueryParams<SuiteTest> = {
    method: 'get',
    url: `${queryParams?.url ?? `/suite_test/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SuiteTestApi>(config)
    : getResponse<SuiteTestApi, SuiteTest>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
