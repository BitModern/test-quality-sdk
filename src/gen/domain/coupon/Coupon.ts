/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface Coupon extends KeyedModel {
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  id: number;
  percent_off?: number;
  name: string;
  redeem_by?: string;
  code: string;
  description?: string;
  duration: string;
  amount_off?: number;
  currency?: string;
  duration_in_months?: number;
  max_redemptions?: number;
  is_active: boolean;
  client_id: number;
}
