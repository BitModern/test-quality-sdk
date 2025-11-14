/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface CaseType extends KeyedModel {
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
   * The definition for the case_type.
   */
  description?: string;
  /**
   * Is this row a system row? A system row cannot be modified or deleted.
   */
  is_system?: boolean;
  client_id: number;
  /**
   * If set this case_type will be assigned to a newly created test.
   */
  is_default: boolean;
  virtual?: any;
  key: number;
  all_projects: boolean;
}
