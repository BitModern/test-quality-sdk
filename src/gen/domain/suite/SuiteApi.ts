/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Suite } from './Suite';
import type { ProjectApi } from '../project/ProjectApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { CommentApi } from '../comment/CommentApi';
import type { WatchApi } from '../watch/WatchApi';
import type { SuiteTestApi } from '../suite_test/SuiteTestApi';
import type { TestApi } from '../test/TestApi';
import type { PlanSuiteApi } from '../plan_suite/PlanSuiteApi';
import type { PlanApi } from '../plan/PlanApi';
import type { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import type { RequirementTestApi } from '../requirement_test/RequirementTestApi';

export interface SuiteApi extends Suite {
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  run_result?: RunResultApi[];
  comment?: CommentApi;
  watch?: WatchApi;
  test?: TestApi[];
  plan?: PlanApi[];
  plan_id?: number; // This field is required during create
  sequence_plan?: number;
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  requirement_test?: RequirementTestApi[];
  pivot?: SuiteTestApi | PlanSuiteApi;
  suite_test?: Partial<SuiteTestApi>;
  plan_suite?: Partial<PlanSuiteApi>;
}
