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
import { DocTypeRoute } from '../../routes/Routes';
import type { DocType } from './DocType';
import type { DocTypeApi } from './DocTypeApi';

export const docTypeGetMany = (
  queryParams?: QueryParams<DocType>,
): Promise<ResourceList<DocTypeApi>> => {
  const config: QueryParams<DocType> = {
    method: 'get',
    url: queryParams?.url ?? DocTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DocTypeApi>>(config)
    : getResponse<ResourceList<DocTypeApi>, DocType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTypeGetOne = (
  id: number,
  queryParams?: QueryParams<DocType>,
): Promise<DocTypeApi> => {
  const config: QueryParams<DocType> = {
    method: 'get',
    url: `${queryParams?.url ?? DocTypeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocTypeApi>(config)
    : getResponse<DocTypeApi, DocType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTypeDeleteOne = (
  id: number,
  queryParams?: QueryParams<DocType>,
): Promise<MessageResponse> => {
  const config: QueryParams<DocType> = {
    method: 'delete',
    url: `${queryParams?.url ?? DocTypeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DocType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTypeDeleteMany = (
  data: Partial<DocType>[],
  queryParams?: QueryParamsWithList<DocType>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DocType> = {
        method: 'post',
        url: queryParams?.url ?? DocTypeRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, DocType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const docTypeUpdateOne = (
  id: number,
  data: Partial<DocType>,
  queryParams?: QueryParams<DocType>,
): Promise<DocType> => {
  const config: QueryParams<DocType> = {
    method: 'put',
    url: `${queryParams?.url ?? DocTypeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocType>(config)
    : getResponse<DocType>(queryParams?.api ?? _client?.api, config);
};

export const docTypeCreateOne = (
  data: Partial<DocType>,
  queryParams?: QueryParams<DocType>,
): Promise<DocType> => {
  const config: QueryParams<DocType> = {
    method: 'post',
    url: queryParams?.url ?? DocTypeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocType>(config)
    : getResponse<DocType>(queryParams?.api ?? _client?.api, config);
};

export const docTypeCreateMany = (
  data: Partial<DocType>[],
  queryParams?: QueryParamsWithList<DocType>,
): Promise<DocType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DocType> = {
        method: 'post',
        url: queryParams?.url ?? DocTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DocType[]>(config)
        : getResponse<DocType[], DocType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
