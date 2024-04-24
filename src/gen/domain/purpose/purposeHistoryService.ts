/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { PurposeRoute } from '../../routes/Routes';
import type { Purpose } from './Purpose';
import type { PurposeHistory } from './PurposeHistory';

export const purposeHistoryGet = (
  queryParams?: QueryParams<Purpose>,
): Promise<PurposeHistory[]> => {
  const config: QueryParams<Purpose> = {
    method: 'get',
    url: `${queryParams?.url ?? PurposeRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PurposeHistory[]>(config)
    : getResponse<PurposeHistory[], Purpose>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
