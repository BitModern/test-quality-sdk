/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AppInstall } from './AppInstall';
import { AppConfigApi } from '../app_config/AppConfigApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';

export interface AppInstallApi extends AppInstall {
  app_config?: AppConfigApi;
  integration?: IntegrationApi;
  app_install_project?: AppInstallProjectApi[];
}
