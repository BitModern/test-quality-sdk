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
import type { BaseCapabilityBaseIntegration } from './BaseCapabilityBaseIntegration';
import type { BaseCapabilityBaseIntegrationApi } from './BaseCapabilityBaseIntegrationApi';

export const baseCapabilityBaseIntegrationDetach = (
  data: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams<Partial<BaseCapabilityBaseIntegration>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<BaseCapabilityBaseIntegration>> = {
    method: 'delete',
    url: `/base_capability_base_integration/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<BaseCapabilityBaseIntegration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseCapabilityBaseIntegrationDeleteMany = (
  data: (Partial<BaseCapabilityBaseIntegration> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<BaseCapabilityBaseIntegration & { id: number }>
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<BaseCapabilityBaseIntegration> & { id: number }
      > = {
        method: 'post',
        url: `/base_capability_base_integration/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<BaseCapabilityBaseIntegration> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const baseCapabilityBaseIntegrationUpdateOne = (
  id: number,
  data: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams<Partial<BaseCapabilityBaseIntegration>>,
): Promise<BaseCapabilityBaseIntegration> => {
  const config: QueryParams<Partial<BaseCapabilityBaseIntegration>> = {
    method: 'put',
    url: `/base_capability_base_integration/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapabilityBaseIntegration>(config)
    : getResponse<
        BaseCapabilityBaseIntegration,
        Partial<BaseCapabilityBaseIntegration>
      >(queryParams?.api ?? _client?.api, config);
};

export const baseCapabilityBaseIntegrationUpdateMany = (
  data: (Partial<BaseCapabilityBaseIntegration> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<BaseCapabilityBaseIntegration> & { id: number }
  >,
): Promise<BaseCapabilityBaseIntegration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<BaseCapabilityBaseIntegration> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/base_capability_base_integration`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<BaseCapabilityBaseIntegration[]>(config)
        : getResponse<
            BaseCapabilityBaseIntegration[],
            Partial<BaseCapabilityBaseIntegration> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const baseCapabilityBaseIntegrationCreateOne = (
  data: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams<Partial<BaseCapabilityBaseIntegration>>,
): Promise<BaseCapabilityBaseIntegration> => {
  const config: QueryParams<Partial<BaseCapabilityBaseIntegration>> = {
    method: 'post',
    url: queryParams?.url ?? `/base_capability_base_integration`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapabilityBaseIntegration>(config)
    : getResponse<
        BaseCapabilityBaseIntegration,
        Partial<BaseCapabilityBaseIntegration>
      >(queryParams?.api ?? _client?.api, config);
};

export const baseCapabilityBaseIntegrationCreateMany = (
  data: Partial<BaseCapabilityBaseIntegration>[],
  queryParams?: QueryParamsWithList<Partial<BaseCapabilityBaseIntegration>>,
): Promise<BaseCapabilityBaseIntegration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<BaseCapabilityBaseIntegration>
      > = {
        method: 'post',
        url: queryParams?.url ?? `/base_capability_base_integration`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<BaseCapabilityBaseIntegration[]>(config)
        : getResponse<
            BaseCapabilityBaseIntegration[],
            Partial<BaseCapabilityBaseIntegration>
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const baseCapabilityBaseIntegrationGetMany = (
  queryParams?: QueryParams<Partial<BaseCapabilityBaseIntegration>>,
): Promise<ResourceList<BaseCapabilityBaseIntegrationApi>> => {
  const config: QueryParams<Partial<BaseCapabilityBaseIntegration>> = {
    method: 'get',
    url: queryParams?.url ?? `/base_capability_base_integration`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<
        ResourceList<BaseCapabilityBaseIntegrationApi>
      >(config)
    : getResponse<
        ResourceList<BaseCapabilityBaseIntegrationApi>,
        Partial<BaseCapabilityBaseIntegration>
      >(queryParams?.api ?? _client?.api, config);
};

export const baseCapabilityBaseIntegrationGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<BaseCapabilityBaseIntegration>>,
): Promise<BaseCapabilityBaseIntegrationApi> => {
  const config: QueryParams<Partial<BaseCapabilityBaseIntegration>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/base_capability_base_integration/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapabilityBaseIntegrationApi>(config)
    : getResponse<
        BaseCapabilityBaseIntegrationApi,
        Partial<BaseCapabilityBaseIntegration>
      >(queryParams?.api ?? _client?.api, config);
};
