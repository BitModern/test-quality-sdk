/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PullRequest } from './PullRequest';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import { AppUserApi } from '../app_user/AppUserApi';
import { RunPullRequestApi } from '../run_pull_request/RunPullRequestApi';
import { RequirementPullRequestApi } from '../requirement_pull_request/RequirementPullRequestApi';
import { CheckSuitePullRequestApi } from '../check_suite_pull_request/CheckSuitePullRequestApi';

export interface PullRequestApi extends PullRequest {
  app_install_project?: AppInstallProjectApi;
  app_user?: AppUserApi;
  run_pull_request?: RunPullRequestApi[];
  requirement_pull_request?: RequirementPullRequestApi[];
  check_suite_pull_request?: CheckSuitePullRequestApi[];
}
