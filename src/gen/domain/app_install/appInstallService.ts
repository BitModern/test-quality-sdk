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
import { AppInstallRoute } from '../../routes/Routes';
import type { AppInstall } from './AppInstall';
import type { AppInstallApi } from './AppInstallApi';

export const appInstallGetMany = (
  queryParams?: QueryParams<AppInstall>,
): Promise<ResourceList<AppInstallApi>> => {
  const config: QueryParams<AppInstall> = {
    method: 'get',
    url: queryParams?.url ?? AppInstallRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AppInstallApi>>(config)
    : getResponse<ResourceList<AppInstallApi>, AppInstall>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const appInstallGetOne = (
  id: number,
  queryParams?: QueryParams<AppInstall>,
): Promise<AppInstallApi> => {
  const config: QueryParams<AppInstall> = {
    method: 'get',
    url: `${queryParams?.url ?? AppInstallRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppInstallApi>(config)
    : getResponse<AppInstallApi, AppInstall>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const appInstallDeleteOne = (
  id: number,
  queryParams?: QueryParams<AppInstall>,
): Promise<MessageResponse> => {
  const config: QueryParams<AppInstall> = {
    method: 'delete',
    url: `${queryParams?.url ?? AppInstallRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, AppInstall>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const appInstallDeleteMany = (
  data: Partial<AppInstall>[],
  queryParams?: QueryParamsWithList<AppInstall>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<AppInstall> = {
        method: 'post',
        url: queryParams?.url ?? AppInstallRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, AppInstall>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const appInstallUpdateOne = (
  id: number,
  data: Partial<AppInstall>,
  queryParams?: QueryParams<AppInstall>,
): Promise<AppInstall> => {
  const config: QueryParams<AppInstall> = {
    method: 'put',
    url: `${queryParams?.url ?? AppInstallRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppInstall>(config)
    : getResponse<AppInstall>(queryParams?.api ?? _client?.api, config);
};

export const appInstallCreateOne = (
  data: Partial<AppInstall>,
  queryParams?: QueryParams<AppInstall>,
): Promise<AppInstall> => {
  const config: QueryParams<AppInstall> = {
    method: 'post',
    url: queryParams?.url ?? AppInstallRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppInstall>(config)
    : getResponse<AppInstall>(queryParams?.api ?? _client?.api, config);
};

export const appInstallCreateMany = (
  data: Partial<AppInstall>[],
  queryParams?: QueryParamsWithList<AppInstall>,
): Promise<AppInstall[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<AppInstall> = {
        method: 'post',
        url: queryParams?.url ?? AppInstallRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<AppInstall[]>(config)
        : getResponse<AppInstall[], AppInstall>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
