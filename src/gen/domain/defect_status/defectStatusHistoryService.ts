/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { DefectStatusRoute } from '../../routes/Routes';
import { DefectStatus } from './DefectStatus';
import { DefectStatusHistory } from './DefectStatusHistory';

export const defectStatusHistoryGet = (
  queryParams?: QueryParams<DefectStatus>
): Promise<DefectStatusHistory[]> => {
  const config: QueryParams<DefectStatus> = {
    method: 'get',
    url: `${queryParams?.url || DefectStatusRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectStatusHistory[]>(config)
    : getResponse<DefectStatusHistory[], DefectStatus>(
        queryParams?.api || _client?.api,
        config
      );
};
