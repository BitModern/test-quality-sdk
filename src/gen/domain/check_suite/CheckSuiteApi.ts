/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { CheckSuite } from './CheckSuite';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import { CheckRunApi } from '../check_run/CheckRunApi';

export interface CheckSuiteApi extends CheckSuite {
  app_install_project?: AppInstallProjectApi;
  check_run?: CheckRunApi[];
}
