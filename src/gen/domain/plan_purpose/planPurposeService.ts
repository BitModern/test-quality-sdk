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
import type { PlanPurpose } from './PlanPurpose';
import type { PlanPurposeApi } from './PlanPurposeApi';

export const planPurposeDetach = (
  data: Partial<PlanPurpose>,
  queryParams?: QueryParams<PlanPurpose>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<PlanPurpose> = {
    method: 'delete',
    url: `/plan_purpose/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, PlanPurpose>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planPurposeDeleteMany = (
  data: (Partial<PlanPurpose> & { id: number })[],
  queryParams?: QueryParamsWithList<PlanPurpose>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PlanPurpose> = {
        method: 'post',
        url: `/plan_purpose/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, PlanPurpose>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planPurposeUpdateOne = (
  id: number,
  data: Partial<PlanPurpose>,
  queryParams?: QueryParams<PlanPurpose>,
): Promise<PlanPurpose> => {
  const config: QueryParams<PlanPurpose> = {
    method: 'put',
    url: `/plan_purpose/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPurpose>(config)
    : getResponse<PlanPurpose>(queryParams?.api ?? _client?.api, config);
};

export const planPurposeUpdateMany = (
  data: (Partial<PlanPurpose> & { id: number })[],
  queryParams?: QueryParamsWithList<PlanPurpose>,
): Promise<PlanPurpose[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PlanPurpose> = {
        method: 'post',
        url: queryParams?.url ?? `/plan_purpose`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PlanPurpose[]>(config)
        : getResponse<PlanPurpose[], PlanPurpose>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planPurposeCreateOne = (
  data: Partial<PlanPurpose>,
  queryParams?: QueryParams<PlanPurpose>,
): Promise<PlanPurpose> => {
  const config: QueryParams<PlanPurpose> = {
    method: 'post',
    url: queryParams?.url ?? `/plan_purpose`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPurpose>(config)
    : getResponse<PlanPurpose>(queryParams?.api ?? _client?.api, config);
};

export const planPurposeCreateMany = (
  data: Partial<PlanPurpose>[],
  queryParams?: QueryParamsWithList<PlanPurpose>,
): Promise<PlanPurpose[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<PlanPurpose> = {
        method: 'post',
        url: queryParams?.url ?? `/plan_purpose`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PlanPurpose[]>(config)
        : getResponse<PlanPurpose[], PlanPurpose>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planPurposeGetMany = (
  queryParams?: QueryParams<PlanPurpose>,
): Promise<ResourceList<PlanPurposeApi>> => {
  const config: QueryParams<PlanPurpose> = {
    method: 'get',
    url: queryParams?.url ?? `/plan_purpose`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanPurposeApi>>(config)
    : getResponse<ResourceList<PlanPurposeApi>, PlanPurpose>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planPurposeGetOne = (
  id: number,
  queryParams?: QueryParams<PlanPurpose>,
): Promise<PlanPurposeApi> => {
  const config: QueryParams<PlanPurpose> = {
    method: 'get',
    url: `${queryParams?.url ?? `/plan_purpose/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPurposeApi>(config)
    : getResponse<PlanPurposeApi, PlanPurpose>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
