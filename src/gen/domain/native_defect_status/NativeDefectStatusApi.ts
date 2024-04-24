/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { NativeDefectStatus } from './NativeDefectStatus';
import type { IntegrationStatusTypeApi } from '../integration_status_type/IntegrationStatusTypeApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { DefectStatusNativeDefectStatusApi } from '../defect_status_native_defect_status/DefectStatusNativeDefectStatusApi';
import type { DefectStatusApi } from '../defect_status/DefectStatusApi';

export interface NativeDefectStatusApi extends NativeDefectStatus {
  integration_status_type?: IntegrationStatusTypeApi;
  label_assigned?: LabelAssignedApi;
  defect_status?: DefectStatusApi[];
  defect_status_id?: number; // This field is required during create
  pivot?: DefectStatusNativeDefectStatusApi;
  defect_status_native_defect_status?: Partial<DefectStatusNativeDefectStatusApi>;
}
