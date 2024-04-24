/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface DataSet extends KeyedModel {
  id: number;
  schema: any;
  data: any;
  created_by: number;
  created_at: string;
  epoch: number;
  updated_by: number;
  updated_at: string;
  client_id: number;
  project_id: number;
}
