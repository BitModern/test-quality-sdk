/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PlanPurpose } from './PlanPurpose';
import { PurposeApi } from '../purpose/PurposeApi';
import { PlanApi } from '../plan/PlanApi';

export interface PlanPurposeApi extends PlanPurpose {
  purpose?: PurposeApi;
  plan?: PlanApi;
}
