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
import { SharedStepRoute } from '../../routes/Routes';
import type { SharedStep } from './SharedStep';
import type { SharedStepApi } from './SharedStepApi';

export const sharedStepGetMany = (
  queryParams?: QueryParams<Partial<SharedStep>>,
): Promise<ResourceList<SharedStepApi>> => {
  const config: QueryParams<Partial<SharedStep>> = {
    method: 'get',
    url: queryParams?.url ?? SharedStepRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SharedStepApi>>(config)
    : getResponse<ResourceList<SharedStepApi>, Partial<SharedStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedStepGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<SharedStep>>,
): Promise<SharedStepApi> => {
  const config: QueryParams<Partial<SharedStep>> = {
    method: 'get',
    url: `${queryParams?.url ?? SharedStepRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedStepApi>(config)
    : getResponse<SharedStepApi, Partial<SharedStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedStepDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<SharedStep>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<SharedStep>> = {
    method: 'delete',
    url: `${queryParams?.url ?? SharedStepRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<SharedStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedStepDeleteMany = (
  data: (Partial<SharedStep> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<SharedStep> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<SharedStep> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? SharedStepRoute() + '/delete',
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<SharedStep> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const sharedStepUpdateOne = (
  id: number,
  data: Partial<SharedStep>,
  queryParams?: QueryParams<Partial<SharedStep>>,
): Promise<SharedStep> => {
  const config: QueryParams<Partial<SharedStep>> = {
    method: 'put',
    url: `${queryParams?.url ?? SharedStepRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedStep>(config)
    : getResponse<SharedStep, Partial<SharedStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedStepUpdateMany = (
  data: (Partial<SharedStep> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<SharedStep> & { id: number }>,
): Promise<SharedStep[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<SharedStep> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? SharedStepRoute(),
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SharedStep[]>(config)
        : getResponse<SharedStep[], Partial<SharedStep> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const sharedStepCreateOne = (
  data: Partial<SharedStep>,
  queryParams?: QueryParams<Partial<SharedStep>>,
): Promise<SharedStep> => {
  const config: QueryParams<Partial<SharedStep>> = {
    method: 'post',
    url: queryParams?.url ?? SharedStepRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedStep>(config)
    : getResponse<SharedStep, Partial<SharedStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedStepCreateMany = (
  data: Partial<SharedStep>[],
  queryParams?: QueryParamsWithList<Partial<SharedStep>>,
): Promise<SharedStep[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<SharedStep>> = {
        method: 'post',
        url: queryParams?.url ?? SharedStepRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SharedStep[]>(config)
        : getResponse<SharedStep[], Partial<SharedStep>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
