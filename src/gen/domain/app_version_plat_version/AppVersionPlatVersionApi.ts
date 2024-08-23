/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { AppVersionPlatVersion } from './AppVersionPlatVersion';
import type { PlatVersionApi } from '../plat_version/PlatVersionApi';
import type { AppVersionApi } from '../app_version/AppVersionApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { AppVersionPlatVersionPlanApi } from '../app_version_plat_version_plan/AppVersionPlatVersionPlanApi';
import type { PlanApi } from '../plan/PlanApi';
import type { RunResultApi } from '../run_result/RunResultApi';

export interface AppVersionPlatVersionApi extends AppVersionPlatVersion {
  plat_version?: PlatVersionApi;
  app_version?: AppVersionApi;
  label_assigned?: LabelAssignedApi;
  plan?: PlanApi[];
  plan_id?: number;
  sequence_app_version_plat_version?: number;
  run_result?: RunResultApi[];
  pivot?: AppVersionPlatVersionPlanApi;
  app_version_plat_version_plan?: Partial<AppVersionPlatVersionPlanApi>;
}
