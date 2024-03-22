/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { InvoiceRoute } from '../../routes/Routes';
import { Invoice } from './Invoice';
import { InvoiceHistory } from './InvoiceHistory';

export const invoiceHistoryGet = (
  queryParams?: QueryParams<Invoice>,
): Promise<InvoiceHistory[]> => {
  const config: QueryParams<Invoice> = {
    method: 'get',
    url: `${queryParams?.url || InvoiceRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<InvoiceHistory[]>(config)
    : getResponse<InvoiceHistory[], Invoice>(
        queryParams?.api || _client?.api,
        config,
      );
};
