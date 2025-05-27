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
import type { DocRequirement } from './DocRequirement';
import type { DocRequirementApi } from './DocRequirementApi';

export const docRequirementDetach = (
  data: Partial<DocRequirement>,
  queryParams?: QueryParams<Partial<DocRequirement>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<DocRequirement>> = {
    method: 'delete',
    url: `/doc_requirement/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<DocRequirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docRequirementDeleteMany = (
  data: (Partial<DocRequirement> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<DocRequirement & { id: number }>>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<DocRequirement> & { id: number }
      > = {
        method: 'post',
        url: `/doc_requirement/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<DocRequirement> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const docRequirementUpdateOne = (
  id: number,
  data: Partial<DocRequirement>,
  queryParams?: QueryParams<Partial<DocRequirement>>,
): Promise<DocRequirement> => {
  const config: QueryParams<Partial<DocRequirement>> = {
    method: 'put',
    url: `/doc_requirement/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocRequirement>(config)
    : getResponse<DocRequirement, Partial<DocRequirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docRequirementUpdateMany = (
  data: (Partial<DocRequirement> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<DocRequirement> & { id: number }>,
): Promise<DocRequirement[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<DocRequirement> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/doc_requirement`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DocRequirement[]>(config)
        : getResponse<
            DocRequirement[],
            Partial<DocRequirement> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const docRequirementCreateOne = (
  data: Partial<DocRequirement>,
  queryParams?: QueryParams<Partial<DocRequirement>>,
): Promise<DocRequirement> => {
  const config: QueryParams<Partial<DocRequirement>> = {
    method: 'post',
    url: queryParams?.url ?? `/doc_requirement`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocRequirement>(config)
    : getResponse<DocRequirement, Partial<DocRequirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docRequirementCreateMany = (
  data: Partial<DocRequirement>[],
  queryParams?: QueryParamsWithList<Partial<DocRequirement>>,
): Promise<DocRequirement[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<DocRequirement>> = {
        method: 'post',
        url: queryParams?.url ?? `/doc_requirement`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DocRequirement[]>(config)
        : getResponse<DocRequirement[], Partial<DocRequirement>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const docRequirementGetMany = (
  queryParams?: QueryParams<Partial<DocRequirement>>,
): Promise<ResourceList<DocRequirementApi>> => {
  const config: QueryParams<Partial<DocRequirement>> = {
    method: 'get',
    url: queryParams?.url ?? `/doc_requirement`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DocRequirementApi>>(config)
    : getResponse<ResourceList<DocRequirementApi>, Partial<DocRequirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docRequirementGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<DocRequirement>>,
): Promise<DocRequirementApi> => {
  const config: QueryParams<Partial<DocRequirement>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/doc_requirement/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocRequirementApi>(config)
    : getResponse<DocRequirementApi, Partial<DocRequirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
