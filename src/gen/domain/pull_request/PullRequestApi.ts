/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { PullRequest } from './PullRequest';
import type { AppUserApi } from '../app_user/AppUserApi';
import type { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import type { PullRequestRequirementApi } from '../pull_request_requirement/PullRequestRequirementApi';
import type { CheckSuitePullRequestApi } from '../check_suite_pull_request/CheckSuitePullRequestApi';
import type { PullRequestRunApi } from '../pull_request_run/PullRequestRunApi';

export interface PullRequestApi extends PullRequest {
  app_user?: AppUserApi;
  app_install_project?: AppInstallProjectApi;
  pull_request_requirement?: PullRequestRequirementApi[];
  check_suite_pull_request?: CheckSuitePullRequestApi[];
  pull_request_run?: PullRequestRunApi[];
}
