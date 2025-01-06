/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface Doc extends KeyedModel {
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
  content?: any;
  client_id: number;
  key: number;
  doc_template_id?: number;
  doc_type_id: number;
  cover_id?: number;
  project_id?: number;
  is_default: boolean;
}
