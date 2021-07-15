/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { DefectResRoute } from '../../routes/Routes';
import { DefectRes } from './DefectRes';
import { DefectResHistory } from './DefectResHistory';

export const defectResHistoryGet = (
  queryParams?: QueryParams<DefectRes>
): Promise<DefectResHistory[]> => {
  const config: QueryParams<DefectRes> = {
    method: 'get',
    url: `${queryParams?.url || DefectResRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResHistory[]>(config)
    : getResponse<DefectResHistory[], DefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};
