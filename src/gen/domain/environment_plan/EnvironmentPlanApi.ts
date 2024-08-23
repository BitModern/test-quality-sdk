/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { EnvironmentPlan } from './EnvironmentPlan';
import type { PlanApi } from '../plan/PlanApi';
import type { EnvironmentApi } from '../environment/EnvironmentApi';

export interface EnvironmentPlanApi extends EnvironmentPlan {
  plan?: PlanApi;
  environment?: EnvironmentApi;
}
