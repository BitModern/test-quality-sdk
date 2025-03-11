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
import { RunResultStepRoute } from '../../routes/Routes';
import type { RunResultStep } from './RunResultStep';
import type { RunResultStepApi } from './RunResultStepApi';

export const runResultStepGetMany = (
  queryParams?: QueryParams<Partial<RunResultStep>>,
): Promise<ResourceList<RunResultStepApi>> => {
  const config: QueryParams<Partial<RunResultStep>> = {
    method: 'get',
    url: queryParams?.url ?? RunResultStepRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RunResultStepApi>>(config)
    : getResponse<ResourceList<RunResultStepApi>, Partial<RunResultStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runResultStepGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<RunResultStep>>,
): Promise<RunResultStepApi> => {
  const config: QueryParams<Partial<RunResultStep>> = {
    method: 'get',
    url: `${queryParams?.url ?? RunResultStepRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunResultStepApi>(config)
    : getResponse<RunResultStepApi, Partial<RunResultStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runResultStepDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<RunResultStep>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<RunResultStep>> = {
    method: 'delete',
    url: `${queryParams?.url ?? RunResultStepRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<RunResultStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runResultStepDeleteMany = (
  data: (Partial<RunResultStep> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<RunResultStep> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<RunResultStep> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? RunResultStepRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<RunResultStep> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const runResultStepUpdateOne = (
  id: number,
  data: Partial<RunResultStep>,
  queryParams?: QueryParams<Partial<RunResultStep>>,
): Promise<RunResultStep> => {
  const config: QueryParams<Partial<RunResultStep>> = {
    method: 'put',
    url: `${queryParams?.url ?? RunResultStepRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunResultStep>(config)
    : getResponse<RunResultStep, Partial<RunResultStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runResultStepUpdateMany = (
  data: (Partial<RunResultStep> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<RunResultStep> & { id: number }>,
): Promise<RunResultStep[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<RunResultStep> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? RunResultStepRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<RunResultStep[]>(config)
        : getResponse<RunResultStep[], Partial<RunResultStep> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const runResultStepCreateOne = (
  data: Partial<RunResultStep>,
  queryParams?: QueryParams<Partial<RunResultStep>>,
): Promise<RunResultStep> => {
  const config: QueryParams<Partial<RunResultStep>> = {
    method: 'post',
    url: queryParams?.url ?? RunResultStepRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunResultStep>(config)
    : getResponse<RunResultStep, Partial<RunResultStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const runResultStepCreateMany = (
  data: Partial<RunResultStep>[],
  queryParams?: QueryParamsWithList<Partial<RunResultStep>>,
): Promise<RunResultStep[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<RunResultStep>> = {
        method: 'post',
        url: queryParams?.url ?? RunResultStepRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<RunResultStep[]>(config)
        : getResponse<RunResultStep[], Partial<RunResultStep>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
