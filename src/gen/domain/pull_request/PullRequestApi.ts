/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PullRequest } from './PullRequest';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import { CheckSuiteApi } from '../check_suite/CheckSuiteApi';
import { PlanPullRequestApi } from '../plan_pull_request/PlanPullRequestApi';

export interface PullRequestApi extends PullRequest {
  app_install_project?: AppInstallProjectApi;
  check_suite?: CheckSuiteApi[];
  plan_pull_request?: PlanPullRequestApi[];
}
