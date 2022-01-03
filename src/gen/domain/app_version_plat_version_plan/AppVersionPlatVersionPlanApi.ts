/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AppVersionPlatVersionPlan } from './AppVersionPlatVersionPlan';
import { PlanApi } from '../plan/PlanApi';
import { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';

export interface AppVersionPlatVersionPlanApi
  extends AppVersionPlatVersionPlan {
  plan?: PlanApi;
  app_version_plat_version?: AppVersionPlatVersionApi;
}
