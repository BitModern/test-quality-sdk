/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from '../../models/TenantScopedModel';

export interface EnvironmentExploration extends TenantScopedModel {
  id: number;
  created_at: string;
  updated_at: string;
  client_id: number;
  sequence: number;
  created_by: number;
  updated_by: number;
  epoch: number;
  environment_id: number;
  exploration_id: number;
}
