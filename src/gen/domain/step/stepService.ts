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
  queryParams?: QueryParams<Step>,
): Promise<ResourceList<StepApi>> => {
  const config: QueryParams<Step> = {
    method: 'get',
    url: queryParams?.url ?? StepRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<StepApi>>(config)
    : getResponse<ResourceList<StepApi>, Step>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stepGetOne = (
  id: number,
  queryParams?: QueryParams<Step>,
): Promise<StepApi> => {
  const config: QueryParams<Step> = {
    method: 'get',
    url: `${queryParams?.url ?? StepRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StepApi>(config)
    : getResponse<StepApi, Step>(queryParams?.api ?? _client?.api, config);
};

export const stepDeleteOne = (
  id: number,
  queryParams?: QueryParams<Step>,
): Promise<MessageResponse> => {
  const config: QueryParams<Step> = {
    method: 'delete',
    url: `${queryParams?.url ?? StepRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Step>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stepDeleteMany = (
  data: Partial<Step>[],
  queryParams?: QueryParamsWithList<Step>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Step> = {
        method: 'post',
        url: queryParams?.url ?? StepRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Step>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const stepUpdateOne = (
  id: number,
  data: Partial<Step>,
  queryParams?: QueryParams<Step>,
): Promise<Step> => {
  const config: QueryParams<Step> = {
    method: 'put',
    url: `${queryParams?.url ?? StepRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Step>(config)
    : getResponse<Step>(queryParams?.api ?? _client?.api, config);
};

export const stepCreateOne = (
  data: Partial<Step>,
  queryParams?: QueryParams<Step>,
): Promise<Step> => {
  const config: QueryParams<Step> = {
    method: 'post',
    url: queryParams?.url ?? StepRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Step>(config)
    : getResponse<Step>(queryParams?.api ?? _client?.api, config);
};

export const stepCreateMany = (
  data: Partial<Step>[],
  queryParams?: QueryParamsWithList<Step>,
): Promise<Step[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Step> = {
        method: 'post',
        url: queryParams?.url ?? StepRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Step[]>(config)
        : getResponse<Step[], Step>(queryParams?.api ?? _client?.api, config);
    }),
  );
};
