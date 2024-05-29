/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DefectResNativeDefectRes } from './DefectResNativeDefectRes';
import type { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import type { DefectResApi } from '../defect_res/DefectResApi';

export interface DefectResNativeDefectResApi extends DefectResNativeDefectRes {
  native_defect_res?: NativeDefectResApi;
  defect_res?: DefectResApi;
}
