/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { App } from './App';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { AppVersionApi } from '../app_version/AppVersionApi';

export interface AppApi extends App {
  label_assigned?: LabelAssignedApi;
  app_version?: AppVersionApi[];
}
