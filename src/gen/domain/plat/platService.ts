/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PlatRoute } from '../../routes/Routes';
import { Plat } from './Plat';
import { PlatApi } from './PlatApi';

export const platGetMany = (
  queryParams?: QueryParams<Plat>
): Promise<ResourceList<PlatApi>> => {
  const config: QueryParams<Plat> = {
    method: 'get',
    url: queryParams?.url || PlatRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlatApi>>(config)
    : getResponse<ResourceList<PlatApi>, Plat>(
        queryParams?.api || _client?.api,
        config
      );
};

export const platGetOne = (
  id: number,
  queryParams?: QueryParams<Plat>
): Promise<PlatApi> => {
  const config: QueryParams<Plat> = {
    method: 'get',
    url: `${queryParams?.url || PlatRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlatApi>(config)
    : getResponse<PlatApi, Plat>(queryParams?.api || _client?.api, config);
};

export const platDeleteOne = (
  id: number,
  queryParams?: QueryParams<Plat>
): Promise<MessageResponse> => {
  const config: QueryParams<Plat> = {
    method: 'delete',
    url: `${queryParams?.url || PlatRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Plat>(
        queryParams?.api || _client?.api,
        config
      );
};

export const platUpdateOne = (
  id: number,
  data: Partial<Plat>,
  queryParams?: QueryParams<Plat>
): Promise<Plat> => {
  const config: QueryParams<Plat> = {
    method: 'put',
    url: `${queryParams?.url || PlatRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plat>(config)
    : getResponse<Plat>(queryParams?.api || _client?.api, config);
};

export const platCreateOne = (
  data: Partial<Plat>,
  queryParams?: QueryParams<Plat>
): Promise<Plat> => {
  const config: QueryParams<Plat> = {
    method: 'post',
    url: queryParams?.url || PlatRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plat>(config)
    : getResponse<Plat>(queryParams?.api || _client?.api, config);
};
