/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { PlatVersion } from './PlatVersion';
import type { PlatApi } from '../plat/PlatApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';

export interface PlatVersionApi extends PlatVersion {
  plat?: PlatApi;
  label_assigned?: LabelAssignedApi;
  app_version_plat_version?: AppVersionPlatVersionApi[];
}
