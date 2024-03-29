/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PullRequestRun } from './PullRequestRun';
import { PullRequestApi } from '../pull_request/PullRequestApi';
import { RunApi } from '../run/RunApi';

export interface PullRequestRunApi extends PullRequestRun {
  pull_request?: PullRequestApi;
  run?: RunApi;
}
