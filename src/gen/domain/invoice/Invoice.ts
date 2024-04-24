/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface Invoice extends KeyedModel {
  amount: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  id: number;
  key: number;
  quote_id: number;
  purchase_order_id?: number;
  terms_days: number;
  is_paid: boolean;
  external_reference_id?: string;
  has_open_dispute: boolean;
  payment_attempts: number;
  next_payment_attempt?: string;
}
