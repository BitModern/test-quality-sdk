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
import type { RequirementTest } from './RequirementTest';
import type { RequirementTestApi } from './RequirementTestApi';

export const requirementTestDetach = (
  data: Partial<RequirementTest>,
  queryParams?: QueryParams<RequirementTest>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<RequirementTest> = {
    method: 'delete',
    url: `/requirement_test/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, RequirementTest>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const requirementTestDeleteMany = (
  data: (Partial<RequirementTest> & { id: number })[],
  queryParams?: QueryParamsWithList<RequirementTest>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<RequirementTest> = {
        method: 'post',
        url: `/requirement_test/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, RequirementTest>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const requirementTestUpdateOne = (
  id: number,
  data: Partial<RequirementTest>,
  queryParams?: QueryParams<RequirementTest>,
): Promise<RequirementTest> => {
  const config: QueryParams<RequirementTest> = {
    method: 'put',
    url: `/requirement_test/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementTest>(config)
    : getResponse<RequirementTest>(queryParams?.api ?? _client?.api, config);
};

export const requirementTestUpdateMany = (
  data: (Partial<RequirementTest> & { id: number })[],
  queryParams?: QueryParamsWithList<RequirementTest>,
): Promise<RequirementTest[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<RequirementTest> = {
        method: 'post',
        url: queryParams?.url ?? `/requirement_test`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<RequirementTest[]>(config)
        : getResponse<RequirementTest[], RequirementTest>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const requirementTestCreateOne = (
  data: Partial<RequirementTest>,
  queryParams?: QueryParams<RequirementTest>,
): Promise<RequirementTest> => {
  const config: QueryParams<RequirementTest> = {
    method: 'post',
    url: queryParams?.url ?? `/requirement_test`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementTest>(config)
    : getResponse<RequirementTest>(queryParams?.api ?? _client?.api, config);
};

export const requirementTestCreateMany = (
  data: Partial<RequirementTest>[],
  queryParams?: QueryParamsWithList<RequirementTest>,
): Promise<RequirementTest[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<RequirementTest> = {
        method: 'post',
        url: queryParams?.url ?? `/requirement_test`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<RequirementTest[]>(config)
        : getResponse<RequirementTest[], RequirementTest>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const requirementTestGetMany = (
  queryParams?: QueryParams<RequirementTest>,
): Promise<ResourceList<RequirementTestApi>> => {
  const config: QueryParams<RequirementTest> = {
    method: 'get',
    url: queryParams?.url ?? `/requirement_test`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RequirementTestApi>>(config)
    : getResponse<ResourceList<RequirementTestApi>, RequirementTest>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const requirementTestGetOne = (
  id: number,
  queryParams?: QueryParams<RequirementTest>,
): Promise<RequirementTestApi> => {
  const config: QueryParams<RequirementTest> = {
    method: 'get',
    url: `${queryParams?.url ?? `/requirement_test/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementTestApi>(config)
    : getResponse<RequirementTestApi, RequirementTest>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
