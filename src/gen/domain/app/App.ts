/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface App extends KeyedModel {
  virtual?: any;
  is_default: boolean;
  key: number;
  picture?: string;
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The name of the appliction.
   */
  name: string;
  /**
   * The description of the application.
   */
  description?: string;
  /**
   * Signifies the row is a system row which means it cannot be modified or deleted.
   */
  is_system?: boolean;
  client_id: number;
}
