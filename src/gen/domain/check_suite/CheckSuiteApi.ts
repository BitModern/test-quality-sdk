/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { CheckSuite } from './CheckSuite';
import { PullRequestApi } from '../pull_request/PullRequestApi';
import { CheckRunApi } from '../check_run/CheckRunApi';

export interface CheckSuiteApi extends CheckSuite {
  pull_request?: PullRequestApi;
  check_run?: CheckRunApi[];
}
