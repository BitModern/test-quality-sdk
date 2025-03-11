/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { DataSetRoute } from '../../routes/Routes';
import type { DataSet } from './DataSet';
import type { DataSetHistory } from './DataSetHistory';

export const dataSetHistoryGet = (
  queryParams?: QueryParams<Partial<DataSet>>,
): Promise<DataSetHistory[]> => {
  const config: QueryParams<Partial<DataSet>> = {
    method: 'get',
    url: `${queryParams?.url ?? DataSetRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DataSetHistory[]>(config)
    : getResponse<DataSetHistory[], Partial<DataSet>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
