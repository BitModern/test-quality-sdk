/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { DataSetRoute } from '../../routes/Routes';
import { DataSet } from './DataSet';
import { DataSetHistory } from './DataSetHistory';

export const dataSetHistoryGet = (
  queryParams?: QueryParams<DataSet>
): Promise<DataSetHistory[]> => {
  const config: QueryParams<DataSet> = {
    method: 'get',
    url: `${queryParams?.url || DataSetRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DataSetHistory[]>(config)
    : getResponse<DataSetHistory[], DataSet>(
        queryParams?.api || _client?.api,
        config
      );
};
