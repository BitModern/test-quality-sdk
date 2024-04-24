/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface BillingContact extends KeyedModel {
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  key: number;
  id: number;
  subscriptions_id: number;
  user_id?: number;
  given_name?: string;
  family_name?: string;
  email?: string;
}
