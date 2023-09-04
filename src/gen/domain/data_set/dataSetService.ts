/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { DataSetRoute } from '../../routes/Routes';
import { DataSet } from './DataSet';
import { DataSetApi } from './DataSetApi';

export const dataSetGetMany = (
  queryParams?: QueryParams<DataSet>
): Promise<ResourceList<DataSetApi>> => {
  const config: QueryParams<DataSet> = {
    method: 'get',
    url: queryParams?.url || DataSetRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DataSetApi>>(config)
    : getResponse<ResourceList<DataSetApi>, DataSet>(
        queryParams?.api || _client?.api,
        config
      );
};

export const dataSetGetOne = (
  id: number,
  queryParams?: QueryParams<DataSet>
): Promise<DataSetApi> => {
  const config: QueryParams<DataSet> = {
    method: 'get',
    url: `${queryParams?.url || DataSetRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DataSetApi>(config)
    : getResponse<DataSetApi, DataSet>(
        queryParams?.api || _client?.api,
        config
      );
};

export const dataSetDeleteOne = (
  id: number,
  queryParams?: QueryParams<DataSet>
): Promise<MessageResponse> => {
  const config: QueryParams<DataSet> = {
    method: 'delete',
    url: `${queryParams?.url || DataSetRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DataSet>(
        queryParams?.api || _client?.api,
        config
      );
};

export const dataSetUpdateOne = (
  id: number,
  data: Partial<DataSet>,
  queryParams?: QueryParams<DataSet>
): Promise<DataSet> => {
  const config: QueryParams<DataSet> = {
    method: 'put',
    url: `${queryParams?.url || DataSetRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DataSet>(config)
    : getResponse<DataSet>(queryParams?.api || _client?.api, config);
};

export const dataSetCreateOne = (
  data: Partial<DataSet>,
  queryParams?: QueryParams<DataSet>
): Promise<DataSet> => {
  const config: QueryParams<DataSet> = {
    method: 'post',
    url: queryParams?.url || DataSetRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DataSet>(config)
    : getResponse<DataSet>(queryParams?.api || _client?.api, config);
};
