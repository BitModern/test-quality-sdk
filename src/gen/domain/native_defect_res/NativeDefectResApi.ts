/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { NativeDefectRes } from './NativeDefectRes';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { DefectResNativeDefectResApi } from '../defect_res_native_defect_res/DefectResNativeDefectResApi';
import type { DefectResApi } from '../defect_res/DefectResApi';

export interface NativeDefectResApi extends NativeDefectRes {
  label_assigned?: LabelAssignedApi;
  defect_res?: DefectResApi[];
  defect_res_id?: number; // This field is required during create
  pivot?: DefectResNativeDefectResApi;
  defect_res_native_defect_res?: Partial<DefectResNativeDefectResApi>;
}
