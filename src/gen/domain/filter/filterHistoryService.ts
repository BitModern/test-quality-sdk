/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { FilterRoute } from '../../routes/Routes';
import { Filter } from './Filter';
import { FilterHistory } from './FilterHistory';

export const filterHistoryGet = (
  queryParams?: QueryParams<Filter>
): Promise<FilterHistory[]> => {
  const config: QueryParams<Filter> = {
    method: 'get',
    url: `${queryParams?.url || FilterRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<FilterHistory[]>(config)
    : getResponse<FilterHistory[], Filter>(
        queryParams?.api || _client?.api,
        config
      );
};
