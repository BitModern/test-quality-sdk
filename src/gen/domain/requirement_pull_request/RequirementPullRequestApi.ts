/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RequirementPullRequest } from './RequirementPullRequest';
import { PullRequestApi } from '../pull_request/PullRequestApi';
import { RequirementApi } from '../requirement/RequirementApi';

export interface RequirementPullRequestApi extends RequirementPullRequest {
  pull_request?: PullRequestApi;
  requirement?: RequirementApi;
}
