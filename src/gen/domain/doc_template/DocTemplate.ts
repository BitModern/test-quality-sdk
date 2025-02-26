/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface DocTemplate extends KeyedModel {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The name of the plan.
   */
  name: string;
  /**
   * The description of the capability.
   */
  description?: string;
  doc_type_id: number;
  is_active: boolean;
  variables?: any;
  cover_id?: number;
  content?: any;
  client_id: number;
}
