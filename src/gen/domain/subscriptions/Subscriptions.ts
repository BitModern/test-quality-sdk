/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface Subscriptions extends KeyedModel {
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  /**
   * A way for the user to identify this subscriptions purpose or intent.
   */
  group_name?: string;
  product_id?: number;
  id: number;
  key: number;
  name: string;
  subscription_expires_at?: string;
  /**
   * Signifies this subscription is reserved and not in the pool. Subscriptions in the pool will be automatically consumed by new users.
   */
  is_reserved: boolean;
  subscription_begins_at?: string;
  is_auto_upgrade: boolean;
  coupon_id?: number;
  marketplace_id?: number;
  user_id: number;
  stripe_id: string;
  stripe_plan: string;
  quantity: number;
  trial_ends_at?: string;
  ends_at?: string;
  created_at: string;
  created_by: number;
}
