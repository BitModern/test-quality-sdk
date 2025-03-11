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
  queryParams?: QueryParams<Partial<PlanPurpose>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<PlanPurpose>> = {
    method: 'delete',
    url: `/plan_purpose/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<PlanPurpose>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planPurposeDeleteMany = (
  data: (Partial<PlanPurpose> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<PlanPurpose & { id: number }>>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PlanPurpose> & { id: number }> =
        {
          method: 'post',
          url: `/plan_purpose/delete`,
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<PlanPurpose> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planPurposeUpdateOne = (
  id: number,
  data: Partial<PlanPurpose>,
  queryParams?: QueryParams<Partial<PlanPurpose>>,
): Promise<PlanPurpose> => {
  const config: QueryParams<Partial<PlanPurpose>> = {
    method: 'put',
    url: `/plan_purpose/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPurpose>(config)
    : getResponse<PlanPurpose, Partial<PlanPurpose>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planPurposeUpdateMany = (
  data: (Partial<PlanPurpose> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<PlanPurpose> & { id: number }>,
): Promise<PlanPurpose[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PlanPurpose> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? `/plan_purpose`,
          params: queryParams?.params,
          list: chunk,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PlanPurpose[]>(config)
        : getResponse<PlanPurpose[], Partial<PlanPurpose> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planPurposeCreateOne = (
  data: Partial<PlanPurpose>,
  queryParams?: QueryParams<Partial<PlanPurpose>>,
): Promise<PlanPurpose> => {
  const config: QueryParams<Partial<PlanPurpose>> = {
    method: 'post',
    url: queryParams?.url ?? `/plan_purpose`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPurpose>(config)
    : getResponse<PlanPurpose, Partial<PlanPurpose>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planPurposeCreateMany = (
  data: Partial<PlanPurpose>[],
  queryParams?: QueryParamsWithList<Partial<PlanPurpose>>,
): Promise<PlanPurpose[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<PlanPurpose>> = {
        method: 'post',
        url: queryParams?.url ?? `/plan_purpose`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<PlanPurpose[]>(config)
        : getResponse<PlanPurpose[], Partial<PlanPurpose>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const planPurposeGetMany = (
  queryParams?: QueryParams<Partial<PlanPurpose>>,
): Promise<ResourceList<PlanPurposeApi>> => {
  const config: QueryParams<Partial<PlanPurpose>> = {
    method: 'get',
    url: queryParams?.url ?? `/plan_purpose`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanPurposeApi>>(config)
    : getResponse<ResourceList<PlanPurposeApi>, Partial<PlanPurpose>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const planPurposeGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<PlanPurpose>>,
): Promise<PlanPurposeApi> => {
  const config: QueryParams<Partial<PlanPurpose>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/plan_purpose/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanPurposeApi>(config)
    : getResponse<PlanPurposeApi, Partial<PlanPurpose>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
