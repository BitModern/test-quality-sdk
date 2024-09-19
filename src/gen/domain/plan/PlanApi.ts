/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Plan } from './Plan';
import type { ProjectApi } from '../project/ProjectApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';
import type { EnvironmentPlanApi } from '../environment_plan/EnvironmentPlanApi';
import type { PlanSuiteApi } from '../plan_suite/PlanSuiteApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { AppVersionPlatVersionPlanApi } from '../app_version_plat_version_plan/AppVersionPlatVersionPlanApi';
import type { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';
import type { RunApi } from '../run/RunApi';
import type { PlanPurposeApi } from '../plan_purpose/PlanPurposeApi';
import type { PurposeApi } from '../purpose/PurposeApi';
import type { CommentApi } from '../comment/CommentApi';
import type { WatchApi } from '../watch/WatchApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';
import type { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';

export interface PlanApi extends Plan {
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  integration_project?: IntegrationProjectApi[];
  environment_plan?: EnvironmentPlanApi[];
  suite?: SuiteApi[];
  app_version_plat_version?: AppVersionPlatVersionApi[];
  run?: RunApi[];
  purpose?: PurposeApi[];
  purpose_id?: number;
  comment?: CommentApi;
  watch?: WatchApi;
  attachment?: AttachmentApi;
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  pivot?: PlanSuiteApi | AppVersionPlatVersionPlanApi | PlanPurposeApi;
  plan_suite?: Partial<PlanSuiteApi>;
  app_version_plat_version_plan?: Partial<AppVersionPlatVersionPlanApi>;
  plan_purpose?: Partial<PlanPurposeApi>;
}
