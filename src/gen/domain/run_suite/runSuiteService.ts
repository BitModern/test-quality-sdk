/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { RunSuiteRoute } from '../../routes/Routes';
import { RunSuite } from './RunSuite';
import { RunSuiteApi } from './RunSuiteApi';

export const runSuiteGetMany = (
  queryParams?: QueryParams<RunSuite>
): Promise<ResourceList<RunSuiteApi>> => {
  const config: QueryParams<RunSuite> = {
    method: 'get',
    url: queryParams?.url || RunSuiteRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RunSuiteApi>>(config)
    : getResponse<ResourceList<RunSuiteApi>, RunSuite>(
        queryParams?.api || _client?.api,
        config
      );
};

export const runSuiteGetOne = (
  id: number,
  queryParams?: QueryParams<RunSuite>
): Promise<RunSuiteApi> => {
  const config: QueryParams<RunSuite> = {
    method: 'get',
    url: `${queryParams?.url || RunSuiteRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunSuiteApi>(config)
    : getResponse<RunSuiteApi, RunSuite>(
        queryParams?.api || _client?.api,
        config
      );
};

export const runSuiteDeleteOne = (
  id: number,
  queryParams?: QueryParams<RunSuite>
): Promise<MessageResponse> => {
  const config: QueryParams<RunSuite> = {
    method: 'delete',
    url: `${queryParams?.url || RunSuiteRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, RunSuite>(
        queryParams?.api || _client?.api,
        config
      );
};

export const runSuiteUpdateOne = (
  id: number,
  data: Partial<RunSuite>,
  queryParams?: QueryParams<RunSuite>
): Promise<RunSuite> => {
  const config: QueryParams<RunSuite> = {
    method: 'put',
    url: `${queryParams?.url || RunSuiteRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunSuite>(config)
    : getResponse<RunSuite>(queryParams?.api || _client?.api, config);
};

export const runSuiteCreateOne = (
  data: Partial<RunSuite>,
  queryParams?: QueryParams<RunSuite>
): Promise<RunSuite> => {
  const config: QueryParams<RunSuite> = {
    method: 'post',
    url: queryParams?.url || RunSuiteRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunSuite>(config)
    : getResponse<RunSuite>(queryParams?.api || _client?.api, config);
};
