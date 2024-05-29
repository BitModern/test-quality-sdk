/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { DocRoute } from '../../routes/Routes';
import type { Doc } from './Doc';
import type { DocHistory } from './DocHistory';

export const docHistoryGet = (
  queryParams?: QueryParams<Doc>,
): Promise<DocHistory[]> => {
  const config: QueryParams<Doc> = {
    method: 'get',
    url: `${queryParams?.url ?? DocRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocHistory[]>(config)
    : getResponse<DocHistory[], Doc>(queryParams?.api ?? _client?.api, config);
};
