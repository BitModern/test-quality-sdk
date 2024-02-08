/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AppInstall } from './AppInstall';
import { AppConfigApi } from '../app_config/AppConfigApi';
import { AppUserApi } from '../app_user/AppUserApi';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';

export interface AppInstallApi extends AppInstall {
  app_config?: AppConfigApi;
  app_user?: AppUserApi;
  app_install_project?: AppInstallProjectApi[];
}
