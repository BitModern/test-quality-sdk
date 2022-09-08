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
import { DefectUserApi } from '../defect_user/DefectUserApi';
import { DefectLabelApi } from '../defect_label/DefectLabelApi';
import { DefectComponentApi } from '../defect_component/DefectComponentApi';
import { DefectPriorityApi } from '../defect_priority/DefectPriorityApi';
import { DefectTypeApi } from '../defect_type/DefectTypeApi';

export interface IntegrationProjectApi extends IntegrationProject {
  project?: ProjectApi;
  integration?: IntegrationApi;
  defect?: DefectApi[];
  requirement?: RequirementApi;
  native_defect_res?: NativeDefectResApi[];
  native_defect_status?: NativeDefectStatusApi[];
  defect_user?: DefectUserApi[];
  defect_label?: DefectLabelApi[];
  defect_component?: DefectComponentApi[];
  defect_priority?: DefectPriorityApi[];
  defect_type?: DefectTypeApi[];
}
