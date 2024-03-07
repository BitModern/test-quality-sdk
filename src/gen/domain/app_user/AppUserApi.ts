/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AppUser } from './AppUser';
import { AppInstallApi } from '../app_install/AppInstallApi';
import { PullRequestApi } from '../pull_request/PullRequestApi';

export interface AppUserApi extends AppUser {
  app_install?: AppInstallApi[];
  pull_request?: PullRequestApi[];
}
