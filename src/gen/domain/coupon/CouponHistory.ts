/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Coupon } from './Coupon';

export interface CouponHistory extends Coupon {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
