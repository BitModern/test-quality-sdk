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
import { IntegrationTemplateRoute } from '../../routes/Routes';
import type { IntegrationTemplate } from './IntegrationTemplate';
import type { IntegrationTemplateApi } from './IntegrationTemplateApi';

export const integrationTemplateGetMany = (
  queryParams?: QueryParams<Partial<IntegrationTemplate>>,
): Promise<ResourceList<IntegrationTemplateApi>> => {
  const config: QueryParams<Partial<IntegrationTemplate>> = {
    method: 'get',
    url: queryParams?.url ?? IntegrationTemplateRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<IntegrationTemplateApi>>(config)
    : getResponse<
        ResourceList<IntegrationTemplateApi>,
        Partial<IntegrationTemplate>
      >(queryParams?.api ?? _client?.api, config);
};

export const integrationTemplateGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<IntegrationTemplate>>,
): Promise<IntegrationTemplateApi> => {
  const config: QueryParams<Partial<IntegrationTemplate>> = {
    method: 'get',
    url: `${queryParams?.url ?? IntegrationTemplateRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationTemplateApi>(config)
    : getResponse<IntegrationTemplateApi, Partial<IntegrationTemplate>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationTemplateDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<IntegrationTemplate>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<IntegrationTemplate>> = {
    method: 'delete',
    url: `${queryParams?.url ?? IntegrationTemplateRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<IntegrationTemplate>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationTemplateDeleteMany = (
  data: (Partial<IntegrationTemplate> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<IntegrationTemplate> & { id: number }
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<IntegrationTemplate> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? IntegrationTemplateRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<IntegrationTemplate> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const integrationTemplateUpdateOne = (
  id: number,
  data: Partial<IntegrationTemplate>,
  queryParams?: QueryParams<Partial<IntegrationTemplate>>,
): Promise<IntegrationTemplate> => {
  const config: QueryParams<Partial<IntegrationTemplate>> = {
    method: 'put',
    url: `${queryParams?.url ?? IntegrationTemplateRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationTemplate>(config)
    : getResponse<IntegrationTemplate, Partial<IntegrationTemplate>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationTemplateUpdateMany = (
  data: (Partial<IntegrationTemplate> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<IntegrationTemplate> & { id: number }
  >,
): Promise<IntegrationTemplate[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<IntegrationTemplate> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? IntegrationTemplateRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<IntegrationTemplate[]>(config)
        : getResponse<
            IntegrationTemplate[],
            Partial<IntegrationTemplate> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const integrationTemplateCreateOne = (
  data: Partial<IntegrationTemplate>,
  queryParams?: QueryParams<Partial<IntegrationTemplate>>,
): Promise<IntegrationTemplate> => {
  const config: QueryParams<Partial<IntegrationTemplate>> = {
    method: 'post',
    url: queryParams?.url ?? IntegrationTemplateRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationTemplate>(config)
    : getResponse<IntegrationTemplate, Partial<IntegrationTemplate>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationTemplateCreateMany = (
  data: Partial<IntegrationTemplate>[],
  queryParams?: QueryParamsWithList<Partial<IntegrationTemplate>>,
): Promise<IntegrationTemplate[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<IntegrationTemplate>> = {
        method: 'post',
        url: queryParams?.url ?? IntegrationTemplateRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<IntegrationTemplate[]>(config)
        : getResponse<IntegrationTemplate[], Partial<IntegrationTemplate>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
