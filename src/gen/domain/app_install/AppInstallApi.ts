/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { AppInstall } from './AppInstall';
import type { AppUserApi } from '../app_user/AppUserApi';
import type { AppConfigApi } from '../app_config/AppConfigApi';
import type { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';

export interface AppInstallApi extends AppInstall {
  app_user?: AppUserApi;
  app_config?: AppConfigApi;
  app_install_project?: AppInstallProjectApi[];
}
