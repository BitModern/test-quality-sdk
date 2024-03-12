/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PullRequest } from './PullRequest';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import { AppUserApi } from '../app_user/AppUserApi';

export interface PullRequestApi extends PullRequest {
  app_install_project?: AppInstallProjectApi;
  app_user?: AppUserApi;
}
