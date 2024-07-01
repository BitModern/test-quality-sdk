/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DefectStatus } from './DefectStatus';
import type { RequirementApi } from '../requirement/RequirementApi';
import type { DefectApi } from '../defect/DefectApi';
import type { DefectStatusNativeDefectStatusApi } from '../defect_status_native_defect_status/DefectStatusNativeDefectStatusApi';
import type { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';

export interface DefectStatusApi extends DefectStatus {
  requirement?: RequirementApi[];
  defect?: DefectApi[];
  native_defect_status?: NativeDefectStatusApi[];
  pivot?: DefectStatusNativeDefectStatusApi;
  defect_status_native_defect_status?: Partial<DefectStatusNativeDefectStatusApi>;
}
