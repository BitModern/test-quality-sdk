/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Plan } from './Plan';
import { ProjectApi } from '../project/ProjectApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';
import { PlanSuiteApi } from '../plan_suite/PlanSuiteApi';
import { SuiteApi } from '../suite/SuiteApi';
import { AppVersionPlatVersionPlanApi } from '../app_version_plat_version_plan/AppVersionPlatVersionPlanApi';
import { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';
import { RunApi } from '../run/RunApi';
import { PlanPurposeApi } from '../plan_purpose/PlanPurposeApi';
import { PurposeApi } from '../purpose/PurposeApi';
import { CommentApi } from '../comment/CommentApi';
import { WatchApi } from '../watch/WatchApi';

export interface PlanApi extends Plan {
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  attachment?: AttachmentApi;
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  integration_project?: IntegrationProjectApi[];
  suite?: SuiteApi[];
  app_version_plat_version?: AppVersionPlatVersionApi[];
  run?: RunApi[];
  purpose?: PurposeApi[];
  purpose_id?: number;
  comment?: CommentApi;
  watch?: WatchApi;
  pivot?: PlanSuiteApi | AppVersionPlatVersionPlanApi | PlanPurposeApi;
  plan_suite?: Partial<PlanSuiteApi>;
  app_version_plat_version_plan?: Partial<AppVersionPlatVersionPlanApi>;
  plan_purpose?: Partial<PlanPurposeApi>;
}
