/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { CheckSuite } from './CheckSuite';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import { CheckRunApi } from '../check_run/CheckRunApi';
import { CheckSuitePullRequestApi } from '../check_suite_pull_request/CheckSuitePullRequestApi';

export interface CheckSuiteApi extends CheckSuite {
  app_install_project?: AppInstallProjectApi;
  check_run?: CheckRunApi[];
  check_suite_pull_request?: CheckSuitePullRequestApi[];
}
