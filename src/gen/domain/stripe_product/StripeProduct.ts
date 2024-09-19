/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { DefaultAttributes } from '../../models/DefaultAttributes';

export interface StripeProduct extends DefaultAttributes {
  default_price?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  /**
   * This will be what the customer sees in the description of the charge on their credit card statement.
   */
  description?: string;
  /**
   * The ID of the object in the external system (such as Stripe).
   */
  external_reference_id: string;
  /**
   * Is this an active prodcut. If not the product will not be shown to propects anymore.
   */
  active: boolean;
  id: number;
  /**
   * A string to be displayed on your customers credit card or bank statement. The statement description may not include special characters, and will appear on your customers statement in capital letters. Non-ASCII characters are automatically stripped. It must contain at least one letter. Only used for subscription payments.
   */
  statement_descriptor?: string;
  /**
   * A URL of a publicly-accessible webpage for this product.
   */
  url?: string;
  product_master_id: number;
  name: string;
}
