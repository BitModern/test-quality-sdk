/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Invoice } from './Invoice';

export interface InvoiceHistory extends Invoice {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
