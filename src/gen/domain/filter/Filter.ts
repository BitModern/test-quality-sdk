/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface Filter extends KeyedModel {
  related_type: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  client_id: number;
  epoch: number;
  id: number;
  key: number;
  payload?: any;
  name: string;
  is_shareable?: boolean;
  project_id: number;
  description?: string;
}
