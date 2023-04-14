/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Suite } from './Suite';
import { ProjectApi } from '../project/ProjectApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { CommentApi } from '../comment/CommentApi';
import { WatchApi } from '../watch/WatchApi';
import { SuiteTestApi } from '../suite_test/SuiteTestApi';
import { TestApi } from '../test/TestApi';
import { PlanSuiteApi } from '../plan_suite/PlanSuiteApi';
import { PlanApi } from '../plan/PlanApi';
import { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { RequirementTestApi } from '../requirement_test/RequirementTestApi';

export interface SuiteApi extends Suite {
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  comment?: CommentApi;
  watch?: WatchApi;
  test?: TestApi[];
  plan?: PlanApi[];
  plan_id?: number; // This field is required during create
  sequence_plan?: number;
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  run_result?: RunResultApi[];
  requirement_test?: RequirementTestApi[];
  pivot?: SuiteTestApi | PlanSuiteApi;
  suite_test?: Partial<SuiteTestApi>;
  plan_suite?: Partial<PlanSuiteApi>;
}
