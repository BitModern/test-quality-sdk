/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { PriceRoute } from '../../routes/Routes';
import type { Price } from './Price';
import type { PriceHistory } from './PriceHistory';

export const priceHistoryGet = (
  queryParams?: QueryParams<Partial<Price>>,
): Promise<PriceHistory[]> => {
  const config: QueryParams<Partial<Price>> = {
    method: 'get',
    url: `${queryParams?.url ?? PriceRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PriceHistory[]>(config)
    : getResponse<PriceHistory[], Partial<Price>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
