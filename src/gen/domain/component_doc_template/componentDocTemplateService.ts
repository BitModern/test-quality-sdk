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
import { ComponentDocTemplateRoute } from '../../routes/Routes';
import type { ComponentDocTemplate } from './ComponentDocTemplate';
import type { ComponentDocTemplateApi } from './ComponentDocTemplateApi';

export const componentDocTemplateGetMany = (
  queryParams?: QueryParams<ComponentDocTemplate>,
): Promise<ResourceList<ComponentDocTemplateApi>> => {
  const config: QueryParams<ComponentDocTemplate> = {
    method: 'get',
    url: queryParams?.url ?? ComponentDocTemplateRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ComponentDocTemplateApi>>(config)
    : getResponse<ResourceList<ComponentDocTemplateApi>, ComponentDocTemplate>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTemplateGetOne = (
  id: number,
  queryParams?: QueryParams<ComponentDocTemplate>,
): Promise<ComponentDocTemplateApi> => {
  const config: QueryParams<ComponentDocTemplate> = {
    method: 'get',
    url: `${queryParams?.url ?? ComponentDocTemplateRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocTemplateApi>(config)
    : getResponse<ComponentDocTemplateApi, ComponentDocTemplate>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTemplateDeleteOne = (
  id: number,
  queryParams?: QueryParams<ComponentDocTemplate>,
): Promise<MessageResponse> => {
  const config: QueryParams<ComponentDocTemplate> = {
    method: 'delete',
    url: `${queryParams?.url ?? ComponentDocTemplateRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, ComponentDocTemplate>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTemplateDeleteMany = (
  data: Partial<ComponentDocTemplate>[],
  queryParams?: QueryParamsWithList<ComponentDocTemplate>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ComponentDocTemplate> = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocTemplateRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, ComponentDocTemplate>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const componentDocTemplateUpdateOne = (
  id: number,
  data: Partial<ComponentDocTemplate>,
  queryParams?: QueryParams<ComponentDocTemplate>,
): Promise<ComponentDocTemplate> => {
  const config: QueryParams<ComponentDocTemplate> = {
    method: 'put',
    url: `${queryParams?.url ?? ComponentDocTemplateRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocTemplate>(config)
    : getResponse<ComponentDocTemplate>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTemplateCreateOne = (
  data: Partial<ComponentDocTemplate>,
  queryParams?: QueryParams<ComponentDocTemplate>,
): Promise<ComponentDocTemplate> => {
  const config: QueryParams<ComponentDocTemplate> = {
    method: 'post',
    url: queryParams?.url ?? ComponentDocTemplateRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocTemplate>(config)
    : getResponse<ComponentDocTemplate>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTemplateCreateMany = (
  data: Partial<ComponentDocTemplate>[],
  queryParams?: QueryParamsWithList<ComponentDocTemplate>,
): Promise<ComponentDocTemplate[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ComponentDocTemplate> = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocTemplateRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ComponentDocTemplate[]>(config)
        : getResponse<ComponentDocTemplate[], ComponentDocTemplate>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
