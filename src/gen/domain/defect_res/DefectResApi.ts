/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DefectRes } from './DefectRes';
import type { DefectApi } from '../defect/DefectApi';
import type { RequirementApi } from '../requirement/RequirementApi';
import type { DefectResNativeDefectResApi } from '../defect_res_native_defect_res/DefectResNativeDefectResApi';
import type { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';

export interface DefectResApi extends DefectRes {
  defect?: DefectApi[];
  requirement?: RequirementApi[];
  native_defect_res?: NativeDefectResApi[];
  pivot?: DefectResNativeDefectResApi;
  defect_res_native_defect_res?: Partial<DefectResNativeDefectResApi>;
}
