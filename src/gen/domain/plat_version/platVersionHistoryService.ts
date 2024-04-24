/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { PlatVersionRoute } from '../../routes/Routes';
import type { PlatVersion } from './PlatVersion';
import type { PlatVersionHistory } from './PlatVersionHistory';

export const platVersionHistoryGet = (
  queryParams?: QueryParams<PlatVersion>,
): Promise<PlatVersionHistory[]> => {
  const config: QueryParams<PlatVersion> = {
    method: 'get',
    url: `${queryParams?.url ?? PlatVersionRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlatVersionHistory[]>(config)
    : getResponse<PlatVersionHistory[], PlatVersion>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
