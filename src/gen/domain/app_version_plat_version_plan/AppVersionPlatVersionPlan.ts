/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { TenantScopedModel } from '../../models/TenantScopedModel';

export interface AppVersionPlatVersionPlan extends TenantScopedModel {
  plan_id?: number;
  client_id: number;
  sequence_app_version_plat_version: number;
  created_by: number;
  updated_by: number;
  epoch: number;
  id: number;
  created_at: string;
  updated_at: string;
  app_version_plat_version_id?: number;
}
