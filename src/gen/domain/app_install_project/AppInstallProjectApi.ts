/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { AppInstallProject } from './AppInstallProject';
import type { AppInstallApi } from '../app_install/AppInstallApi';
import type { PullRequestApi } from '../pull_request/PullRequestApi';
import type { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';
import type { CheckSuiteApi } from '../check_suite/CheckSuiteApi';
import type { CheckRunApi } from '../check_run/CheckRunApi';

export interface AppInstallProjectApi extends AppInstallProject {
  app_install?: AppInstallApi;
  pull_request?: PullRequestApi[];
  integration_project?: IntegrationProjectApi[];
  check_suite?: CheckSuiteApi[];
  check_run?: CheckRunApi[];
}
