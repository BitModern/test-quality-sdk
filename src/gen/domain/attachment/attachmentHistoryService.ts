/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { AttachmentRoute } from '../../routes/Routes';
import type { Attachment } from './Attachment';
import type { AttachmentHistory } from './AttachmentHistory';

export const attachmentHistoryGet = (
  queryParams?: QueryParams<Partial<Attachment>>,
): Promise<AttachmentHistory[]> => {
  const config: QueryParams<Partial<Attachment>> = {
    method: 'get',
    url: `${queryParams?.url ?? AttachmentRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AttachmentHistory[]>(config)
    : getResponse<AttachmentHistory[], Partial<Attachment>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
