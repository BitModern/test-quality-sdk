/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';
import type { PlanAnalysisApi } from '../../models/PlanAnalysisApi';

export interface Plan extends KeyedModel {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  project_id: number;
  /**
   * The id of the user this plan is assigned to.
   */
  assigned_to_tester?: number;
  virtual?: any;
  /**
   * The name of the plan.
   */
  name: string;
  /**
   * The description of the capability.
   */
  description?: string;
  client_id: number;
  key: number;
  retain_runs: number;
  is_root?: boolean;
  /**
   * Whether to create run during Pull Request checks.
   */
  include_in_checks?: boolean;
  analysis?: PlanAnalysisApi;
}
