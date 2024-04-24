/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from '../../models/TenantScopedModel';

export interface PlanSuite extends TenantScopedModel {
  id: number;
  created_at: string;
  updated_at: string;
  plan_id: number;
  suite_id: number;
  client_id: number;
  sequence_plan: number;
  hierarchy_level?: number;
  created_by: number;
  updated_by: number;
  epoch: number;
  suite_offset?: number;
  parent_id?: number;
}
