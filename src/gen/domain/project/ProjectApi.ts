/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Project } from './Project';
import type { AccessRoleApi } from '../access_role/AccessRoleApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { DataSetApi } from '../data_set/DataSetApi';
import type { RunSuiteApi } from '../run_suite/RunSuiteApi';
import type { TestApi } from '../test/TestApi';
import type { MilestoneApi } from '../milestone/MilestoneApi';
import type { StepApi } from '../step/StepApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import type { RunApi } from '../run/RunApi';
import type { TestPlanApi } from '../test_plan/TestPlanApi';
import type { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';
import type { IntegrationApi } from '../integration/IntegrationApi';
import type { ExplorationApi } from '../exploration/ExplorationApi';
import type { ExplorationItemApi } from '../exploration_item/ExplorationItemApi';
import type { CommentApi } from '../comment/CommentApi';
import type { WatchApi } from '../watch/WatchApi';
import type { DefectApi } from '../defect/DefectApi';
import type { RequirementApi } from '../requirement/RequirementApi';
import type { PlanApi } from '../plan/PlanApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';
import type { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import type { FilterApi } from '../filter/FilterApi';

export interface ProjectApi extends Project {
  access_role?: AccessRoleApi;
  label_assigned?: LabelAssignedApi;
  data_set?: DataSetApi[];
  run_suite?: RunSuiteApi[];
  test?: TestApi[];
  milestone?: MilestoneApi[];
  step?: StepApi[];
  run_result?: RunResultApi[];
  run_result_step?: RunResultStepApi[];
  run?: RunApi[];
  test_plan?: TestPlanApi[];
  integration?: IntegrationApi[];
  integration_id?: number;
  exploration?: ExplorationApi[];
  exploration_item?: ExplorationItemApi[];
  comment?: CommentApi;
  watch?: WatchApi;
  defect?: DefectApi[];
  requirement?: RequirementApi[];
  plan?: PlanApi[];
  suite?: SuiteApi[];
  attachment?: AttachmentApi;
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  filter?: FilterApi[];
  pivot?: IntegrationProjectApi;
  integration_project?: Partial<IntegrationProjectApi>;
}
