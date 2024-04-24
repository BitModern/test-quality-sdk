/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface RunResultStep extends KeyedModel {
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The version of the software this run_result_step was tested against.
   */
  version?: string;
  /**
   * The amoun tof time this run_result_step has been tested.
   */
  elapsed?: number;
  /**
   * The status of the step.
   */
  status_id: number;
  client_id: number;
  project_id: number;
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
  step_id: number;
  run_result_id: number;
  id: number;
  step_epoch?: number;
}
