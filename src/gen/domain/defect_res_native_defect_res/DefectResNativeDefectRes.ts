/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { TenantScopedModel } from '../../models/TenantScopedModel';

export interface DefectResNativeDefectRes extends TenantScopedModel {
  id: number;
  created_at: string;
  updated_at: string;
  client_id: number;
  defect_res_id: number;
  native_defect_res_id: number;
  created_by: number;
  updated_by: number;
  epoch: number;
}
