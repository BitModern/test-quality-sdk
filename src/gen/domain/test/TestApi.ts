/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Test } from './Test';
import { TestQualityApi } from '../test_quality/TestQualityApi';
import { CaseTypeApi } from '../case_type/CaseTypeApi';
import { CasePriorityApi } from '../case_priority/CasePriorityApi';
import { ProjectApi } from '../project/ProjectApi';
import { DataSetApi } from '../data_set/DataSetApi';
import { SharedPreconditionApi } from '../shared_precondition/SharedPreconditionApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { CommentApi } from '../comment/CommentApi';
import { WatchApi } from '../watch/WatchApi';
import { SuiteTestApi } from '../suite_test/SuiteTestApi';
import { SuiteApi } from '../suite/SuiteApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { StepApi } from '../step/StepApi';
import { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import { RequirementTestApi } from '../requirement_test/RequirementTestApi';

export interface TestApi extends Test {
  test_quality?: TestQualityApi;
  case_type?: CaseTypeApi;
  case_priority?: CasePriorityApi;
  project?: ProjectApi;
  data_set?: DataSetApi;
  shared_precondition?: SharedPreconditionApi;
  label_assigned?: LabelAssignedApi;
  attachment?: AttachmentApi;
  comment?: CommentApi;
  watch?: WatchApi;
  suite?: SuiteApi[];
  suite_id?: number; // This field is required during create
  sequence_suite?: number;
  run_result?: RunResultApi[];
  step?: StepApi[];
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  requirement_test?: RequirementTestApi[];
  pivot?: SuiteTestApi;
  suite_test?: Partial<SuiteTestApi>;
}
