/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { ProductRoute } from '../../routes/Routes';
import { Product } from './Product';
import { ProductHistory } from './ProductHistory';

export const productHistoryGet = (
  queryParams?: QueryParams<Product>
): Promise<ProductHistory[]> => {
  const config: QueryParams<Product> = {
    method: 'get',
    url: `${queryParams?.url || ProductRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProductHistory[]>(config)
    : getResponse<ProductHistory[], Product>(
        queryParams?.api || _client?.api,
        config
      );
};
