/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { DefectRes } from './DefectRes';
import { DefectResNativeDefectResApi } from '../defect_res_native_defect_res/DefectResNativeDefectResApi';
import { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import { DefectApi } from '../defect/DefectApi';
import { RequirementApi } from '../requirement/RequirementApi';

export interface DefectResApi extends DefectRes {
  native_defect_res?: NativeDefectResApi[];
  defect?: DefectApi[];
  requirement?: RequirementApi[];
  pivot?: DefectResNativeDefectResApi;
}
