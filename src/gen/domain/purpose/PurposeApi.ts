/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Purpose } from './Purpose';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { PlanPurposeApi } from '../plan_purpose/PlanPurposeApi';
import type { PlanApi } from '../plan/PlanApi';

export interface PurposeApi extends Purpose {
  label_assigned?: LabelAssignedApi;
  plan?: PlanApi[];
  pivot?: PlanPurposeApi;
  plan_purpose?: Partial<PlanPurposeApi>;
}
