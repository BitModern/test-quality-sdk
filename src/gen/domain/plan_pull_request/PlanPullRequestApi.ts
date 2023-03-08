/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PlanPullRequest } from './PlanPullRequest';
import { PullRequestApi } from '../pull_request/PullRequestApi';
import { PlanApi } from '../plan/PlanApi';

export interface PlanPullRequestApi extends PlanPullRequest {
  pull_request?: PullRequestApi;
  plan?: PlanApi;
}
