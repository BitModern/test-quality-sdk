/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { DefectStatusNativeDefectStatus } from './DefectStatusNativeDefectStatus';
import { DefectStatusApi } from '../defect_status/DefectStatusApi';
import { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';

export interface DefectStatusNativeDefectStatusApi
  extends DefectStatusNativeDefectStatus {
  defect_status?: DefectStatusApi;
  native_defect_status?: NativeDefectStatusApi;
}
