/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { AppInstallProject } from './AppInstallProject';

export interface AppInstallProjectHistory extends AppInstallProject {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
