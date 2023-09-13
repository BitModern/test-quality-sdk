/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface Coupon extends DefaultAttributes {
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  id: number;
  email_addresses?: any;
  percent_off?: number;
  name: string;
  is_universal: boolean;
  redeem_by?: string;
  code: string;
  description?: string;
  duration: string;
  amount_off?: number;
  currency?: string;
  duration_in_months?: number;
  max_redemptions?: number;
  is_active: boolean;
  product_id?: number;
}
