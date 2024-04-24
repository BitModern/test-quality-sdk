/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type {
  QueryParams,
  QueryParamsWithList,
} from '../../actions/QueryParams';
import type { MessageResponse } from '../../actions/MessageResponse';
import type { ResourceList } from '../../models/ResourceList';
import { CasePriorityRoute } from '../../routes/Routes';
import type { CasePriority } from './CasePriority';
import type { CasePriorityApi } from './CasePriorityApi';

export const casePriorityGetMany = (
  queryParams?: QueryParams<CasePriority>,
): Promise<ResourceList<CasePriorityApi>> => {
  const config: QueryParams<CasePriority> = {
    method: 'get',
    url: queryParams?.url ?? CasePriorityRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CasePriorityApi>>(config)
    : getResponse<ResourceList<CasePriorityApi>, CasePriority>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityGetOne = (
  id: number,
  queryParams?: QueryParams<CasePriority>,
): Promise<CasePriorityApi> => {
  const config: QueryParams<CasePriority> = {
    method: 'get',
    url: `${queryParams?.url ?? CasePriorityRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityApi>(config)
    : getResponse<CasePriorityApi, CasePriority>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityDeleteOne = (
  id: number,
  queryParams?: QueryParams<CasePriority>,
): Promise<MessageResponse> => {
  const config: QueryParams<CasePriority> = {
    method: 'delete',
    url: `${queryParams?.url ?? CasePriorityRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CasePriority>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityUpdateOne = (
  id: number,
  data: Partial<CasePriority>,
  queryParams?: QueryParams<CasePriority>,
): Promise<CasePriority> => {
  const config: QueryParams<CasePriority> = {
    method: 'put',
    url: `${queryParams?.url ?? CasePriorityRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriority>(config)
    : getResponse<CasePriority>(queryParams?.api ?? _client?.api, config);
};

export const casePriorityCreateOne = (
  data: Partial<CasePriority>,
  queryParams?: QueryParams<CasePriority>,
): Promise<CasePriority> => {
  const config: QueryParams<CasePriority> = {
    method: 'post',
    url: queryParams?.url ?? CasePriorityRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriority>(config)
    : getResponse<CasePriority>(queryParams?.api ?? _client?.api, config);
};

export const casePriorityCreateMany = (
  data: Partial<CasePriority>[],
  queryParams?: QueryParamsWithList<CasePriority>,
): Promise<CasePriority[]> => {
  const config: QueryParamsWithList<CasePriority> = {
    method: 'post',
    url: queryParams?.url ?? CasePriorityRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriority[]>(config)
    : getResponse<CasePriority[], CasePriority>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
