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
import { SignupOptionRoute } from '../../routes/Routes';
import type { SignupOption } from './SignupOption';
import type { SignupOptionApi } from './SignupOptionApi';

export const signupOptionGetMany = (
  queryParams?: QueryParams<Partial<SignupOption>>,
): Promise<ResourceList<SignupOptionApi>> => {
  const config: QueryParams<Partial<SignupOption>> = {
    method: 'get',
    url: queryParams?.url ?? SignupOptionRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SignupOptionApi>>(config)
    : getResponse<ResourceList<SignupOptionApi>, Partial<SignupOption>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const signupOptionGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<SignupOption>>,
): Promise<SignupOptionApi> => {
  const config: QueryParams<Partial<SignupOption>> = {
    method: 'get',
    url: `${queryParams?.url ?? SignupOptionRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SignupOptionApi>(config)
    : getResponse<SignupOptionApi, Partial<SignupOption>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const signupOptionDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<SignupOption>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<SignupOption>> = {
    method: 'delete',
    url: `${queryParams?.url ?? SignupOptionRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<SignupOption>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const signupOptionDeleteMany = (
  data: (Partial<SignupOption> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<SignupOption> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<SignupOption> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? SignupOptionRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<SignupOption> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const signupOptionUpdateOne = (
  id: number,
  data: Partial<SignupOption>,
  queryParams?: QueryParams<Partial<SignupOption>>,
): Promise<SignupOption> => {
  const config: QueryParams<Partial<SignupOption>> = {
    method: 'put',
    url: `${queryParams?.url ?? SignupOptionRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SignupOption>(config)
    : getResponse<SignupOption, Partial<SignupOption>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const signupOptionUpdateMany = (
  data: (Partial<SignupOption> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<SignupOption> & { id: number }>,
): Promise<SignupOption[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<SignupOption> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? SignupOptionRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SignupOption[]>(config)
        : getResponse<SignupOption[], Partial<SignupOption> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const signupOptionCreateOne = (
  data: Partial<SignupOption>,
  queryParams?: QueryParams<Partial<SignupOption>>,
): Promise<SignupOption> => {
  const config: QueryParams<Partial<SignupOption>> = {
    method: 'post',
    url: queryParams?.url ?? SignupOptionRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SignupOption>(config)
    : getResponse<SignupOption, Partial<SignupOption>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const signupOptionCreateMany = (
  data: Partial<SignupOption>[],
  queryParams?: QueryParamsWithList<Partial<SignupOption>>,
): Promise<SignupOption[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<SignupOption>> = {
        method: 'post',
        url: queryParams?.url ?? SignupOptionRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SignupOption[]>(config)
        : getResponse<SignupOption[], Partial<SignupOption>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
