/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Test } from './Test';
import { TestQualityApi } from '../test_quality/TestQualityApi';
import { CaseTypeApi } from '../case_type/CaseTypeApi';
import { CasePriorityApi } from '../case_priority/CasePriorityApi';
import { DataSetApi } from '../data_set/DataSetApi';
import { ProjectApi } from '../project/ProjectApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { CommentApi } from '../comment/CommentApi';
import { WatchApi } from '../watch/WatchApi';
import { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import { SuiteTestApi } from '../suite_test/SuiteTestApi';
import { SuiteApi } from '../suite/SuiteApi';
import { RequirementTestApi } from '../requirement_test/RequirementTestApi';
import { RequirementApi } from '../requirement/RequirementApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { StepApi } from '../step/StepApi';

export interface TestApi extends Test {
  test_quality?: TestQualityApi;
  case_type?: CaseTypeApi;
  case_priority?: CasePriorityApi;
  data_set?: DataSetApi;
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  attachment?: AttachmentApi;
  comment?: CommentApi;
  watch?: WatchApi;
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  suite?: SuiteApi[];
  suite_id?: number; // This field is required during create
  sequence_suite?: number;
  requirement?: RequirementApi[];
  run_result?: RunResultApi[];
  step?: StepApi[];
  pivot?: SuiteTestApi | RequirementTestApi;
  suite_test?: Partial<SuiteTestApi>;
  requirement_test?: Partial<RequirementTestApi>;
}
