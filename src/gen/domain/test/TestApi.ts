/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Test } from './Test';
import type { CaseTypeApi } from '../case_type/CaseTypeApi';
import type { CasePriorityApi } from '../case_priority/CasePriorityApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { TestQualityApi } from '../test_quality/TestQualityApi';
import type { DataSetApi } from '../data_set/DataSetApi';
import type { SharedPreconditionApi } from '../shared_precondition/SharedPreconditionApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { WatchApi } from '../watch/WatchApi';
import type { SuiteTestApi } from '../suite_test/SuiteTestApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { StepApi } from '../step/StepApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';
import type { CommentApi } from '../comment/CommentApi';
import type { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import type { RequirementTestApi } from '../requirement_test/RequirementTestApi';

export interface TestApi extends Test {
  case_type?: CaseTypeApi;
  case_priority?: CasePriorityApi;
  project?: ProjectApi;
  test_quality?: TestQualityApi;
  data_set?: DataSetApi;
  shared_precondition?: SharedPreconditionApi;
  label_assigned?: LabelAssignedApi;
  watch?: WatchApi;
  suite?: SuiteApi[];
  suite_id?: number; // This field is required during create
  sequence_suite?: number;
  run_result?: RunResultApi[];
  step?: StepApi[];
  attachment?: AttachmentApi;
  comment?: CommentApi;
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  requirement_test?: RequirementTestApi[];
  pivot?: SuiteTestApi;
  suite_test?: Partial<SuiteTestApi>;
}
