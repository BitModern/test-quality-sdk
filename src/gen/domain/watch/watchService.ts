/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { WatchRoute } from '../../routes/Routes';
import { Watch } from './Watch';
import { WatchApi } from './WatchApi';

export const watchGetMany = (
  queryParams?: QueryParams<Watch>,
): Promise<ResourceList<WatchApi>> => {
  const config: QueryParams<Watch> = {
    method: 'get',
    url: queryParams?.url || WatchRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<WatchApi>>(config)
    : getResponse<ResourceList<WatchApi>, Watch>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const watchGetOne = (
  id: number,
  queryParams?: QueryParams<Watch>,
): Promise<WatchApi> => {
  const config: QueryParams<Watch> = {
    method: 'get',
    url: `${queryParams?.url || WatchRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<WatchApi>(config)
    : getResponse<WatchApi, Watch>(queryParams?.api || _client?.api, config);
};

export const watchDeleteOne = (
  id: number,
  queryParams?: QueryParams<Watch>,
): Promise<MessageResponse> => {
  const config: QueryParams<Watch> = {
    method: 'delete',
    url: `${queryParams?.url || WatchRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Watch>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const watchUpdateOne = (
  id: number,
  data: Partial<Watch>,
  queryParams?: QueryParams<Watch>,
): Promise<Watch> => {
  const config: QueryParams<Watch> = {
    method: 'put',
    url: `${queryParams?.url || WatchRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Watch>(config)
    : getResponse<Watch>(queryParams?.api || _client?.api, config);
};

export const watchCreateOne = (
  data: Partial<Watch>,
  queryParams?: QueryParams<Watch>,
): Promise<Watch> => {
  const config: QueryParams<Watch> = {
    method: 'post',
    url: queryParams?.url || WatchRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Watch>(config)
    : getResponse<Watch>(queryParams?.api || _client?.api, config);
};

export const watchCreateMany = (
  data: Partial<Watch>[],
  queryParams?: QueryParamsWithList<Watch>,
): Promise<Watch[]> => {
  const config: QueryParamsWithList<Watch> = {
    method: 'post',
    url: queryParams?.url || WatchRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Watch[]>(config)
    : getResponse<Watch[], Watch>(queryParams?.api || _client?.api, config);
};
