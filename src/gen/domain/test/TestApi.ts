/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Test } from './Test';
import { ProjectApi } from '../project/ProjectApi';
import { CaseTypeApi } from '../case_type/CaseTypeApi';
import { CasePriorityApi } from '../case_priority/CasePriorityApi';
import { TestQualityApi } from '../test_quality/TestQualityApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { StepApi } from '../step/StepApi';
import { SuiteTestApi } from '../suite_test/SuiteTestApi';
import { SuiteApi } from '../suite/SuiteApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { CommentApi } from '../comment/CommentApi';
import { WatchApi } from '../watch/WatchApi';
import { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import { RequirementTestApi } from '../requirement_test/RequirementTestApi';
import { RequirementApi } from '../requirement/RequirementApi';

export interface TestApi extends Test {
  project?: ProjectApi;
  case_type?: CaseTypeApi;
  case_priority?: CasePriorityApi;
  test_quality?: TestQualityApi;
  label_assigned?: LabelAssignedApi;
  step?: StepApi[];
  suite?: SuiteApi[];
  suite_id?: number; // This field is required during create
  sequence_suite?: number;
  run_result?: RunResultApi[];
  attachment?: AttachmentApi;
  comment?: CommentApi;
  watch?: WatchApi;
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  requirement?: RequirementApi[];
  pivot?: SuiteTestApi | RequirementTestApi;
  suite_test?: Partial<SuiteTestApi>;
  requirement_test?: Partial<RequirementTestApi>;
}
