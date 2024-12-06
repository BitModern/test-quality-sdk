/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Project } from './Project';
import type { AccessRoleApi } from '../access_role/AccessRoleApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { ExplorationItemApi } from '../exploration_item/ExplorationItemApi';
import type { CaseTypeProjectApi } from '../case_type_project/CaseTypeProjectApi';
import type { CasePriorityProjectApi } from '../case_priority_project/CasePriorityProjectApi';
import type { ProjectPurposeApi } from '../project_purpose/ProjectPurposeApi';
import type { ProjectStatusApi } from '../project_status/ProjectStatusApi';
import type { EnvironmentProjectApi } from '../environment_project/EnvironmentProjectApi';
import type { PlanApi } from '../plan/PlanApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { TestApi } from '../test/TestApi';
import type { MilestoneApi } from '../milestone/MilestoneApi';
import type { StepApi } from '../step/StepApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import type { RunApi } from '../run/RunApi';
import type { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';
import type { IntegrationApi } from '../integration/IntegrationApi';
import type { CommentApi } from '../comment/CommentApi';
import type { WatchApi } from '../watch/WatchApi';
import type { DefectApi } from '../defect/DefectApi';
import type { RequirementApi } from '../requirement/RequirementApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';
import type { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import type { FilterApi } from '../filter/FilterApi';
import type { DataSetApi } from '../data_set/DataSetApi';
import type { RunSuiteApi } from '../run_suite/RunSuiteApi';
import type { TestPlanApi } from '../test_plan/TestPlanApi';
import type { ExplorationApi } from '../exploration/ExplorationApi';
import type { DocApi } from '../doc/DocApi';
import type { ComponentDocApi } from '../component_doc/ComponentDocApi';

export interface ProjectApi extends Project {
  access_role?: AccessRoleApi;
  label_assigned?: LabelAssignedApi;
  exploration_item?: ExplorationItemApi[];
  case_type_project?: CaseTypeProjectApi[];
  case_priority_project?: CasePriorityProjectApi[];
  project_purpose?: ProjectPurposeApi[];
  project_status?: ProjectStatusApi[];
  environment_project?: EnvironmentProjectApi[];
  plan?: PlanApi[];
  suite?: SuiteApi[];
  test?: TestApi[];
  milestone?: MilestoneApi[];
  step?: StepApi[];
  run_result?: RunResultApi[];
  run_result_step?: RunResultStepApi[];
  run?: RunApi[];
  integration?: IntegrationApi[];
  integration_id?: number;
  comment?: CommentApi;
  watch?: WatchApi;
  defect?: DefectApi[];
  requirement?: RequirementApi[];
  attachment?: AttachmentApi;
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  filter?: FilterApi[];
  data_set?: DataSetApi[];
  run_suite?: RunSuiteApi[];
  test_plan?: TestPlanApi[];
  exploration?: ExplorationApi[];
  doc?: DocApi[];
  component_doc?: ComponentDocApi[];
  pivot?: IntegrationProjectApi;
  integration_project?: Partial<IntegrationProjectApi>;
}
