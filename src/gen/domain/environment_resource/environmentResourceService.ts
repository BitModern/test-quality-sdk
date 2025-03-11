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
  queryParams?: QueryParams<Partial<EnvironmentResource>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<EnvironmentResource>> = {
    method: 'delete',
    url: `/environment_resource/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<EnvironmentResource>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentResourceDeleteMany = (
  data: (Partial<EnvironmentResource> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<EnvironmentResource & { id: number }>
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<EnvironmentResource> & { id: number }
      > = {
        method: 'post',
        url: `/environment_resource/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<EnvironmentResource> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const environmentResourceUpdateOne = (
  id: number,
  data: Partial<EnvironmentResource>,
  queryParams?: QueryParams<Partial<EnvironmentResource>>,
): Promise<EnvironmentResource> => {
  const config: QueryParams<Partial<EnvironmentResource>> = {
    method: 'put',
    url: `/environment_resource/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentResource>(config)
    : getResponse<EnvironmentResource, Partial<EnvironmentResource>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentResourceUpdateMany = (
  data: (Partial<EnvironmentResource> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<EnvironmentResource> & { id: number }
  >,
): Promise<EnvironmentResource[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<EnvironmentResource> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/environment_resource`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<EnvironmentResource[]>(config)
        : getResponse<
            EnvironmentResource[],
            Partial<EnvironmentResource> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const environmentResourceCreateOne = (
  data: Partial<EnvironmentResource>,
  queryParams?: QueryParams<Partial<EnvironmentResource>>,
): Promise<EnvironmentResource> => {
  const config: QueryParams<Partial<EnvironmentResource>> = {
    method: 'post',
    url: queryParams?.url ?? `/environment_resource`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentResource>(config)
    : getResponse<EnvironmentResource, Partial<EnvironmentResource>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentResourceCreateMany = (
  data: Partial<EnvironmentResource>[],
  queryParams?: QueryParamsWithList<Partial<EnvironmentResource>>,
): Promise<EnvironmentResource[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<EnvironmentResource>> = {
        method: 'post',
        url: queryParams?.url ?? `/environment_resource`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<EnvironmentResource[]>(config)
        : getResponse<EnvironmentResource[], Partial<EnvironmentResource>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const environmentResourceGetMany = (
  queryParams?: QueryParams<Partial<EnvironmentResource>>,
): Promise<ResourceList<EnvironmentResourceApi>> => {
  const config: QueryParams<Partial<EnvironmentResource>> = {
    method: 'get',
    url: queryParams?.url ?? `/environment_resource`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<EnvironmentResourceApi>>(config)
    : getResponse<
        ResourceList<EnvironmentResourceApi>,
        Partial<EnvironmentResource>
      >(queryParams?.api ?? _client?.api, config);
};

export const environmentResourceGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<EnvironmentResource>>,
): Promise<EnvironmentResourceApi> => {
  const config: QueryParams<Partial<EnvironmentResource>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/environment_resource/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentResourceApi>(config)
    : getResponse<EnvironmentResourceApi, Partial<EnvironmentResource>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
