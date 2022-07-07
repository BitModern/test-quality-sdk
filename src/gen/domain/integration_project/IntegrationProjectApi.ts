/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { IntegrationProject } from './IntegrationProject';
import { ProjectApi } from '../project/ProjectApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';
import { DefectApi } from '../defect/DefectApi';
import { RequirementApi } from '../requirement/RequirementApi';
import { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';

export interface IntegrationProjectApi extends IntegrationProject {
  project?: ProjectApi;
  integration?: IntegrationApi;
  native_defect_status?: NativeDefectStatusApi[];
  defect?: DefectApi[];
  requirement?: RequirementApi;
  native_defect_res?: NativeDefectResApi[];
}
