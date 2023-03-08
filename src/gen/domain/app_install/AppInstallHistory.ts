/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { AppInstall } from './AppInstall';

export interface AppInstallHistory extends AppInstall {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
