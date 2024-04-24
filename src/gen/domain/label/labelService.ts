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
import { LabelRoute } from '../../routes/Routes';
import type { Label } from './Label';
import type { LabelApi } from './LabelApi';

export const labelGetMany = (
  queryParams?: QueryParams<Label>,
): Promise<ResourceList<LabelApi>> => {
  const config: QueryParams<Label> = {
    method: 'get',
    url: queryParams?.url ?? LabelRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<LabelApi>>(config)
    : getResponse<ResourceList<LabelApi>, Label>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelGetOne = (
  id: number,
  queryParams?: QueryParams<Label>,
): Promise<LabelApi> => {
  const config: QueryParams<Label> = {
    method: 'get',
    url: `${queryParams?.url ?? LabelRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelApi>(config)
    : getResponse<LabelApi, Label>(queryParams?.api ?? _client?.api, config);
};

export const labelDeleteOne = (
  id: number,
  queryParams?: QueryParams<Label>,
): Promise<MessageResponse> => {
  const config: QueryParams<Label> = {
    method: 'delete',
    url: `${queryParams?.url ?? LabelRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Label>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelUpdateOne = (
  id: number,
  data: Partial<Label>,
  queryParams?: QueryParams<Label>,
): Promise<Label> => {
  const config: QueryParams<Label> = {
    method: 'put',
    url: `${queryParams?.url ?? LabelRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Label>(config)
    : getResponse<Label>(queryParams?.api ?? _client?.api, config);
};

export const labelCreateOne = (
  data: Partial<Label>,
  queryParams?: QueryParams<Label>,
): Promise<Label> => {
  const config: QueryParams<Label> = {
    method: 'post',
    url: queryParams?.url ?? LabelRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Label>(config)
    : getResponse<Label>(queryParams?.api ?? _client?.api, config);
};

export const labelCreateMany = (
  data: Partial<Label>[],
  queryParams?: QueryParamsWithList<Label>,
): Promise<Label[]> => {
  const config: QueryParamsWithList<Label> = {
    method: 'post',
    url: queryParams?.url ?? LabelRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Label[]>(config)
    : getResponse<Label[], Label>(queryParams?.api ?? _client?.api, config);
};
