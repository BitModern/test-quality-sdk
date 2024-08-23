/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DefectRes } from './DefectRes';
import type { DefectResNativeDefectResApi } from '../defect_res_native_defect_res/DefectResNativeDefectResApi';
import type { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import type { DefectApi } from '../defect/DefectApi';
import type { RequirementApi } from '../requirement/RequirementApi';

export interface DefectResApi extends DefectRes {
  native_defect_res?: NativeDefectResApi[];
  defect?: DefectApi[];
  requirement?: RequirementApi[];
  pivot?: DefectResNativeDefectResApi;
  defect_res_native_defect_res?: Partial<DefectResNativeDefectResApi>;
}
