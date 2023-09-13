/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { IntegrationProject } from './IntegrationProject';
import { ProjectApi } from '../project/ProjectApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { DefectApi } from '../defect/DefectApi';
import { RequirementApi } from '../requirement/RequirementApi';
import { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';

export interface IntegrationProjectApi extends IntegrationProject {
  project?: ProjectApi;
  integration?: IntegrationApi;
  defect?: DefectApi[];
  requirement?: RequirementApi[];
  native_defect_res?: NativeDefectResApi[];
  native_defect_status?: NativeDefectStatusApi[];
  app_install_project?: AppInstallProjectApi[];
}
