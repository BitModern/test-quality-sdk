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
  queryParams?: QueryParams<Partial<Attachment>>,
): Promise<ResourceList<AttachmentApi>> => {
  const config: QueryParams<Partial<Attachment>> = {
    method: 'get',
    url: queryParams?.url ?? AttachmentRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AttachmentApi>>(config)
    : getResponse<ResourceList<AttachmentApi>, Partial<Attachment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const attachmentGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Attachment>>,
): Promise<AttachmentApi> => {
  const config: QueryParams<Partial<Attachment>> = {
    method: 'get',
    url: `${queryParams?.url ?? AttachmentRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AttachmentApi>(config)
    : getResponse<AttachmentApi, Partial<Attachment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const attachmentDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Attachment>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Attachment>> = {
    method: 'delete',
    url: `${queryParams?.url ?? AttachmentRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Attachment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const attachmentDeleteMany = (
  data: (Partial<Attachment> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Attachment> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Attachment> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? AttachmentRoute() + '/delete',
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Attachment> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const attachmentUpdateOne = (
  id: number,
  data: Partial<Attachment>,
  queryParams?: QueryParams<Partial<Attachment>>,
): Promise<Attachment> => {
  const config: QueryParams<Partial<Attachment>> = {
    method: 'put',
    url: `${queryParams?.url ?? AttachmentRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Attachment>(config)
    : getResponse<Attachment, Partial<Attachment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const attachmentUpdateMany = (
  data: (Partial<Attachment> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Attachment> & { id: number }>,
): Promise<Attachment[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Attachment> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? AttachmentRoute(),
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Attachment[]>(config)
        : getResponse<Attachment[], Partial<Attachment> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const attachmentCreateOne = (
  data: Partial<Attachment>,
  queryParams?: QueryParams<Partial<Attachment>>,
): Promise<Attachment> => {
  const config: QueryParams<Partial<Attachment>> = {
    method: 'post',
    url: queryParams?.url ?? AttachmentRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Attachment>(config)
    : getResponse<Attachment, Partial<Attachment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const attachmentCreateMany = (
  data: Partial<Attachment>[],
  queryParams?: QueryParamsWithList<Partial<Attachment>>,
): Promise<Attachment[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Attachment>> = {
        method: 'post',
        url: queryParams?.url ?? AttachmentRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Attachment[]>(config)
        : getResponse<Attachment[], Partial<Attachment>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
