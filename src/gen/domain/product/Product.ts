/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { DefaultAttributes } from '../../models/DefaultAttributes';

export interface Product extends DefaultAttributes {
  name: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  /**
   * The interval for the product. Can be one of day, week, month, year
   */
  interval: string;
  interval_qty: number;
  /**
   * This will be what the customer sees in the description of the charge on their credit card statement.
   */
  description: string;
  trial_days: number;
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
  is_active: boolean;
  id: number;
  amount: number;
  display_name: string;
  user_limit: number;
  product_master_id: number;
  can_increment: boolean;
  upgrade_product_id?: number;
}
