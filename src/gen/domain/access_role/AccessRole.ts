/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface AccessRole extends KeyedModel {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The name of the access_role
   */
  name: string;
  /**
   * Is this row a system row? A system row cannot be modified or deleted.
   */
  is_system?: boolean;
  /**
   * If set this row will be the default access_role when a new user is created.
   */
  is_default: boolean;
  client_id: number;
  key: number;
}
