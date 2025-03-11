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
import { StepRoute } from '../../routes/Routes';
import type { Step } from './Step';
import type { StepApi } from './StepApi';

export const stepGetMany = (
  queryParams?: QueryParams<Partial<Step>>,
): Promise<ResourceList<StepApi>> => {
  const config: QueryParams<Partial<Step>> = {
    method: 'get',
    url: queryParams?.url ?? StepRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<StepApi>>(config)
    : getResponse<ResourceList<StepApi>, Partial<Step>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stepGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Step>>,
): Promise<StepApi> => {
  const config: QueryParams<Partial<Step>> = {
    method: 'get',
    url: `${queryParams?.url ?? StepRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StepApi>(config)
    : getResponse<StepApi, Partial<Step>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stepDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Step>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Step>> = {
    method: 'delete',
    url: `${queryParams?.url ?? StepRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Step>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stepDeleteMany = (
  data: (Partial<Step> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Step> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Step> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? StepRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Step> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const stepUpdateOne = (
  id: number,
  data: Partial<Step>,
  queryParams?: QueryParams<Partial<Step>>,
): Promise<Step> => {
  const config: QueryParams<Partial<Step>> = {
    method: 'put',
    url: `${queryParams?.url ?? StepRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Step>(config)
    : getResponse<Step, Partial<Step>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stepUpdateMany = (
  data: (Partial<Step> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Step> & { id: number }>,
): Promise<Step[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Step> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? StepRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Step[]>(config)
        : getResponse<Step[], Partial<Step> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const stepCreateOne = (
  data: Partial<Step>,
  queryParams?: QueryParams<Partial<Step>>,
): Promise<Step> => {
  const config: QueryParams<Partial<Step>> = {
    method: 'post',
    url: queryParams?.url ?? StepRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Step>(config)
    : getResponse<Step, Partial<Step>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stepCreateMany = (
  data: Partial<Step>[],
  queryParams?: QueryParamsWithList<Partial<Step>>,
): Promise<Step[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Step>> = {
        method: 'post',
        url: queryParams?.url ?? StepRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Step[]>(config)
        : getResponse<Step[], Partial<Step>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
