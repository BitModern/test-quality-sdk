/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PlanPurpose } from './PlanPurpose';
import { PlanApi } from '../plan/PlanApi';
import { PurposeApi } from '../purpose/PurposeApi';

export interface PlanPurposeApi extends PlanPurpose {
  plan?: PlanApi;
  purpose?: PurposeApi;
}
