/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { TenantScopedModel } from '../../models/TenantScopedModel';

export interface CapabilityIntegration extends TenantScopedModel {
  id: number;
  capability_id: number;
  integration_id?: number;
  created_at: string;
  updated_at: string;
  client_id: number;
  endpoint: string;
  schema?: any;
  transform?: any;
  integration_schema_class?: string;
  created_by: number;
  updated_by: number;
  epoch: number;
  value?: string;
}
