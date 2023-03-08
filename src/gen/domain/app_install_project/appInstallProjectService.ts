/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { AppInstallProjectRoute } from '../../routes/Routes';
import { AppInstallProject } from './AppInstallProject';
import { AppInstallProjectApi } from './AppInstallProjectApi';

export const appInstallProjectGetMany = (
  queryParams?: QueryParams<AppInstallProject>
): Promise<ResourceList<AppInstallProjectApi>> => {
  const config: QueryParams<AppInstallProject> = {
    method: 'get',
    url: queryParams?.url || AppInstallProjectRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AppInstallProjectApi>>(config)
    : getResponse<ResourceList<AppInstallProjectApi>, AppInstallProject>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appInstallProjectGetOne = (
  id: number,
  queryParams?: QueryParams<AppInstallProject>
): Promise<AppInstallProjectApi> => {
  const config: QueryParams<AppInstallProject> = {
    method: 'get',
    url: `${queryParams?.url || AppInstallProjectRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppInstallProjectApi>(config)
    : getResponse<AppInstallProjectApi, AppInstallProject>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appInstallProjectDeleteOne = (
  id: number,
  queryParams?: QueryParams<AppInstallProject>
): Promise<MessageResponse> => {
  const config: QueryParams<AppInstallProject> = {
    method: 'delete',
    url: `${queryParams?.url || AppInstallProjectRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, AppInstallProject>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appInstallProjectUpdateOne = (
  id: number,
  data: Partial<AppInstallProject>,
  queryParams?: QueryParams<AppInstallProject>
): Promise<AppInstallProject> => {
  const config: QueryParams<AppInstallProject> = {
    method: 'put',
    url: `${queryParams?.url || AppInstallProjectRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppInstallProject>(config)
    : getResponse<AppInstallProject>(queryParams?.api || _client?.api, config);
};

export const appInstallProjectCreateOne = (
  data: Partial<AppInstallProject>,
  queryParams?: QueryParams<AppInstallProject>
): Promise<AppInstallProject> => {
  const config: QueryParams<AppInstallProject> = {
    method: 'post',
    url: queryParams?.url || AppInstallProjectRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppInstallProject>(config)
    : getResponse<AppInstallProject>(queryParams?.api || _client?.api, config);
};
