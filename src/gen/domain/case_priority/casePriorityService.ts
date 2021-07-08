/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../Client';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { CasePriorityRoute } from '../../routes/Routes';
import { CasePriority } from './CasePriority';
import { CasePriorityApi } from './CasePriorityApi';

export const casePriorityGetMany = (
  queryParams?: QueryParams<CasePriority>
): Promise<ResourceList<CasePriorityApi>> => {
  const config: QueryParams<CasePriority> = {
    method: 'get',
    url: queryParams?.url || CasePriorityRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CasePriorityApi>>(config)
    : getResponse<ResourceList<CasePriorityApi>, CasePriority>(
        queryParams?.api || _client?.api,
        config
      );
};

export const casePriorityGetOne = (
  id: number,
  queryParams?: QueryParams<CasePriority>
): Promise<CasePriorityApi> => {
  const config: QueryParams<CasePriority> = {
    method: 'get',
    url: `${queryParams?.url || CasePriorityRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityApi>(config)
    : getResponse<CasePriorityApi, CasePriority>(
        queryParams?.api || _client?.api,
        config
      );
};

export const casePriorityDeleteOne = (
  id: number,
  queryParams?: QueryParams<CasePriority>
): Promise<MessageResponse> => {
  const config: QueryParams<CasePriority> = {
    method: 'delete',
    url: `${queryParams?.url || CasePriorityRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CasePriority>(
        queryParams?.api || _client?.api,
        config
      );
};

export const casePriorityUpdateOne = (
  id: number,
  data: Partial<CasePriority>,
  queryParams?: QueryParams<CasePriority>
): Promise<CasePriority> => {
  const config: QueryParams<CasePriority> = {
    method: 'put',
    url: `${queryParams?.url || CasePriorityRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriority>(config)
    : getResponse<CasePriority>(queryParams?.api || _client?.api, config);
};

export const casePriorityCreateOne = (
  data: Partial<CasePriority>,
  queryParams?: QueryParams<CasePriority>
): Promise<CasePriority> => {
  const config: QueryParams<CasePriority> = {
    method: 'post',
    url: queryParams?.url || CasePriorityRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriority>(config)
    : getResponse<CasePriority>(queryParams?.api || _client?.api, config);
};
