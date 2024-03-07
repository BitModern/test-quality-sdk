/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AppVersion } from './AppVersion';
import { AppApi } from '../app/AppApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';

export interface AppVersionApi extends AppVersion {
  app?: AppApi;
  label_assigned?: LabelAssignedApi;
  app_version_plat_version?: AppVersionPlatVersionApi[];
}
