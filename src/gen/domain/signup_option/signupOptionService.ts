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
import { SignupOptionRoute } from '../../routes/Routes';
import type { SignupOption } from './SignupOption';
import type { SignupOptionApi } from './SignupOptionApi';

export const signupOptionGetMany = (
  queryParams?: QueryParams<SignupOption>,
): Promise<ResourceList<SignupOptionApi>> => {
  const config: QueryParams<SignupOption> = {
    method: 'get',
    url: queryParams?.url ?? SignupOptionRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SignupOptionApi>>(config)
    : getResponse<ResourceList<SignupOptionApi>, SignupOption>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const signupOptionGetOne = (
  id: number,
  queryParams?: QueryParams<SignupOption>,
): Promise<SignupOptionApi> => {
  const config: QueryParams<SignupOption> = {
    method: 'get',
    url: `${queryParams?.url ?? SignupOptionRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SignupOptionApi>(config)
    : getResponse<SignupOptionApi, SignupOption>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const signupOptionDeleteOne = (
  id: number,
  queryParams?: QueryParams<SignupOption>,
): Promise<MessageResponse> => {
  const config: QueryParams<SignupOption> = {
    method: 'delete',
    url: `${queryParams?.url ?? SignupOptionRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, SignupOption>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const signupOptionUpdateOne = (
  id: number,
  data: Partial<SignupOption>,
  queryParams?: QueryParams<SignupOption>,
): Promise<SignupOption> => {
  const config: QueryParams<SignupOption> = {
    method: 'put',
    url: `${queryParams?.url ?? SignupOptionRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SignupOption>(config)
    : getResponse<SignupOption>(queryParams?.api ?? _client?.api, config);
};

export const signupOptionCreateOne = (
  data: Partial<SignupOption>,
  queryParams?: QueryParams<SignupOption>,
): Promise<SignupOption> => {
  const config: QueryParams<SignupOption> = {
    method: 'post',
    url: queryParams?.url ?? SignupOptionRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SignupOption>(config)
    : getResponse<SignupOption>(queryParams?.api ?? _client?.api, config);
};

export const signupOptionCreateMany = (
  data: Partial<SignupOption>[],
  queryParams?: QueryParamsWithList<SignupOption>,
): Promise<SignupOption[]> => {
  const config: QueryParamsWithList<SignupOption> = {
    method: 'post',
    url: queryParams?.url ?? SignupOptionRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SignupOption[]>(config)
    : getResponse<SignupOption[], SignupOption>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
