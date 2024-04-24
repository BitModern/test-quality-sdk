/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { IntegrationProject } from './IntegrationProject';
import type { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import type { PlanApi } from '../plan/PlanApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { IntegrationApi } from '../integration/IntegrationApi';
import type { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import type { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';
import type { IntegrationStatusTypeApi } from '../integration_status_type/IntegrationStatusTypeApi';
import type { DefectApi } from '../defect/DefectApi';
import type { RequirementApi } from '../requirement/RequirementApi';

export interface IntegrationProjectApi extends IntegrationProject {
  app_install_project?: AppInstallProjectApi;
  plan?: PlanApi;
  project?: ProjectApi;
  integration?: IntegrationApi;
  native_defect_res?: NativeDefectResApi[];
  native_defect_status?: NativeDefectStatusApi[];
  integration_status_type?: IntegrationStatusTypeApi[];
  defect?: DefectApi[];
  requirement?: RequirementApi[];
}
