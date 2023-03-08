/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Project } from './Project';
import { AccessRoleApi } from '../access_role/AccessRoleApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { CommentApi } from '../comment/CommentApi';
import { WatchApi } from '../watch/WatchApi';
import { DefectApi } from '../defect/DefectApi';
import { RequirementApi } from '../requirement/RequirementApi';
import { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import { FilterApi } from '../filter/FilterApi';
import { PlanApi } from '../plan/PlanApi';
import { SuiteApi } from '../suite/SuiteApi';
import { DataSetApi } from '../data_set/DataSetApi';
import { TestApi } from '../test/TestApi';
import { MilestoneApi } from '../milestone/MilestoneApi';
import { StepApi } from '../step/StepApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { RunApi } from '../run/RunApi';

export interface ProjectApi extends Project {
  access_role?: AccessRoleApi;
  label_assigned?: LabelAssignedApi;
  attachment?: AttachmentApi;
  integration?: IntegrationApi[];
  integration_id?: number;
  comment?: CommentApi;
  watch?: WatchApi;
  defect?: DefectApi[];
  requirement?: RequirementApi[];
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  filter?: FilterApi[];
  plan?: PlanApi[];
  suite?: SuiteApi[];
  data_set?: DataSetApi[];
  test?: TestApi[];
  milestone?: MilestoneApi[];
  step?: StepApi[];
  run_result?: RunResultApi[];
  run_result_step?: RunResultStepApi[];
  run?: RunApi[];
  pivot?: IntegrationProjectApi;
  integration_project?: Partial<IntegrationProjectApi>;
}
