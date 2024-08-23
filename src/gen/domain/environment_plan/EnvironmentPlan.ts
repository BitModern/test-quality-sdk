/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from '../../models/TenantScopedModel';

export interface EnvironmentPlan extends TenantScopedModel {
  id: number;
  created_at: string;
  updated_at: string;
  client_id: number;
  sequence: number;
  created_by: number;
  updated_by: number;
  epoch: number;
  plan_id: number;
  environment_id: number;
}
