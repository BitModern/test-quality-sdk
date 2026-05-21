/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from '../../models/TenantScopedModel';

export interface CaseTypeTest extends TenantScopedModel {
  created_at: string;
  updated_at: string;
  client_id: number;
  created_by: number;
  updated_by: number;
  epoch: number;
  id: number;
  case_type_id: number;
  test_id: number;
}
