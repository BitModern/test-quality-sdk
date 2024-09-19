/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { StripeProduct } from './StripeProduct';

export interface StripeProductHistory extends StripeProduct {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
