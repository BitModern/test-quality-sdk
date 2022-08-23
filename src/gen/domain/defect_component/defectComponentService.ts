/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { DefectComponentRoute } from '../../routes/Routes';
import { DefectComponent } from './DefectComponent';
import { DefectComponentApi } from './DefectComponentApi';

export const defectComponentGetMany = (
  queryParams?: QueryParams<DefectComponent>
): Promise<ResourceList<DefectComponentApi>> => {
  const config: QueryParams<DefectComponent> = {
    method: 'get',
    url: queryParams?.url || DefectComponentRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectComponentApi>>(config)
    : getResponse<ResourceList<DefectComponentApi>, DefectComponent>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectComponentGetOne = (
  id: number,
  queryParams?: QueryParams<DefectComponent>
): Promise<DefectComponentApi> => {
  const config: QueryParams<DefectComponent> = {
    method: 'get',
    url: `${queryParams?.url || DefectComponentRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectComponentApi>(config)
    : getResponse<DefectComponentApi, DefectComponent>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectComponentDeleteOne = (
  id: number,
  queryParams?: QueryParams<DefectComponent>
): Promise<MessageResponse> => {
  const config: QueryParams<DefectComponent> = {
    method: 'delete',
    url: `${queryParams?.url || DefectComponentRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DefectComponent>(
        queryParams?.api || _client?.api,
        config
      );
};

export const defectComponentUpdateOne = (
  id: number,
  data: Partial<DefectComponent>,
  queryParams?: QueryParams<DefectComponent>
): Promise<DefectComponent> => {
  const config: QueryParams<DefectComponent> = {
    method: 'put',
    url: `${queryParams?.url || DefectComponentRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectComponent>(config)
    : getResponse<DefectComponent>(queryParams?.api || _client?.api, config);
};

export const defectComponentCreateOne = (
  data: Partial<DefectComponent>,
  queryParams?: QueryParams<DefectComponent>
): Promise<DefectComponent> => {
  const config: QueryParams<DefectComponent> = {
    method: 'post',
    url: queryParams?.url || DefectComponentRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectComponent>(config)
    : getResponse<DefectComponent>(queryParams?.api || _client?.api, config);
};
