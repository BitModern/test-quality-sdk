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
import { WebinarRoute } from '../../routes/Routes';
import type { Webinar } from './Webinar';
import type { WebinarApi } from './WebinarApi';

export const webinarGetMany = (
  queryParams?: QueryParams<Partial<Webinar>>,
): Promise<ResourceList<WebinarApi>> => {
  const config: QueryParams<Partial<Webinar>> = {
    method: 'get',
    url: queryParams?.url ?? WebinarRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<WebinarApi>>(config)
    : getResponse<ResourceList<WebinarApi>, Partial<Webinar>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const webinarGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Webinar>>,
): Promise<WebinarApi> => {
  const config: QueryParams<Partial<Webinar>> = {
    method: 'get',
    url: `${queryParams?.url ?? WebinarRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<WebinarApi>(config)
    : getResponse<WebinarApi, Partial<Webinar>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const webinarDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Webinar>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Webinar>> = {
    method: 'delete',
    url: `${queryParams?.url ?? WebinarRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Webinar>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const webinarDeleteMany = (
  data: (Partial<Webinar> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Webinar> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Webinar> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? WebinarRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Webinar> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const webinarUpdateOne = (
  id: number,
  data: Partial<Webinar>,
  queryParams?: QueryParams<Partial<Webinar>>,
): Promise<Webinar> => {
  const config: QueryParams<Partial<Webinar>> = {
    method: 'put',
    url: `${queryParams?.url ?? WebinarRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Webinar>(config)
    : getResponse<Webinar, Partial<Webinar>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const webinarUpdateMany = (
  data: (Partial<Webinar> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Webinar> & { id: number }>,
): Promise<Webinar[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Webinar> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? WebinarRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Webinar[]>(config)
        : getResponse<Webinar[], Partial<Webinar> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const webinarCreateOne = (
  data: Partial<Webinar>,
  queryParams?: QueryParams<Partial<Webinar>>,
): Promise<Webinar> => {
  const config: QueryParams<Partial<Webinar>> = {
    method: 'post',
    url: queryParams?.url ?? WebinarRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Webinar>(config)
    : getResponse<Webinar, Partial<Webinar>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const webinarCreateMany = (
  data: Partial<Webinar>[],
  queryParams?: QueryParamsWithList<Partial<Webinar>>,
): Promise<Webinar[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Webinar>> = {
        method: 'post',
        url: queryParams?.url ?? WebinarRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Webinar[]>(config)
        : getResponse<Webinar[], Partial<Webinar>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
