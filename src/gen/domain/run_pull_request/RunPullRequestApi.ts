/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RunPullRequest } from './RunPullRequest';
import { PullRequestApi } from '../pull_request/PullRequestApi';
import { RunApi } from '../run/RunApi';

export interface RunPullRequestApi extends RunPullRequest {
  pull_request?: PullRequestApi;
  run?: RunApi;
}
