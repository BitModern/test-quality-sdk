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
import type { CaseTypeTest } from './CaseTypeTest';
import type { CaseTypeTestApi } from './CaseTypeTestApi';

export const caseTypeTestDetach = (
  data: Partial<CaseTypeTest>,
  queryParams?: QueryParams<Partial<CaseTypeTest>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<CaseTypeTest>> = {
    method: 'delete',
    url: `/case_type_test/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<CaseTypeTest>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeTestDeleteMany = (
  data: (Partial<CaseTypeTest> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CaseTypeTest & { id: number }>>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<CaseTypeTest> & { id: number }
      > = {
        method: 'post',
        url: `/case_type_test/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<CaseTypeTest> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const caseTypeTestUpdateOne = (
  id: number,
  data: Partial<CaseTypeTest>,
  queryParams?: QueryParams<Partial<CaseTypeTest>>,
): Promise<CaseTypeTest> => {
  const config: QueryParams<Partial<CaseTypeTest>> = {
    method: 'put',
    url: `/case_type_test/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeTest>(config)
    : getResponse<CaseTypeTest, Partial<CaseTypeTest>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeTestUpdateMany = (
  data: (Partial<CaseTypeTest> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CaseTypeTest> & { id: number }>,
): Promise<CaseTypeTest[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<CaseTypeTest> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/case_type_test`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CaseTypeTest[]>(config)
        : getResponse<CaseTypeTest[], Partial<CaseTypeTest> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const caseTypeTestCreateOne = (
  data: Partial<CaseTypeTest>,
  queryParams?: QueryParams<Partial<CaseTypeTest>>,
): Promise<CaseTypeTest> => {
  const config: QueryParams<Partial<CaseTypeTest>> = {
    method: 'post',
    url: queryParams?.url ?? `/case_type_test`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeTest>(config)
    : getResponse<CaseTypeTest, Partial<CaseTypeTest>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeTestCreateMany = (
  data: Partial<CaseTypeTest>[],
  queryParams?: QueryParamsWithList<Partial<CaseTypeTest>>,
): Promise<CaseTypeTest[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CaseTypeTest>> = {
        method: 'post',
        url: queryParams?.url ?? `/case_type_test`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CaseTypeTest[]>(config)
        : getResponse<CaseTypeTest[], Partial<CaseTypeTest>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const caseTypeTestGetMany = (
  queryParams?: QueryParams<Partial<CaseTypeTest>>,
): Promise<ResourceList<CaseTypeTestApi>> => {
  const config: QueryParams<Partial<CaseTypeTest>> = {
    method: 'get',
    url: queryParams?.url ?? `/case_type_test`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CaseTypeTestApi>>(config)
    : getResponse<ResourceList<CaseTypeTestApi>, Partial<CaseTypeTest>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeTestGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<CaseTypeTest>>,
): Promise<CaseTypeTestApi> => {
  const config: QueryParams<Partial<CaseTypeTest>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/case_type_test/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeTestApi>(config)
    : getResponse<CaseTypeTestApi, Partial<CaseTypeTest>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
