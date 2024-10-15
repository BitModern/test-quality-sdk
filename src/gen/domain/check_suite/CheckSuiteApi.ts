/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { CheckSuite } from './CheckSuite';
import type { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import type { CheckRunApi } from '../check_run/CheckRunApi';
import type { CheckSuitePullRequestApi } from '../check_suite_pull_request/CheckSuitePullRequestApi';

export interface CheckSuiteApi extends CheckSuite {
  app_install_project?: AppInstallProjectApi;
  check_run?: CheckRunApi[];
  check_suite_pull_request?: CheckSuitePullRequestApi[];
}
