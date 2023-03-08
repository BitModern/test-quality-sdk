/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AppConfig } from './AppConfig';
import { BaseIntegrationApi } from '../base_integration/BaseIntegrationApi';
import { AppInstallApi } from '../app_install/AppInstallApi';

export interface AppConfigApi extends AppConfig {
  base_integration?: BaseIntegrationApi;
  app_install?: AppInstallApi[];
}
