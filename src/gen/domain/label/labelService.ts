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
import { LabelRoute } from '../../routes/Routes';
import type { Label } from './Label';
import type { LabelApi } from './LabelApi';

export const labelGetMany = (
  queryParams?: QueryParams<Partial<Label>>,
): Promise<ResourceList<LabelApi>> => {
  const config: QueryParams<Partial<Label>> = {
    method: 'get',
    url: queryParams?.url ?? LabelRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<LabelApi>>(config)
    : getResponse<ResourceList<LabelApi>, Partial<Label>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Label>>,
): Promise<LabelApi> => {
  const config: QueryParams<Partial<Label>> = {
    method: 'get',
    url: `${queryParams?.url ?? LabelRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelApi>(config)
    : getResponse<LabelApi, Partial<Label>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Label>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Label>> = {
    method: 'delete',
    url: `${queryParams?.url ?? LabelRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Label>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelDeleteMany = (
  data: (Partial<Label> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Label> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Label> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? LabelRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Label> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const labelUpdateOne = (
  id: number,
  data: Partial<Label>,
  queryParams?: QueryParams<Partial<Label>>,
): Promise<Label> => {
  const config: QueryParams<Partial<Label>> = {
    method: 'put',
    url: `${queryParams?.url ?? LabelRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Label>(config)
    : getResponse<Label, Partial<Label>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelUpdateMany = (
  data: (Partial<Label> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Label> & { id: number }>,
): Promise<Label[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Label> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? LabelRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Label[]>(config)
        : getResponse<Label[], Partial<Label> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const labelCreateOne = (
  data: Partial<Label>,
  queryParams?: QueryParams<Partial<Label>>,
): Promise<Label> => {
  const config: QueryParams<Partial<Label>> = {
    method: 'post',
    url: queryParams?.url ?? LabelRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Label>(config)
    : getResponse<Label, Partial<Label>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelCreateMany = (
  data: Partial<Label>[],
  queryParams?: QueryParamsWithList<Partial<Label>>,
): Promise<Label[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Label>> = {
        method: 'post',
        url: queryParams?.url ?? LabelRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Label[]>(config)
        : getResponse<Label[], Partial<Label>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
