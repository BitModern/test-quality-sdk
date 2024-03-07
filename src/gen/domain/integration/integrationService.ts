/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { IntegrationRoute } from '../../routes/Routes';
import { Integration } from './Integration';
import { IntegrationApi } from './IntegrationApi';

export const integrationGetMany = (
  queryParams?: QueryParams<Integration>
): Promise<ResourceList<IntegrationApi>> => {
  const config: QueryParams<Integration> = {
    method: 'get',
    url: queryParams?.url || IntegrationRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<IntegrationApi>>(config)
    : getResponse<ResourceList<IntegrationApi>, Integration>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationGetOne = (
  id: number,
  queryParams?: QueryParams<Integration>
): Promise<IntegrationApi> => {
  const config: QueryParams<Integration> = {
    method: 'get',
    url: `${queryParams?.url || IntegrationRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationApi>(config)
    : getResponse<IntegrationApi, Integration>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationDeleteOne = (
  id: number,
  queryParams?: QueryParams<Integration>
): Promise<MessageResponse> => {
  const config: QueryParams<Integration> = {
    method: 'delete',
    url: `${queryParams?.url || IntegrationRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Integration>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationUpdateOne = (
  id: number,
  data: Partial<Integration>,
  queryParams?: QueryParams<Integration>
): Promise<Integration> => {
  const config: QueryParams<Integration> = {
    method: 'put',
    url: `${queryParams?.url || IntegrationRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<Integration>(queryParams?.api || _client?.api, config);
};

export const integrationCreateOne = (
  data: Partial<Integration>,
  queryParams?: QueryParams<Integration>
): Promise<Integration> => {
  const config: QueryParams<Integration> = {
    method: 'post',
    url: queryParams?.url || IntegrationRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<Integration>(queryParams?.api || _client?.api, config);
};

export const integrationCreateMany = (
  data: Partial<Integration>[],
  queryParams?: QueryParamsWithList<Integration>
): Promise<Integration[]> => {
  const config: QueryParamsWithList<Integration> = {
    method: 'post',
    url: queryParams?.url || IntegrationRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration[]>(config)
    : getResponse<Integration[], Integration>(
        queryParams?.api || _client?.api,
        config
      );
};
