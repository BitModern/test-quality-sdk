/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from '../../models/TenantScopedModel';

export interface PlanPurpose extends TenantScopedModel {
  id: number;
  created_at: string;
  updated_at: string;
  client_id: number;
  purpose_id?: number;
  plan_id?: number;
  created_by: number;
  updated_by: number;
  epoch: number;
}
