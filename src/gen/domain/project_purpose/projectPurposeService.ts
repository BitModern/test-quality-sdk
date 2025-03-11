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
import type { ProjectPurpose } from './ProjectPurpose';
import type { ProjectPurposeApi } from './ProjectPurposeApi';

export const projectPurposeDetach = (
  data: Partial<ProjectPurpose>,
  queryParams?: QueryParams<Partial<ProjectPurpose>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<ProjectPurpose>> = {
    method: 'delete',
    url: `/project_purpose/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<ProjectPurpose>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectPurposeDeleteMany = (
  data: (Partial<ProjectPurpose> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<ProjectPurpose & { id: number }>>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ProjectPurpose> & { id: number }
      > = {
        method: 'post',
        url: `/project_purpose/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<ProjectPurpose> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const projectPurposeUpdateOne = (
  id: number,
  data: Partial<ProjectPurpose>,
  queryParams?: QueryParams<Partial<ProjectPurpose>>,
): Promise<ProjectPurpose> => {
  const config: QueryParams<Partial<ProjectPurpose>> = {
    method: 'put',
    url: `/project_purpose/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectPurpose>(config)
    : getResponse<ProjectPurpose, Partial<ProjectPurpose>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectPurposeUpdateMany = (
  data: (Partial<ProjectPurpose> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<ProjectPurpose> & { id: number }>,
): Promise<ProjectPurpose[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ProjectPurpose> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/project_purpose`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ProjectPurpose[]>(config)
        : getResponse<
            ProjectPurpose[],
            Partial<ProjectPurpose> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const projectPurposeCreateOne = (
  data: Partial<ProjectPurpose>,
  queryParams?: QueryParams<Partial<ProjectPurpose>>,
): Promise<ProjectPurpose> => {
  const config: QueryParams<Partial<ProjectPurpose>> = {
    method: 'post',
    url: queryParams?.url ?? `/project_purpose`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectPurpose>(config)
    : getResponse<ProjectPurpose, Partial<ProjectPurpose>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectPurposeCreateMany = (
  data: Partial<ProjectPurpose>[],
  queryParams?: QueryParamsWithList<Partial<ProjectPurpose>>,
): Promise<ProjectPurpose[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<ProjectPurpose>> = {
        method: 'post',
        url: queryParams?.url ?? `/project_purpose`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ProjectPurpose[]>(config)
        : getResponse<ProjectPurpose[], Partial<ProjectPurpose>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const projectPurposeGetMany = (
  queryParams?: QueryParams<Partial<ProjectPurpose>>,
): Promise<ResourceList<ProjectPurposeApi>> => {
  const config: QueryParams<Partial<ProjectPurpose>> = {
    method: 'get',
    url: queryParams?.url ?? `/project_purpose`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ProjectPurposeApi>>(config)
    : getResponse<ResourceList<ProjectPurposeApi>, Partial<ProjectPurpose>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectPurposeGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<ProjectPurpose>>,
): Promise<ProjectPurposeApi> => {
  const config: QueryParams<Partial<ProjectPurpose>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/project_purpose/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectPurposeApi>(config)
    : getResponse<ProjectPurposeApi, Partial<ProjectPurpose>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
