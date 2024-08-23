/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface ExplorationItem extends KeyedModel {
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The amoun tof time this run_result_step has been tested.
   */
  elapsed?: number;
  client_id: number;
  /**
   * The order of steps withing a test.
   */
  sequence: number;
  virtual?: any;
  /**
   * The result of testing the step.
   */
  result?: string;
  key: number;
  id: number;
  assigned_to_tester?: number;
  project_id: number;
  exploration_id: number;
  status_id?: number;
  environment_id?: number;
}
