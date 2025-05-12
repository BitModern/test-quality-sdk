/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from '../../models/TenantScopedModel';

export interface CasePriorityProject extends TenantScopedModel {
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  client_id: number;
  project_id: number;
  case_priority_id: number;
  id: number;
  created_by: number;
}
