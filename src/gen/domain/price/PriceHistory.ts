/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Price } from './Price';

export interface PriceHistory extends Price {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
