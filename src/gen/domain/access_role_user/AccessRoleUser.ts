/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from '../../models/TenantScopedModel';

export interface AccessRoleUser extends TenantScopedModel {
  epoch: number;
  id: number;
  access_role_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  client_id: number;
  created_by: number;
  updated_by: number;
}
