/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PurposeRoute } from '../../routes/Routes';
import { Purpose } from './Purpose';
import { PurposeApi } from './PurposeApi';

export const purposeGetMany = (
  queryParams?: QueryParams<Purpose>
): Promise<ResourceList<PurposeApi>> => {
  const config: QueryParams<Purpose> = {
    method: 'get',
    url: queryParams?.url || PurposeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PurposeApi>>(config)
    : getResponse<ResourceList<PurposeApi>, Purpose>(
        queryParams?.api || _client?.api,
        config
      );
};

export const purposeGetOne = (
  id: number,
  queryParams?: QueryParams<Purpose>
): Promise<PurposeApi> => {
  const config: QueryParams<Purpose> = {
    method: 'get',
    url: `${queryParams?.url || PurposeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PurposeApi>(config)
    : getResponse<PurposeApi, Purpose>(
        queryParams?.api || _client?.api,
        config
      );
};

export const purposeDeleteOne = (
  id: number,
  queryParams?: QueryParams<Purpose>
): Promise<MessageResponse> => {
  const config: QueryParams<Purpose> = {
    method: 'delete',
    url: `${queryParams?.url || PurposeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Purpose>(
        queryParams?.api || _client?.api,
        config
      );
};

export const purposeUpdateOne = (
  id: number,
  data: Partial<Purpose>,
  queryParams?: QueryParams<Purpose>
): Promise<Purpose> => {
  const config: QueryParams<Purpose> = {
    method: 'put',
    url: `${queryParams?.url || PurposeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Purpose>(config)
    : getResponse<Purpose>(queryParams?.api || _client?.api, config);
};

export const purposeCreateOne = (
  data: Partial<Purpose>,
  queryParams?: QueryParams<Purpose>
): Promise<Purpose> => {
  const config: QueryParams<Purpose> = {
    method: 'post',
    url: queryParams?.url || PurposeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Purpose>(config)
    : getResponse<Purpose>(queryParams?.api || _client?.api, config);
};
