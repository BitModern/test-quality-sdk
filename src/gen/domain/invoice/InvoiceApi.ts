/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Invoice } from './Invoice';
import type { AttachmentApi } from '../attachment/AttachmentApi';

export interface InvoiceApi extends Invoice {
  attachment?: AttachmentApi;
}
