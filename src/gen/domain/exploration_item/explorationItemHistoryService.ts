/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { ExplorationItemRoute } from '../../routes/Routes';
import type { ExplorationItem } from './ExplorationItem';
import type { ExplorationItemHistory } from './ExplorationItemHistory';

export const explorationItemHistoryGet = (
  queryParams?: QueryParams<ExplorationItem>,
): Promise<ExplorationItemHistory[]> => {
  const config: QueryParams<ExplorationItem> = {
    method: 'get',
    url: `${queryParams?.url ?? ExplorationItemRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationItemHistory[]>(config)
    : getResponse<ExplorationItemHistory[], ExplorationItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
