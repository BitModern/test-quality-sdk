/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { ComponentDocRoute } from '../../routes/Routes';
import type { ComponentDoc } from './ComponentDoc';
import type { ComponentDocHistory } from './ComponentDocHistory';

export const componentDocHistoryGet = (
  queryParams?: QueryParams<ComponentDoc>,
): Promise<ComponentDocHistory[]> => {
  const config: QueryParams<ComponentDoc> = {
    method: 'get',
    url: `${queryParams?.url ?? ComponentDocRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocHistory[]>(config)
    : getResponse<ComponentDocHistory[], ComponentDoc>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
