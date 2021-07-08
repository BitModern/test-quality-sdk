/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../Client';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { LabelRoute } from '../../routes/Routes';
import { Label } from './Label';
import { LabelHistory } from './LabelHistory';

export const labelHistoryGet = (
  queryParams?: QueryParams<Label>
): Promise<LabelHistory[]> => {
  const config: QueryParams<Label> = {
    method: 'get',
    url: `${queryParams?.url || LabelRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelHistory[]>(config)
    : getResponse<LabelHistory[], Label>(
        queryParams?.api || _client?.api,
        config
      );
};
