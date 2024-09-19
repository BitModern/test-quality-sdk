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
import type { CaseTypeProject } from './CaseTypeProject';
import type { CaseTypeProjectApi } from './CaseTypeProjectApi';

export const caseTypeProjectDetach = (
  data: Partial<CaseTypeProject>,
  queryParams?: QueryParams<CaseTypeProject>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<CaseTypeProject> = {
    method: 'delete',
    url: `/case_type_project/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CaseTypeProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeProjectUpdateOne = (
  id: number,
  data: Partial<CaseTypeProject>,
  queryParams?: QueryParams<CaseTypeProject>,
): Promise<CaseTypeProject> => {
  const config: QueryParams<CaseTypeProject> = {
    method: 'put',
    url: `/case_type_project/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeProject>(config)
    : getResponse<CaseTypeProject>(queryParams?.api ?? _client?.api, config);
};

export const caseTypeProjectCreateOne = (
  data: Partial<CaseTypeProject>,
  queryParams?: QueryParams<CaseTypeProject>,
): Promise<CaseTypeProject> => {
  const config: QueryParams<CaseTypeProject> = {
    method: 'post',
    url: queryParams?.url ?? `/case_type_project`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeProject>(config)
    : getResponse<CaseTypeProject>(queryParams?.api ?? _client?.api, config);
};

export const caseTypeProjectCreateMany = (
  data: Partial<CaseTypeProject>[],
  queryParams?: QueryParamsWithList<CaseTypeProject>,
): Promise<CaseTypeProject[]> => {
  const config: QueryParamsWithList<CaseTypeProject> = {
    method: 'post',
    url: queryParams?.url ?? `/case_type_project`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeProject[]>(config)
    : getResponse<CaseTypeProject[], CaseTypeProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeProjectGetMany = (
  queryParams?: QueryParams<CaseTypeProject>,
): Promise<ResourceList<CaseTypeProjectApi>> => {
  const config: QueryParams<CaseTypeProject> = {
    method: 'get',
    url: queryParams?.url ?? `/case_type_project`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CaseTypeProjectApi>>(config)
    : getResponse<ResourceList<CaseTypeProjectApi>, CaseTypeProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const caseTypeProjectGetOne = (
  id: number,
  queryParams?: QueryParams<CaseTypeProject>,
): Promise<CaseTypeProjectApi> => {
  const config: QueryParams<CaseTypeProject> = {
    method: 'get',
    url: `${queryParams?.url ?? `/case_type_project/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeProjectApi>(config)
    : getResponse<CaseTypeProjectApi, CaseTypeProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
