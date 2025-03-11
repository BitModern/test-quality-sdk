/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { ExplorationRoute } from '../../routes/Routes';
import type { Exploration } from './Exploration';
import type { ExplorationHistory } from './ExplorationHistory';

export const explorationHistoryGet = (
  queryParams?: QueryParams<Partial<Exploration>>,
): Promise<ExplorationHistory[]> => {
  const config: QueryParams<Partial<Exploration>> = {
    method: 'get',
    url: `${queryParams?.url ?? ExplorationRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationHistory[]>(config)
    : getResponse<ExplorationHistory[], Partial<Exploration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
