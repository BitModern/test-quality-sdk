/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface Virtual extends KeyedModel {
  id: number;
  table_name: string;
  virtual_schema?: any;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
}
