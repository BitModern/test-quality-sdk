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
import type { CapabilityIntegration } from './CapabilityIntegration';
import type { CapabilityIntegrationApi } from './CapabilityIntegrationApi';

export const capabilityIntegrationDetach = (
  data: Partial<CapabilityIntegration>,
  queryParams?: QueryParams<CapabilityIntegration>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<CapabilityIntegration> = {
    method: 'delete',
    url: `/capability_integration/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CapabilityIntegration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const capabilityIntegrationDeleteMany = (
  data: (Partial<CapabilityIntegration> & { id: number })[],
  queryParams?: QueryParamsWithList<CapabilityIntegration>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CapabilityIntegration> = {
        method: 'post',
        url: `/capability_integration/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, CapabilityIntegration>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const capabilityIntegrationUpdateOne = (
  id: number,
  data: Partial<CapabilityIntegration>,
  queryParams?: QueryParams<CapabilityIntegration>,
): Promise<CapabilityIntegration> => {
  const config: QueryParams<CapabilityIntegration> = {
    method: 'put',
    url: `/capability_integration/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CapabilityIntegration>(config)
    : getResponse<CapabilityIntegration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const capabilityIntegrationUpdateMany = (
  data: (Partial<CapabilityIntegration> & { id: number })[],
  queryParams?: QueryParamsWithList<CapabilityIntegration>,
): Promise<CapabilityIntegration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CapabilityIntegration> = {
        method: 'post',
        url: queryParams?.url ?? `/capability_integration`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CapabilityIntegration[]>(config)
        : getResponse<CapabilityIntegration[], CapabilityIntegration>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const capabilityIntegrationCreateOne = (
  data: Partial<CapabilityIntegration>,
  queryParams?: QueryParams<CapabilityIntegration>,
): Promise<CapabilityIntegration> => {
  const config: QueryParams<CapabilityIntegration> = {
    method: 'post',
    url: queryParams?.url ?? `/capability_integration`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CapabilityIntegration>(config)
    : getResponse<CapabilityIntegration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const capabilityIntegrationCreateMany = (
  data: Partial<CapabilityIntegration>[],
  queryParams?: QueryParamsWithList<CapabilityIntegration>,
): Promise<CapabilityIntegration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<CapabilityIntegration> = {
        method: 'post',
        url: queryParams?.url ?? `/capability_integration`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CapabilityIntegration[]>(config)
        : getResponse<CapabilityIntegration[], CapabilityIntegration>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const capabilityIntegrationGetMany = (
  queryParams?: QueryParams<CapabilityIntegration>,
): Promise<ResourceList<CapabilityIntegrationApi>> => {
  const config: QueryParams<CapabilityIntegration> = {
    method: 'get',
    url: queryParams?.url ?? `/capability_integration`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CapabilityIntegrationApi>>(config)
    : getResponse<
        ResourceList<CapabilityIntegrationApi>,
        CapabilityIntegration
      >(queryParams?.api ?? _client?.api, config);
};

export const capabilityIntegrationGetOne = (
  id: number,
  queryParams?: QueryParams<CapabilityIntegration>,
): Promise<CapabilityIntegrationApi> => {
  const config: QueryParams<CapabilityIntegration> = {
    method: 'get',
    url: `${queryParams?.url ?? `/capability_integration/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CapabilityIntegrationApi>(config)
    : getResponse<CapabilityIntegrationApi, CapabilityIntegration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
