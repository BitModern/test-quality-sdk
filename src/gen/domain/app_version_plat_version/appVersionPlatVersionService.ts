/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { AppVersionPlatVersionRoute } from '../../routes/Routes';
import { AppVersionPlatVersion } from './AppVersionPlatVersion';
import { AppVersionPlatVersionApi } from './AppVersionPlatVersionApi';

export const appVersionPlatVersionGetMany = (
  queryParams?: QueryParams<AppVersionPlatVersion>,
): Promise<ResourceList<AppVersionPlatVersionApi>> => {
  const config: QueryParams<AppVersionPlatVersion> = {
    method: 'get',
    url: queryParams?.url || AppVersionPlatVersionRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AppVersionPlatVersionApi>>(config)
    : getResponse<
        ResourceList<AppVersionPlatVersionApi>,
        AppVersionPlatVersion
      >(queryParams?.api || _client?.api, config);
};

export const appVersionPlatVersionGetOne = (
  id: number,
  queryParams?: QueryParams<AppVersionPlatVersion>,
): Promise<AppVersionPlatVersionApi> => {
  const config: QueryParams<AppVersionPlatVersion> = {
    method: 'get',
    url: `${queryParams?.url || AppVersionPlatVersionRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersionApi>(config)
    : getResponse<AppVersionPlatVersionApi, AppVersionPlatVersion>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const appVersionPlatVersionDeleteOne = (
  id: number,
  queryParams?: QueryParams<AppVersionPlatVersion>,
): Promise<MessageResponse> => {
  const config: QueryParams<AppVersionPlatVersion> = {
    method: 'delete',
    url: `${queryParams?.url || AppVersionPlatVersionRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, AppVersionPlatVersion>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const appVersionPlatVersionUpdateOne = (
  id: number,
  data: Partial<AppVersionPlatVersion>,
  queryParams?: QueryParams<AppVersionPlatVersion>,
): Promise<AppVersionPlatVersion> => {
  const config: QueryParams<AppVersionPlatVersion> = {
    method: 'put',
    url: `${queryParams?.url || AppVersionPlatVersionRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersion>(config)
    : getResponse<AppVersionPlatVersion>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const appVersionPlatVersionCreateOne = (
  data: Partial<AppVersionPlatVersion>,
  queryParams?: QueryParams<AppVersionPlatVersion>,
): Promise<AppVersionPlatVersion> => {
  const config: QueryParams<AppVersionPlatVersion> = {
    method: 'post',
    url: queryParams?.url || AppVersionPlatVersionRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersion>(config)
    : getResponse<AppVersionPlatVersion>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const appVersionPlatVersionCreateMany = (
  data: Partial<AppVersionPlatVersion>[],
  queryParams?: QueryParamsWithList<AppVersionPlatVersion>,
): Promise<AppVersionPlatVersion[]> => {
  const config: QueryParamsWithList<AppVersionPlatVersion> = {
    method: 'post',
    url: queryParams?.url || AppVersionPlatVersionRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersion[]>(config)
    : getResponse<AppVersionPlatVersion[], AppVersionPlatVersion>(
        queryParams?.api || _client?.api,
        config,
      );
};
