/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Purpose } from './Purpose';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { PlanPurposeApi } from '../plan_purpose/PlanPurposeApi';
import { PlanApi } from '../plan/PlanApi';

export interface PurposeApi extends Purpose {
  label_assigned?: LabelAssignedApi;
  plan?: PlanApi[];
  pivot?: PlanPurposeApi;
  plan_purpose?: Partial<PlanPurposeApi>;
}
