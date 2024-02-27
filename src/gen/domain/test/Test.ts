/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface Test extends KeyedModel {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  name: string;
  case_type_id: number;
  case_priority_id: number;
  estimate?: number;
  precondition?: string;
  virtual?: any;
  client_id: number;
  project_id: number;
  /**
   * The id of the user this test is assigned to.
   */
  assigned_to_tester?: number;
  is_automated: boolean;
  description?: string;
  key: number;
  test_quality_id?: number;
  /**
   * A bitmask which holds various state values for this test. This allows test_quality to calcualte without needing to query history
   */
  state_mask?: number;
  test_type_id?: number;
  data_set_id?: number;
  shared_precondition_id?: number;
}
