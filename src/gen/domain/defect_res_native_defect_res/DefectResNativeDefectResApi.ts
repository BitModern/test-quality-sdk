/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DefectResNativeDefectRes } from './DefectResNativeDefectRes';
import type { DefectResApi } from '../defect_res/DefectResApi';
import type { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';

export interface DefectResNativeDefectResApi extends DefectResNativeDefectRes {
  defect_res?: DefectResApi;
  native_defect_res?: NativeDefectResApi;
}
