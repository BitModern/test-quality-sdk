/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { AppVersion } from './AppVersion';
import type { AppApi } from '../app/AppApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';

export interface AppVersionApi extends AppVersion {
  app?: AppApi;
  label_assigned?: LabelAssignedApi;
  app_version_plat_version?: AppVersionPlatVersionApi[];
}
