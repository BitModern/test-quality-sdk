/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { TestQualityRoute } from '../../routes/Routes';
import { TestQuality } from './TestQuality';
import { TestQualityApi } from './TestQualityApi';

export const testQualityGetMany = (
  queryParams?: QueryParams<TestQuality>
): Promise<ResourceList<TestQualityApi>> => {
  const config: QueryParams<TestQuality> = {
    method: 'get',
    url: queryParams?.url || TestQualityRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<TestQualityApi>>(config)
    : getResponse<ResourceList<TestQualityApi>, TestQuality>(
        queryParams?.api || _client?.api,
        config
      );
};

export const testQualityGetOne = (
  id: number,
  queryParams?: QueryParams<TestQuality>
): Promise<TestQualityApi> => {
  const config: QueryParams<TestQuality> = {
    method: 'get',
    url: `${queryParams?.url || TestQualityRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityApi>(config)
    : getResponse<TestQualityApi, TestQuality>(
        queryParams?.api || _client?.api,
        config
      );
};

export const testQualityDeleteOne = (
  id: number,
  queryParams?: QueryParams<TestQuality>
): Promise<MessageResponse> => {
  const config: QueryParams<TestQuality> = {
    method: 'delete',
    url: `${queryParams?.url || TestQualityRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, TestQuality>(
        queryParams?.api || _client?.api,
        config
      );
};

export const testQualityUpdateOne = (
  id: number,
  data: Partial<TestQuality>,
  queryParams?: QueryParams<TestQuality>
): Promise<TestQuality> => {
  const config: QueryParams<TestQuality> = {
    method: 'put',
    url: `${queryParams?.url || TestQualityRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQuality>(config)
    : getResponse<TestQuality>(queryParams?.api || _client?.api, config);
};

export const testQualityCreateOne = (
  data: Partial<TestQuality>,
  queryParams?: QueryParams<TestQuality>
): Promise<TestQuality> => {
  const config: QueryParams<TestQuality> = {
    method: 'post',
    url: queryParams?.url || TestQualityRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQuality>(config)
    : getResponse<TestQuality>(queryParams?.api || _client?.api, config);
};
