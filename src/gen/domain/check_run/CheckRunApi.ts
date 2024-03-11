/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { CheckRun } from './CheckRun';
import { CheckSuiteApi } from '../check_suite/CheckSuiteApi';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import { RunApi } from '../run/RunApi';

export interface CheckRunApi extends CheckRun {
  check_suite?: CheckSuiteApi;
  app_install_project?: AppInstallProjectApi;
  run?: RunApi[];
}
