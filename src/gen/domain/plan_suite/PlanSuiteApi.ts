/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { PlanSuite } from './PlanSuite';
import type { PlanApi } from '../plan/PlanApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { RunSuiteApi } from '../run_suite/RunSuiteApi';

export interface PlanSuiteApi extends PlanSuite {
  plan?: PlanApi;
  suite?: SuiteApi;
  run_suite?: RunSuiteApi[];
}
