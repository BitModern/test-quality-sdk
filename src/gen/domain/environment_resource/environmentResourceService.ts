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
import type { EnvironmentResource } from './EnvironmentResource';
import type { EnvironmentResourceApi } from './EnvironmentResourceApi';

export const environmentResourceDetach = (
  data: Partial<EnvironmentResource>,
  queryParams?: QueryParams<EnvironmentResource>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<EnvironmentResource> = {
    method: 'delete',
    url: `/environment_resource/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, EnvironmentResource>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentResourceDeleteMany = (
  data: Partial<EnvironmentResource>[],
  queryParams?: QueryParamsWithList<EnvironmentResource>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<EnvironmentResource> = {
        method: 'post',
        url: `/environment_resource/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, EnvironmentResource>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const environmentResourceUpdateOne = (
  id: number,
  data: Partial<EnvironmentResource>,
  queryParams?: QueryParams<EnvironmentResource>,
): Promise<EnvironmentResource> => {
  const config: QueryParams<EnvironmentResource> = {
    method: 'put',
    url: `/environment_resource/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentResource>(config)
    : getResponse<EnvironmentResource>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentResourceCreateOne = (
  data: Partial<EnvironmentResource>,
  queryParams?: QueryParams<EnvironmentResource>,
): Promise<EnvironmentResource> => {
  const config: QueryParams<EnvironmentResource> = {
    method: 'post',
    url: queryParams?.url ?? `/environment_resource`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentResource>(config)
    : getResponse<EnvironmentResource>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentResourceCreateMany = (
  data: Partial<EnvironmentResource>[],
  queryParams?: QueryParamsWithList<EnvironmentResource>,
): Promise<EnvironmentResource[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<EnvironmentResource> = {
        method: 'post',
        url: queryParams?.url ?? `/environment_resource`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<EnvironmentResource[]>(config)
        : getResponse<EnvironmentResource[], EnvironmentResource>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const environmentResourceGetMany = (
  queryParams?: QueryParams<EnvironmentResource>,
): Promise<ResourceList<EnvironmentResourceApi>> => {
  const config: QueryParams<EnvironmentResource> = {
    method: 'get',
    url: queryParams?.url ?? `/environment_resource`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<EnvironmentResourceApi>>(config)
    : getResponse<ResourceList<EnvironmentResourceApi>, EnvironmentResource>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentResourceGetOne = (
  id: number,
  queryParams?: QueryParams<EnvironmentResource>,
): Promise<EnvironmentResourceApi> => {
  const config: QueryParams<EnvironmentResource> = {
    method: 'get',
    url: `${queryParams?.url ?? `/environment_resource/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentResourceApi>(config)
    : getResponse<EnvironmentResourceApi, EnvironmentResource>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
