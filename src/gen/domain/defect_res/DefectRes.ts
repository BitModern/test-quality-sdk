/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface DefectRes extends KeyedModel {
  id: number;
  name: string;
  description?: string;
  key: number;
  created_at: string;
  updated_at: string;
  created_by: number;
  updated_by: number;
  epoch: number;
  client_id: number;
  is_system?: boolean;
}
