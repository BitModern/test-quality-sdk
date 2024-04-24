/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from '../../models/TenantScopedModel';

export interface CheckSuitePullRequest extends TenantScopedModel {
  id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  pull_request_id: number;
  check_suite_id: number;
}
