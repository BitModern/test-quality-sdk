/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PullRequest } from './PullRequest';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import { AppUserApi } from '../app_user/AppUserApi';
import { PullRequestRunApi } from '../pull_request_run/PullRequestRunApi';
import { RunApi } from '../run/RunApi';
import { PullRequestRequirementApi } from '../pull_request_requirement/PullRequestRequirementApi';
import { CheckSuitePullRequestApi } from '../check_suite_pull_request/CheckSuitePullRequestApi';

export interface PullRequestApi extends PullRequest {
  app_install_project?: AppInstallProjectApi;
  app_user?: AppUserApi;
  run?: RunApi[];
  run_id?: number; // This field is required during create
  pull_request_requirement?: PullRequestRequirementApi[];
  check_suite_pull_request?: CheckSuitePullRequestApi[];
  pivot?: PullRequestRunApi;
  pull_request_run?: Partial<PullRequestRunApi>;
}
