/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
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
  queryParams?: QueryParams<Webinar>,
): Promise<ResourceList<WebinarApi>> => {
  const config: QueryParams<Webinar> = {
    method: 'get',
    url: queryParams?.url ?? WebinarRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<WebinarApi>>(config)
    : getResponse<ResourceList<WebinarApi>, Webinar>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const webinarGetOne = (
  id: number,
  queryParams?: QueryParams<Webinar>,
): Promise<WebinarApi> => {
  const config: QueryParams<Webinar> = {
    method: 'get',
    url: `${queryParams?.url ?? WebinarRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<WebinarApi>(config)
    : getResponse<WebinarApi, Webinar>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const webinarDeleteOne = (
  id: number,
  queryParams?: QueryParams<Webinar>,
): Promise<MessageResponse> => {
  const config: QueryParams<Webinar> = {
    method: 'delete',
    url: `${queryParams?.url ?? WebinarRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Webinar>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const webinarUpdateOne = (
  id: number,
  data: Partial<Webinar>,
  queryParams?: QueryParams<Webinar>,
): Promise<Webinar> => {
  const config: QueryParams<Webinar> = {
    method: 'put',
    url: `${queryParams?.url ?? WebinarRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Webinar>(config)
    : getResponse<Webinar>(queryParams?.api ?? _client?.api, config);
};

export const webinarCreateOne = (
  data: Partial<Webinar>,
  queryParams?: QueryParams<Webinar>,
): Promise<Webinar> => {
  const config: QueryParams<Webinar> = {
    method: 'post',
    url: queryParams?.url ?? WebinarRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Webinar>(config)
    : getResponse<Webinar>(queryParams?.api ?? _client?.api, config);
};

export const webinarCreateMany = (
  data: Partial<Webinar>[],
  queryParams?: QueryParamsWithList<Webinar>,
): Promise<Webinar[]> => {
  const config: QueryParamsWithList<Webinar> = {
    method: 'post',
    url: queryParams?.url ?? WebinarRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Webinar[]>(config)
    : getResponse<Webinar[], Webinar>(queryParams?.api ?? _client?.api, config);
};
