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
import type { CasePriorityProject } from './CasePriorityProject';
import type { CasePriorityProjectApi } from './CasePriorityProjectApi';

export const casePriorityProjectDetach = (
  data: Partial<CasePriorityProject>,
  queryParams?: QueryParams<CasePriorityProject>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<CasePriorityProject> = {
    method: 'delete',
    url: `/case_priority_project/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CasePriorityProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityProjectUpdateOne = (
  id: number,
  data: Partial<CasePriorityProject>,
  queryParams?: QueryParams<CasePriorityProject>,
): Promise<CasePriorityProject> => {
  const config: QueryParams<CasePriorityProject> = {
    method: 'put',
    url: `/case_priority_project/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityProject>(config)
    : getResponse<CasePriorityProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityProjectCreateOne = (
  data: Partial<CasePriorityProject>,
  queryParams?: QueryParams<CasePriorityProject>,
): Promise<CasePriorityProject> => {
  const config: QueryParams<CasePriorityProject> = {
    method: 'post',
    url: queryParams?.url ?? `/case_priority_project`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityProject>(config)
    : getResponse<CasePriorityProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityProjectCreateMany = (
  data: Partial<CasePriorityProject>[],
  queryParams?: QueryParamsWithList<CasePriorityProject>,
): Promise<CasePriorityProject[]> => {
  const config: QueryParamsWithList<CasePriorityProject> = {
    method: 'post',
    url: queryParams?.url ?? `/case_priority_project`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityProject[]>(config)
    : getResponse<CasePriorityProject[], CasePriorityProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityProjectGetMany = (
  queryParams?: QueryParams<CasePriorityProject>,
): Promise<ResourceList<CasePriorityProjectApi>> => {
  const config: QueryParams<CasePriorityProject> = {
    method: 'get',
    url: queryParams?.url ?? `/case_priority_project`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CasePriorityProjectApi>>(config)
    : getResponse<ResourceList<CasePriorityProjectApi>, CasePriorityProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityProjectGetOne = (
  id: number,
  queryParams?: QueryParams<CasePriorityProject>,
): Promise<CasePriorityProjectApi> => {
  const config: QueryParams<CasePriorityProject> = {
    method: 'get',
    url: `${queryParams?.url ?? `/case_priority_project/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityProjectApi>(config)
    : getResponse<CasePriorityProjectApi, CasePriorityProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
