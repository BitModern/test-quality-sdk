/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { LabelAssigned } from './LabelAssigned';
import type { LabelApi } from '../label/LabelApi';
import type { StatusApi } from '../status/StatusApi';
import type { PlatApi } from '../plat/PlatApi';
import type { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';
import type { MilestoneApi } from '../milestone/MilestoneApi';
import type { RunApi } from '../run/RunApi';
import type { PlatVersionApi } from '../plat_version/PlatVersionApi';
import type { AppVersionApi } from '../app_version/AppVersionApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { TestApi } from '../test/TestApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { CaseTypeApi } from '../case_type/CaseTypeApi';
import type { CasePriorityApi } from '../case_priority/CasePriorityApi';
import type { PurposeApi } from '../purpose/PurposeApi';
import type { PlanApi } from '../plan/PlanApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { AppApi } from '../app/AppApi';
import type { StepApi } from '../step/StepApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import type { StatusTypeApi } from '../status_type/StatusTypeApi';
import type { TestQualityApi } from '../test_quality/TestQualityApi';
import type { TestQualityTypeApi } from '../test_quality_type/TestQualityTypeApi';
import type { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import type { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';
import type { SharedStepApi } from '../shared_step/SharedStepApi';
import type { ExplorationApi } from '../exploration/ExplorationApi';
import type { ExplorationItemApi } from '../exploration_item/ExplorationItemApi';

export interface LabelAssignedApi extends LabelAssigned {
  label?: LabelApi;
  status?: StatusApi;
  plat?: PlatApi;
  app_version_plat_version?: AppVersionPlatVersionApi;
  milestone?: MilestoneApi;
  run?: RunApi;
  plat_version?: PlatVersionApi;
  app_version?: AppVersionApi;
  suite?: SuiteApi;
  test?: TestApi;
  project?: ProjectApi;
  case_type?: CaseTypeApi;
  case_priority?: CasePriorityApi;
  purpose?: PurposeApi;
  plan?: PlanApi;
  run_result?: RunResultApi;
  app?: AppApi;
  step?: StepApi;
  run_result_step?: RunResultStepApi;
  status_type?: StatusTypeApi;
  test_quality?: TestQualityApi;
  test_quality_type?: TestQualityTypeApi;
  native_defect_res?: NativeDefectResApi;
  native_defect_status?: NativeDefectStatusApi;
  shared_step?: SharedStepApi;
  exploration?: ExplorationApi;
  exploration_item?: ExplorationItemApi;
}
