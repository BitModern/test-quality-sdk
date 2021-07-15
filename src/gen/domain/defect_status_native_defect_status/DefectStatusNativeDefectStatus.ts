/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { TenantScopedModel } from '../../models/TenantScopedModel';

export interface DefectStatusNativeDefectStatus extends TenantScopedModel {
  id: number;
  created_at: string;
  updated_at: string;
  client_id: number;
  defect_status_id: number;
  native_defect_status_id: number;
  created_by: number;
  updated_by: number;
  epoch: number;
}
