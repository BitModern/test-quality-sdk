/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { PlanPurpose } from './PlanPurpose';
import type { PurposeApi } from '../purpose/PurposeApi';
import type { PlanApi } from '../plan/PlanApi';

export interface PlanPurposeApi extends PlanPurpose {
  purpose?: PurposeApi;
  plan?: PlanApi;
}
