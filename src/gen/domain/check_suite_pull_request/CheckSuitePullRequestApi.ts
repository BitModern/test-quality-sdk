/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { CheckSuitePullRequest } from './CheckSuitePullRequest';
import { PullRequestApi } from '../pull_request/PullRequestApi';
import { CheckSuiteApi } from '../check_suite/CheckSuiteApi';

export interface CheckSuitePullRequestApi extends CheckSuitePullRequest {
  pull_request?: PullRequestApi;
  check_suite?: CheckSuiteApi;
}
