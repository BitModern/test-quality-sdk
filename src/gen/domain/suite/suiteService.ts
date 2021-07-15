/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { SuiteRoute } from '../../routes/Routes';
import { Suite } from './Suite';
import { SuiteApi } from './SuiteApi';

export const suiteGetMany = (
  queryParams?: QueryParams<Suite>
): Promise<ResourceList<SuiteApi>> => {
  const config: QueryParams<Suite> = {
    method: 'get',
    url: queryParams?.url || SuiteRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SuiteApi>>(config)
    : getResponse<ResourceList<SuiteApi>, Suite>(
        queryParams?.api || _client?.api,
        config
      );
};

export const suiteGetOne = (
  id: number,
  queryParams?: QueryParams<Suite>
): Promise<SuiteApi> => {
  const config: QueryParams<Suite> = {
    method: 'get',
    url: `${queryParams?.url || SuiteRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SuiteApi>(config)
    : getResponse<SuiteApi, Suite>(queryParams?.api || _client?.api, config);
};

export const suiteDeleteOne = (
  id: number,
  queryParams?: QueryParams<Suite>
): Promise<MessageResponse> => {
  const config: QueryParams<Suite> = {
    method: 'delete',
    url: `${queryParams?.url || SuiteRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Suite>(
        queryParams?.api || _client?.api,
        config
      );
};

export const suiteUpdateOne = (
  id: number,
  data: Partial<Suite>,
  queryParams?: QueryParams<Suite>
): Promise<Suite> => {
  const config: QueryParams<Suite> = {
    method: 'put',
    url: `${queryParams?.url || SuiteRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<Suite>(queryParams?.api || _client?.api, config);
};

export const suiteCreateOne = (
  data: Partial<Suite>,
  queryParams?: QueryParams<Suite>
): Promise<Suite> => {
  const config: QueryParams<Suite> = {
    method: 'post',
    url: queryParams?.url || SuiteRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<Suite>(queryParams?.api || _client?.api, config);
};
