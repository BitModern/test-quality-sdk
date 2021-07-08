/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PlanSuite } from './PlanSuite';
import { PlanApi } from '../plan/PlanApi';
import { SuiteApi } from '../suite/SuiteApi';

export interface PlanSuiteApi extends PlanSuite {
  plan?: PlanApi;
  suite?: SuiteApi;
}
