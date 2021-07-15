/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { DefectRoute } from '../../routes/Routes';
import { Defect } from './Defect';
import { DefectHistory } from './DefectHistory';

export const defectHistoryGet = (
  queryParams?: QueryParams<Defect>
): Promise<DefectHistory[]> => {
  const config: QueryParams<Defect> = {
    method: 'get',
    url: `${queryParams?.url || DefectRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectHistory[]>(config)
    : getResponse<DefectHistory[], Defect>(
        queryParams?.api || _client?.api,
        config
      );
};
