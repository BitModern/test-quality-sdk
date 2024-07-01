/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DefectRes } from './DefectRes';
import type { RequirementApi } from '../requirement/RequirementApi';
import type { DefectResNativeDefectResApi } from '../defect_res_native_defect_res/DefectResNativeDefectResApi';
import type { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import type { DefectApi } from '../defect/DefectApi';

export interface DefectResApi extends DefectRes {
  requirement?: RequirementApi[];
  native_defect_res?: NativeDefectResApi[];
  defect?: DefectApi[];
  pivot?: DefectResNativeDefectResApi;
  defect_res_native_defect_res?: Partial<DefectResNativeDefectResApi>;
}
