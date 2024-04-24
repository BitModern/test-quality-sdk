/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { IntegrationStatusType } from './IntegrationStatusType';
import type { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';

export interface IntegrationStatusTypeApi extends IntegrationStatusType {
  native_defect_status?: NativeDefectStatusApi[];
}
