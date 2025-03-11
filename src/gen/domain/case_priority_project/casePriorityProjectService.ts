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
import type { CasePriorityProject } from './CasePriorityProject';
import type { CasePriorityProjectApi } from './CasePriorityProjectApi';

export const casePriorityProjectDetach = (
  data: Partial<CasePriorityProject>,
  queryParams?: QueryParams<Partial<CasePriorityProject>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<CasePriorityProject>> = {
    method: 'delete',
    url: `/case_priority_project/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<CasePriorityProject>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityProjectDeleteMany = (
  data: (Partial<CasePriorityProject> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<CasePriorityProject & { id: number }>
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<CasePriorityProject> & { id: number }
      > = {
        method: 'post',
        url: `/case_priority_project/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<CasePriorityProject> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const casePriorityProjectUpdateOne = (
  id: number,
  data: Partial<CasePriorityProject>,
  queryParams?: QueryParams<Partial<CasePriorityProject>>,
): Promise<CasePriorityProject> => {
  const config: QueryParams<Partial<CasePriorityProject>> = {
    method: 'put',
    url: `/case_priority_project/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityProject>(config)
    : getResponse<CasePriorityProject, Partial<CasePriorityProject>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityProjectUpdateMany = (
  data: (Partial<CasePriorityProject> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<CasePriorityProject> & { id: number }
  >,
): Promise<CasePriorityProject[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<CasePriorityProject> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/case_priority_project`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CasePriorityProject[]>(config)
        : getResponse<
            CasePriorityProject[],
            Partial<CasePriorityProject> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const casePriorityProjectCreateOne = (
  data: Partial<CasePriorityProject>,
  queryParams?: QueryParams<Partial<CasePriorityProject>>,
): Promise<CasePriorityProject> => {
  const config: QueryParams<Partial<CasePriorityProject>> = {
    method: 'post',
    url: queryParams?.url ?? `/case_priority_project`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityProject>(config)
    : getResponse<CasePriorityProject, Partial<CasePriorityProject>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityProjectCreateMany = (
  data: Partial<CasePriorityProject>[],
  queryParams?: QueryParamsWithList<Partial<CasePriorityProject>>,
): Promise<CasePriorityProject[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CasePriorityProject>> = {
        method: 'post',
        url: queryParams?.url ?? `/case_priority_project`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CasePriorityProject[]>(config)
        : getResponse<CasePriorityProject[], Partial<CasePriorityProject>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const casePriorityProjectGetMany = (
  queryParams?: QueryParams<Partial<CasePriorityProject>>,
): Promise<ResourceList<CasePriorityProjectApi>> => {
  const config: QueryParams<Partial<CasePriorityProject>> = {
    method: 'get',
    url: queryParams?.url ?? `/case_priority_project`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CasePriorityProjectApi>>(config)
    : getResponse<
        ResourceList<CasePriorityProjectApi>,
        Partial<CasePriorityProject>
      >(queryParams?.api ?? _client?.api, config);
};

export const casePriorityProjectGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<CasePriorityProject>>,
): Promise<CasePriorityProjectApi> => {
  const config: QueryParams<Partial<CasePriorityProject>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/case_priority_project/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityProjectApi>(config)
    : getResponse<CasePriorityProjectApi, Partial<CasePriorityProject>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
