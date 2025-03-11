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
import type { DefectExplorationItem } from './DefectExplorationItem';
import type { DefectExplorationItemApi } from './DefectExplorationItemApi';

export const defectExplorationItemDetach = (
  data: Partial<DefectExplorationItem>,
  queryParams?: QueryParams<Partial<DefectExplorationItem>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<DefectExplorationItem>> = {
    method: 'delete',
    url: `/defect_exploration_item/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<DefectExplorationItem>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectExplorationItemDeleteMany = (
  data: (Partial<DefectExplorationItem> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<DefectExplorationItem & { id: number }>
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<DefectExplorationItem> & { id: number }
      > = {
        method: 'post',
        url: `/defect_exploration_item/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<DefectExplorationItem> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const defectExplorationItemUpdateOne = (
  id: number,
  data: Partial<DefectExplorationItem>,
  queryParams?: QueryParams<Partial<DefectExplorationItem>>,
): Promise<DefectExplorationItem> => {
  const config: QueryParams<Partial<DefectExplorationItem>> = {
    method: 'put',
    url: `/defect_exploration_item/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectExplorationItem>(config)
    : getResponse<DefectExplorationItem, Partial<DefectExplorationItem>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectExplorationItemUpdateMany = (
  data: (Partial<DefectExplorationItem> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<DefectExplorationItem> & { id: number }
  >,
): Promise<DefectExplorationItem[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<DefectExplorationItem> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/defect_exploration_item`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectExplorationItem[]>(config)
        : getResponse<
            DefectExplorationItem[],
            Partial<DefectExplorationItem> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const defectExplorationItemCreateOne = (
  data: Partial<DefectExplorationItem>,
  queryParams?: QueryParams<Partial<DefectExplorationItem>>,
): Promise<DefectExplorationItem> => {
  const config: QueryParams<Partial<DefectExplorationItem>> = {
    method: 'post',
    url: queryParams?.url ?? `/defect_exploration_item`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectExplorationItem>(config)
    : getResponse<DefectExplorationItem, Partial<DefectExplorationItem>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectExplorationItemCreateMany = (
  data: Partial<DefectExplorationItem>[],
  queryParams?: QueryParamsWithList<Partial<DefectExplorationItem>>,
): Promise<DefectExplorationItem[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<DefectExplorationItem>> = {
        method: 'post',
        url: queryParams?.url ?? `/defect_exploration_item`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectExplorationItem[]>(config)
        : getResponse<DefectExplorationItem[], Partial<DefectExplorationItem>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectExplorationItemGetMany = (
  queryParams?: QueryParams<Partial<DefectExplorationItem>>,
): Promise<ResourceList<DefectExplorationItemApi>> => {
  const config: QueryParams<Partial<DefectExplorationItem>> = {
    method: 'get',
    url: queryParams?.url ?? `/defect_exploration_item`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectExplorationItemApi>>(config)
    : getResponse<
        ResourceList<DefectExplorationItemApi>,
        Partial<DefectExplorationItem>
      >(queryParams?.api ?? _client?.api, config);
};

export const defectExplorationItemGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<DefectExplorationItem>>,
): Promise<DefectExplorationItemApi> => {
  const config: QueryParams<Partial<DefectExplorationItem>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/defect_exploration_item/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectExplorationItemApi>(config)
    : getResponse<DefectExplorationItemApi, Partial<DefectExplorationItem>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
