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
import { DocTemplateRoute } from '../../routes/Routes';
import type { DocTemplate } from './DocTemplate';
import type { DocTemplateApi } from './DocTemplateApi';

export const docTemplateGetMany = (
  queryParams?: QueryParams<DocTemplate>,
): Promise<ResourceList<DocTemplateApi>> => {
  const config: QueryParams<DocTemplate> = {
    method: 'get',
    url: queryParams?.url ?? DocTemplateRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DocTemplateApi>>(config)
    : getResponse<ResourceList<DocTemplateApi>, DocTemplate>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTemplateGetOne = (
  id: number,
  queryParams?: QueryParams<DocTemplate>,
): Promise<DocTemplateApi> => {
  const config: QueryParams<DocTemplate> = {
    method: 'get',
    url: `${queryParams?.url ?? DocTemplateRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocTemplateApi>(config)
    : getResponse<DocTemplateApi, DocTemplate>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTemplateDeleteOne = (
  id: number,
  queryParams?: QueryParams<DocTemplate>,
): Promise<MessageResponse> => {
  const config: QueryParams<DocTemplate> = {
    method: 'delete',
    url: `${queryParams?.url ?? DocTemplateRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DocTemplate>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTemplateDeleteMany = (
  data: Partial<DocTemplate>[],
  queryParams?: QueryParamsWithList<DocTemplate>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DocTemplate> = {
        method: 'post',
        url: queryParams?.url ?? DocTemplateRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, DocTemplate>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const docTemplateUpdateOne = (
  id: number,
  data: Partial<DocTemplate>,
  queryParams?: QueryParams<DocTemplate>,
): Promise<DocTemplate> => {
  const config: QueryParams<DocTemplate> = {
    method: 'put',
    url: `${queryParams?.url ?? DocTemplateRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocTemplate>(config)
    : getResponse<DocTemplate>(queryParams?.api ?? _client?.api, config);
};

export const docTemplateCreateOne = (
  data: Partial<DocTemplate>,
  queryParams?: QueryParams<DocTemplate>,
): Promise<DocTemplate> => {
  const config: QueryParams<DocTemplate> = {
    method: 'post',
    url: queryParams?.url ?? DocTemplateRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocTemplate>(config)
    : getResponse<DocTemplate>(queryParams?.api ?? _client?.api, config);
};

export const docTemplateCreateMany = (
  data: Partial<DocTemplate>[],
  queryParams?: QueryParamsWithList<DocTemplate>,
): Promise<DocTemplate[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DocTemplate> = {
        method: 'post',
        url: queryParams?.url ?? DocTemplateRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DocTemplate[]>(config)
        : getResponse<DocTemplate[], DocTemplate>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
