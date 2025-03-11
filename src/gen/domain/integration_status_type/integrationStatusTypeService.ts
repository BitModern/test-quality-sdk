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
import { IntegrationStatusTypeRoute } from '../../routes/Routes';
import type { IntegrationStatusType } from './IntegrationStatusType';
import type { IntegrationStatusTypeApi } from './IntegrationStatusTypeApi';

export const integrationStatusTypeGetMany = (
  queryParams?: QueryParams<IntegrationStatusType>,
): Promise<ResourceList<IntegrationStatusTypeApi>> => {
  const config: QueryParams<IntegrationStatusType> = {
    method: 'get',
    url: queryParams?.url ?? IntegrationStatusTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<IntegrationStatusTypeApi>>(config)
    : getResponse<
        ResourceList<IntegrationStatusTypeApi>,
        IntegrationStatusType
      >(queryParams?.api ?? _client?.api, config);
};

export const integrationStatusTypeGetOne = (
  id: number,
  queryParams?: QueryParams<IntegrationStatusType>,
): Promise<IntegrationStatusTypeApi> => {
  const config: QueryParams<IntegrationStatusType> = {
    method: 'get',
    url: `${queryParams?.url ?? IntegrationStatusTypeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationStatusTypeApi>(config)
    : getResponse<IntegrationStatusTypeApi, IntegrationStatusType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationStatusTypeDeleteOne = (
  id: number,
  queryParams?: QueryParams<IntegrationStatusType>,
): Promise<MessageResponse> => {
  const config: QueryParams<IntegrationStatusType> = {
    method: 'delete',
    url: `${queryParams?.url ?? IntegrationStatusTypeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, IntegrationStatusType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationStatusTypeDeleteMany = (
  data: (Partial<IntegrationStatusType> & { id: number })[],
  queryParams?: QueryParamsWithList<IntegrationStatusType>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<IntegrationStatusType> = {
        method: 'post',
        url: queryParams?.url ?? IntegrationStatusTypeRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, IntegrationStatusType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const integrationStatusTypeUpdateOne = (
  id: number,
  data: Partial<IntegrationStatusType>,
  queryParams?: QueryParams<IntegrationStatusType>,
): Promise<IntegrationStatusType> => {
  const config: QueryParams<IntegrationStatusType> = {
    method: 'put',
    url: `${queryParams?.url ?? IntegrationStatusTypeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationStatusType>(config)
    : getResponse<IntegrationStatusType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationStatusTypeUpdateMany = (
  data: (Partial<IntegrationStatusType> & { id: number })[],
  queryParams?: QueryParamsWithList<IntegrationStatusType>,
): Promise<IntegrationStatusType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<IntegrationStatusType> = {
        method: 'post',
        url: queryParams?.url ?? IntegrationStatusTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<IntegrationStatusType[]>(config)
        : getResponse<IntegrationStatusType[], IntegrationStatusType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const integrationStatusTypeCreateOne = (
  data: Partial<IntegrationStatusType>,
  queryParams?: QueryParams<IntegrationStatusType>,
): Promise<IntegrationStatusType> => {
  const config: QueryParams<IntegrationStatusType> = {
    method: 'post',
    url: queryParams?.url ?? IntegrationStatusTypeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationStatusType>(config)
    : getResponse<IntegrationStatusType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationStatusTypeCreateMany = (
  data: Partial<IntegrationStatusType>[],
  queryParams?: QueryParamsWithList<IntegrationStatusType>,
): Promise<IntegrationStatusType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<IntegrationStatusType> = {
        method: 'post',
        url: queryParams?.url ?? IntegrationStatusTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<IntegrationStatusType[]>(config)
        : getResponse<IntegrationStatusType[], IntegrationStatusType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
