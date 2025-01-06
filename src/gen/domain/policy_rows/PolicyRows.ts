/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface PolicyRows extends KeyedModel {
  id: number;
  policy_id: number;
  /**
   * The value of the column to use to match for this policy.
   */
  column_value: number;
  client_id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The name of the column to use to match for this policy.
   */
  column_name: string;
}
