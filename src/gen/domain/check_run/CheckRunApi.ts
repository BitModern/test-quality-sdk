/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { CheckRun } from './CheckRun';
import type { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import type { CheckSuiteApi } from '../check_suite/CheckSuiteApi';
import type { RunApi } from '../run/RunApi';

export interface CheckRunApi extends CheckRun {
  app_install_project?: AppInstallProjectApi;
  check_suite?: CheckSuiteApi;
  run?: RunApi[];
}
