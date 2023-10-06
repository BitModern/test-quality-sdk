/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AppInstallProject } from './AppInstallProject';
import { AppInstallApi } from '../app_install/AppInstallApi';
import { PullRequestApi } from '../pull_request/PullRequestApi';
import { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';

export interface AppInstallProjectApi extends AppInstallProject {
  app_install?: AppInstallApi;
  pull_request?: PullRequestApi[];
  integration_project?: IntegrationProjectApi[];
}
