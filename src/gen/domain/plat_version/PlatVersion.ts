/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface PlatVersion extends KeyedModel {
  id: number;
  /**
   * The major version of the platform.
   */
  major: string;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  client_id: number;
  /**
   * The minor version of the platform.
   */
  minor: string;
  /**
   * Is this row a system row? A system row cannot be modified or deleted.
   */
  is_system?: boolean;
  plat_id: number;
  virtual?: any;
  is_default: boolean;
  key: number;
}
