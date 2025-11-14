/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { PullRequestRun } from './PullRequestRun';
import type { RunApi } from '../run/RunApi';
import type { PullRequestApi } from '../pull_request/PullRequestApi';

export interface PullRequestRunApi extends PullRequestRun {
  run?: RunApi;
  pull_request?: PullRequestApi;
}
