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
import type { DefectExplorationItem } from './DefectExplorationItem';
import type { DefectExplorationItemApi } from './DefectExplorationItemApi';

export const defectExplorationItemDetach = (
  data: Partial<DefectExplorationItem>,
  queryParams?: QueryParams<DefectExplorationItem>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<DefectExplorationItem> = {
    method: 'delete',
    url: `/defect_exploration_item/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DefectExplorationItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectExplorationItemUpdateOne = (
  id: number,
  data: Partial<DefectExplorationItem>,
  queryParams?: QueryParams<DefectExplorationItem>,
): Promise<DefectExplorationItem> => {
  const config: QueryParams<DefectExplorationItem> = {
    method: 'put',
    url: `/defect_exploration_item/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectExplorationItem>(config)
    : getResponse<DefectExplorationItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectExplorationItemCreateOne = (
  data: Partial<DefectExplorationItem>,
  queryParams?: QueryParams<DefectExplorationItem>,
): Promise<DefectExplorationItem> => {
  const config: QueryParams<DefectExplorationItem> = {
    method: 'post',
    url: queryParams?.url ?? `/defect_exploration_item`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectExplorationItem>(config)
    : getResponse<DefectExplorationItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectExplorationItemCreateMany = (
  data: Partial<DefectExplorationItem>[],
  queryParams?: QueryParamsWithList<DefectExplorationItem>,
): Promise<DefectExplorationItem[]> => {
  const config: QueryParamsWithList<DefectExplorationItem> = {
    method: 'post',
    url: queryParams?.url ?? `/defect_exploration_item`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectExplorationItem[]>(config)
    : getResponse<DefectExplorationItem[], DefectExplorationItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectExplorationItemGetMany = (
  queryParams?: QueryParams<DefectExplorationItem>,
): Promise<ResourceList<DefectExplorationItemApi>> => {
  const config: QueryParams<DefectExplorationItem> = {
    method: 'get',
    url: queryParams?.url ?? `/defect_exploration_item`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectExplorationItemApi>>(config)
    : getResponse<
        ResourceList<DefectExplorationItemApi>,
        DefectExplorationItem
      >(queryParams?.api ?? _client?.api, config);
};

export const defectExplorationItemGetOne = (
  id: number,
  queryParams?: QueryParams<DefectExplorationItem>,
): Promise<DefectExplorationItemApi> => {
  const config: QueryParams<DefectExplorationItem> = {
    method: 'get',
    url: `${queryParams?.url ?? `/defect_exploration_item/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectExplorationItemApi>(config)
    : getResponse<DefectExplorationItemApi, DefectExplorationItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
