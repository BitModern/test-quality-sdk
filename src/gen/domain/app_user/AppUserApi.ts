/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { AppUser } from './AppUser';
import type { PullRequestApi } from '../pull_request/PullRequestApi';
import type { AppInstallApi } from '../app_install/AppInstallApi';

export interface AppUserApi extends AppUser {
  pull_request?: PullRequestApi[];
  app_install?: AppInstallApi[];
}
