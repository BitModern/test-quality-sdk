/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface TestQuality extends KeyedModel {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The name of the case_type.
   */
  name: string;
  /**
   * The definiiton for the case_type.
   */
  description?: string;
  /**
   * Is this row a system row? A system row cannot be modified or deleted.
   */
  is_system?: boolean;
  client_id: number;
  virtual?: any;
  key: number;
  test_quality_type_id: number;
  priority: number;
  weight?: number;
  weight_type?: number;
}
