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
  queryParams?: QueryParams<Partial<ComponentDocTemplate>>,
): Promise<ResourceList<ComponentDocTemplateApi>> => {
  const config: QueryParams<Partial<ComponentDocTemplate>> = {
    method: 'get',
    url: queryParams?.url ?? ComponentDocTemplateRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ComponentDocTemplateApi>>(config)
    : getResponse<
        ResourceList<ComponentDocTemplateApi>,
        Partial<ComponentDocTemplate>
      >(queryParams?.api ?? _client?.api, config);
};

export const componentDocTemplateGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<ComponentDocTemplate>>,
): Promise<ComponentDocTemplateApi> => {
  const config: QueryParams<Partial<ComponentDocTemplate>> = {
    method: 'get',
    url: `${queryParams?.url ?? ComponentDocTemplateRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocTemplateApi>(config)
    : getResponse<ComponentDocTemplateApi, Partial<ComponentDocTemplate>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTemplateDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<ComponentDocTemplate>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<ComponentDocTemplate>> = {
    method: 'delete',
    url: `${queryParams?.url ?? ComponentDocTemplateRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<ComponentDocTemplate>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTemplateDeleteMany = (
  data: (Partial<ComponentDocTemplate> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<ComponentDocTemplate> & { id: number }
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ComponentDocTemplate> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocTemplateRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<ComponentDocTemplate> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const componentDocTemplateUpdateOne = (
  id: number,
  data: Partial<ComponentDocTemplate>,
  queryParams?: QueryParams<Partial<ComponentDocTemplate>>,
): Promise<ComponentDocTemplate> => {
  const config: QueryParams<Partial<ComponentDocTemplate>> = {
    method: 'put',
    url: `${queryParams?.url ?? ComponentDocTemplateRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocTemplate>(config)
    : getResponse<ComponentDocTemplate, Partial<ComponentDocTemplate>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTemplateUpdateMany = (
  data: (Partial<ComponentDocTemplate> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<ComponentDocTemplate> & { id: number }
  >,
): Promise<ComponentDocTemplate[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ComponentDocTemplate> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocTemplateRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ComponentDocTemplate[]>(config)
        : getResponse<
            ComponentDocTemplate[],
            Partial<ComponentDocTemplate> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const componentDocTemplateCreateOne = (
  data: Partial<ComponentDocTemplate>,
  queryParams?: QueryParams<Partial<ComponentDocTemplate>>,
): Promise<ComponentDocTemplate> => {
  const config: QueryParams<Partial<ComponentDocTemplate>> = {
    method: 'post',
    url: queryParams?.url ?? ComponentDocTemplateRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocTemplate>(config)
    : getResponse<ComponentDocTemplate, Partial<ComponentDocTemplate>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTemplateCreateMany = (
  data: Partial<ComponentDocTemplate>[],
  queryParams?: QueryParamsWithList<Partial<ComponentDocTemplate>>,
): Promise<ComponentDocTemplate[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<ComponentDocTemplate>> = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocTemplateRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ComponentDocTemplate[]>(config)
        : getResponse<ComponentDocTemplate[], Partial<ComponentDocTemplate>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
