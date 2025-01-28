/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface RunSuite extends KeyedModel {
  id: number;
  plan_suite_epoch: number;
  sequence_plan: number;
  suite_offset?: number;
  parent_id?: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  client_id: number;
  run_id: number;
  project_id: number;
  plan_suite_id: number;
  suite_id: number;
  suite_epoch: number;
  source?: any;
}
