/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface Exploration extends KeyedModel {
  updated_at: string;
  epoch: number;
  client_id: number;
  /**
   * The time when the testing for this test run began.
   */
  start_time?: string;
  /**
   * The time when the testing for this test run concluded.
   */
  end_time?: string;
  /**
   * If set this test is complete and cannot be modified or deleted.
   */
  is_complete: boolean;
  virtual?: any;
  /**
   * The user can supply a name to make identification of a particular test run easier. If the user does not supply a name then the
   * system will generate a name consisting of the plan name followed by the date and time.
   */
  name: string;
  key: number;
  mission?: string;
  project_id: number;
  milestone_id?: number;
  assigned_to_tester?: number;
  status_id?: number;
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
}
