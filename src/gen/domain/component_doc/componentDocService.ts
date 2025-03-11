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
import { ComponentDocRoute } from '../../routes/Routes';
import type { ComponentDoc } from './ComponentDoc';
import type { ComponentDocApi } from './ComponentDocApi';

export const componentDocGetMany = (
  queryParams?: QueryParams<Partial<ComponentDoc>>,
): Promise<ResourceList<ComponentDocApi>> => {
  const config: QueryParams<Partial<ComponentDoc>> = {
    method: 'get',
    url: queryParams?.url ?? ComponentDocRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ComponentDocApi>>(config)
    : getResponse<ResourceList<ComponentDocApi>, Partial<ComponentDoc>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<ComponentDoc>>,
): Promise<ComponentDocApi> => {
  const config: QueryParams<Partial<ComponentDoc>> = {
    method: 'get',
    url: `${queryParams?.url ?? ComponentDocRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocApi>(config)
    : getResponse<ComponentDocApi, Partial<ComponentDoc>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<ComponentDoc>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<ComponentDoc>> = {
    method: 'delete',
    url: `${queryParams?.url ?? ComponentDocRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<ComponentDoc>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocDeleteMany = (
  data: (Partial<ComponentDoc> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<ComponentDoc> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ComponentDoc> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<ComponentDoc> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const componentDocUpdateOne = (
  id: number,
  data: Partial<ComponentDoc>,
  queryParams?: QueryParams<Partial<ComponentDoc>>,
): Promise<ComponentDoc> => {
  const config: QueryParams<Partial<ComponentDoc>> = {
    method: 'put',
    url: `${queryParams?.url ?? ComponentDocRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDoc>(config)
    : getResponse<ComponentDoc, Partial<ComponentDoc>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocUpdateMany = (
  data: (Partial<ComponentDoc> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<ComponentDoc> & { id: number }>,
): Promise<ComponentDoc[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ComponentDoc> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ComponentDoc[]>(config)
        : getResponse<ComponentDoc[], Partial<ComponentDoc> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const componentDocCreateOne = (
  data: Partial<ComponentDoc>,
  queryParams?: QueryParams<Partial<ComponentDoc>>,
): Promise<ComponentDoc> => {
  const config: QueryParams<Partial<ComponentDoc>> = {
    method: 'post',
    url: queryParams?.url ?? ComponentDocRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDoc>(config)
    : getResponse<ComponentDoc, Partial<ComponentDoc>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocCreateMany = (
  data: Partial<ComponentDoc>[],
  queryParams?: QueryParamsWithList<Partial<ComponentDoc>>,
): Promise<ComponentDoc[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<ComponentDoc>> = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ComponentDoc[]>(config)
        : getResponse<ComponentDoc[], Partial<ComponentDoc>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
