/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { DefectStatus } from './DefectStatus';
import { DefectApi } from '../defect/DefectApi';
import { DefectStatusNativeDefectStatusApi } from '../defect_status_native_defect_status/DefectStatusNativeDefectStatusApi';
import { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';
import { RequirementApi } from '../requirement/RequirementApi';

export interface DefectStatusApi extends DefectStatus {
  defect?: DefectApi[];
  native_defect_status?: NativeDefectStatusApi[];
  requirement?: RequirementApi[];
  pivot?: DefectStatusNativeDefectStatusApi;
}
