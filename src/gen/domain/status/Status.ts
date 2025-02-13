/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface Status extends KeyedModel {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The name of this status.
   */
  name: string;
  /**
   * The color of this status.
   */
  color?: string;
  /**
   * Is this row a system row? A system row cannot be modified or deleted.
   */
  is_system?: boolean;
  client_id: number;
  /**
   * The description of this status.
   */
  description?: string;
  virtual?: any;
  key: number;
  status_type_id: number;
  all_projects: boolean;
}
