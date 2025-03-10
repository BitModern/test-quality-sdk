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
import { AttachmentRoute } from '../../routes/Routes';
import type { Attachment } from './Attachment';
import type { AttachmentApi } from './AttachmentApi';

export const attachmentGetMany = (
  queryParams?: QueryParams<Attachment>,
): Promise<ResourceList<AttachmentApi>> => {
  const config: QueryParams<Attachment> = {
    method: 'get',
    url: queryParams?.url ?? AttachmentRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AttachmentApi>>(config)
    : getResponse<ResourceList<AttachmentApi>, Attachment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const attachmentGetOne = (
  id: number,
  queryParams?: QueryParams<Attachment>,
): Promise<AttachmentApi> => {
  const config: QueryParams<Attachment> = {
    method: 'get',
    url: `${queryParams?.url ?? AttachmentRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AttachmentApi>(config)
    : getResponse<AttachmentApi, Attachment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const attachmentDeleteOne = (
  id: number,
  queryParams?: QueryParams<Attachment>,
): Promise<MessageResponse> => {
  const config: QueryParams<Attachment> = {
    method: 'delete',
    url: `${queryParams?.url ?? AttachmentRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Attachment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const attachmentDeleteMany = (
  data: Partial<Attachment>[],
  queryParams?: QueryParamsWithList<Attachment>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Attachment> = {
        method: 'post',
        url: queryParams?.url ?? AttachmentRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Attachment>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const attachmentUpdateOne = (
  id: number,
  data: Partial<Attachment>,
  queryParams?: QueryParams<Attachment>,
): Promise<Attachment> => {
  const config: QueryParams<Attachment> = {
    method: 'put',
    url: `${queryParams?.url ?? AttachmentRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Attachment>(config)
    : getResponse<Attachment>(queryParams?.api ?? _client?.api, config);
};

export const attachmentCreateOne = (
  data: Partial<Attachment>,
  queryParams?: QueryParams<Attachment>,
): Promise<Attachment> => {
  const config: QueryParams<Attachment> = {
    method: 'post',
    url: queryParams?.url ?? AttachmentRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Attachment>(config)
    : getResponse<Attachment>(queryParams?.api ?? _client?.api, config);
};

export const attachmentCreateMany = (
  data: Partial<Attachment>[],
  queryParams?: QueryParamsWithList<Attachment>,
): Promise<Attachment[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Attachment> = {
        method: 'post',
        url: queryParams?.url ?? AttachmentRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Attachment[]>(config)
        : getResponse<Attachment[], Attachment>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
