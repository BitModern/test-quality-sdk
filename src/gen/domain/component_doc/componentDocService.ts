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
import { ComponentDocRoute } from '../../routes/Routes';
import type { ComponentDoc } from './ComponentDoc';
import type { ComponentDocApi } from './ComponentDocApi';

export const componentDocGetMany = (
  queryParams?: QueryParams<ComponentDoc>,
): Promise<ResourceList<ComponentDocApi>> => {
  const config: QueryParams<ComponentDoc> = {
    method: 'get',
    url: queryParams?.url ?? ComponentDocRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ComponentDocApi>>(config)
    : getResponse<ResourceList<ComponentDocApi>, ComponentDoc>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocGetOne = (
  id: number,
  queryParams?: QueryParams<ComponentDoc>,
): Promise<ComponentDocApi> => {
  const config: QueryParams<ComponentDoc> = {
    method: 'get',
    url: `${queryParams?.url ?? ComponentDocRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocApi>(config)
    : getResponse<ComponentDocApi, ComponentDoc>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocDeleteOne = (
  id: number,
  queryParams?: QueryParams<ComponentDoc>,
): Promise<MessageResponse> => {
  const config: QueryParams<ComponentDoc> = {
    method: 'delete',
    url: `${queryParams?.url ?? ComponentDocRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, ComponentDoc>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocUpdateOne = (
  id: number,
  data: Partial<ComponentDoc>,
  queryParams?: QueryParams<ComponentDoc>,
): Promise<ComponentDoc> => {
  const config: QueryParams<ComponentDoc> = {
    method: 'put',
    url: `${queryParams?.url ?? ComponentDocRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDoc>(config)
    : getResponse<ComponentDoc>(queryParams?.api ?? _client?.api, config);
};

export const componentDocCreateOne = (
  data: Partial<ComponentDoc>,
  queryParams?: QueryParams<ComponentDoc>,
): Promise<ComponentDoc> => {
  const config: QueryParams<ComponentDoc> = {
    method: 'post',
    url: queryParams?.url ?? ComponentDocRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDoc>(config)
    : getResponse<ComponentDoc>(queryParams?.api ?? _client?.api, config);
};

export const componentDocCreateMany = (
  data: Partial<ComponentDoc>[],
  queryParams?: QueryParamsWithList<ComponentDoc>,
): Promise<ComponentDoc[]> => {
  const config: QueryParamsWithList<ComponentDoc> = {
    method: 'post',
    url: queryParams?.url ?? ComponentDocRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDoc[]>(config)
    : getResponse<ComponentDoc[], ComponentDoc>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
