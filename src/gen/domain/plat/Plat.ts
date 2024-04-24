/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface Plat extends KeyedModel {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The name of the platform.
   */
  name: string;
  /**
   * The description of the platform.
   */
  description?: string;
  /**
   * Is this row a system row? A system row cannot be modified or deleted.
   */
  is_system?: boolean;
  client_id: number;
  virtual?: any;
  is_default: boolean;
  key: number;
  picture?: string;
}
