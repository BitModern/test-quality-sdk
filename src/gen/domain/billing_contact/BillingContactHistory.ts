/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { BillingContact } from './BillingContact';

export interface BillingContactHistory extends BillingContact {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
