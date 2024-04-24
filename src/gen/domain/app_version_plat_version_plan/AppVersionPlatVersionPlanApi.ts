/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { AppVersionPlatVersionPlan } from './AppVersionPlatVersionPlan';
import type { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';
import type { PlanApi } from '../plan/PlanApi';

export interface AppVersionPlatVersionPlanApi
  extends AppVersionPlatVersionPlan {
  app_version_plat_version?: AppVersionPlatVersionApi;
  plan?: PlanApi;
}
