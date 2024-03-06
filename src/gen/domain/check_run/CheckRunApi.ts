/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { CheckRun } from './CheckRun';
import { CheckSuiteApi } from '../check_suite/CheckSuiteApi';
import { RunApi } from '../run/RunApi';

export interface CheckRunApi extends CheckRun {
  check_suite?: CheckSuiteApi;
  run?: RunApi[];
}
