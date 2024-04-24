/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from '../../models/TenantScopedModel';

export interface PullRequestRequirement extends TenantScopedModel {
  id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  pull_request_id: number;
  requirement_id: number;
}
