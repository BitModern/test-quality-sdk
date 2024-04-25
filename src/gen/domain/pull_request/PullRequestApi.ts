/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { PullRequest } from './PullRequest';
import type { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import type { AppUserApi } from '../app_user/AppUserApi';
import type { PullRequestRunApi } from '../pull_request_run/PullRequestRunApi';
import type { PullRequestRequirementApi } from '../pull_request_requirement/PullRequestRequirementApi';
import type { CheckSuitePullRequestApi } from '../check_suite_pull_request/CheckSuitePullRequestApi';

export interface PullRequestApi extends PullRequest {
  app_install_project?: AppInstallProjectApi;
  app_user?: AppUserApi;
  pull_request_run?: PullRequestRunApi[];
  pull_request_requirement?: PullRequestRequirementApi[];
  check_suite_pull_request?: CheckSuitePullRequestApi[];
}
