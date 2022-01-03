/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { AppVersionRoute } from '../../routes/Routes';
import { AppVersion } from './AppVersion';
import { AppVersionApi } from './AppVersionApi';

export const appVersionGetMany = (
  queryParams?: QueryParams<AppVersion>
): Promise<ResourceList<AppVersionApi>> => {
  const config: QueryParams<AppVersion> = {
    method: 'get',
    url: queryParams?.url || AppVersionRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AppVersionApi>>(config)
    : getResponse<ResourceList<AppVersionApi>, AppVersion>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appVersionGetOne = (
  id: number,
  queryParams?: QueryParams<AppVersion>
): Promise<AppVersionApi> => {
  const config: QueryParams<AppVersion> = {
    method: 'get',
    url: `${queryParams?.url || AppVersionRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionApi>(config)
    : getResponse<AppVersionApi, AppVersion>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appVersionDeleteOne = (
  id: number,
  queryParams?: QueryParams<AppVersion>
): Promise<MessageResponse> => {
  const config: QueryParams<AppVersion> = {
    method: 'delete',
    url: `${queryParams?.url || AppVersionRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, AppVersion>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appVersionUpdateOne = (
  id: number,
  data: Partial<AppVersion>,
  queryParams?: QueryParams<AppVersion>
): Promise<AppVersion> => {
  const config: QueryParams<AppVersion> = {
    method: 'put',
    url: `${queryParams?.url || AppVersionRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersion>(config)
    : getResponse<AppVersion>(queryParams?.api || _client?.api, config);
};

export const appVersionCreateOne = (
  data: Partial<AppVersion>,
  queryParams?: QueryParams<AppVersion>
): Promise<AppVersion> => {
  const config: QueryParams<AppVersion> = {
    method: 'post',
    url: queryParams?.url || AppVersionRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersion>(config)
    : getResponse<AppVersion>(queryParams?.api || _client?.api, config);
};
