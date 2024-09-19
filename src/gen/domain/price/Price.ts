/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { DefaultAttributes } from '../../models/DefaultAttributes';

export interface Price extends DefaultAttributes {
  nickname?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  /**
   * The interval for the product. Can be one of day, week, month, year
   */
  interval: string;
  /**
   * The number of intervals (specified in the interval attribute) between subscription billings. For example, interval
   */
  interval_count: number;
  trial_period_days?: number;
  /**
   * The default currency for the product, the default is usd.
   */
  currency: string;
  /**
   * The ID of the object in the external system (such as Stripe).
   */
  external_reference_id: string;
  /**
   * Is this an active prodcut. If not the product will not be shown to propects anymore.
   */
  active: boolean;
  id: number;
  amount: number;
  user_limit: number;
  can_increment: boolean;
  upgrade_price_id?: number;
  usage_type: string;
  billing_scheme: string;
  stripe_product_id: number;
  default: boolean;
}
