/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ProjectStatus } from './ProjectStatus';
import type { ProjectApi } from '../project/ProjectApi';
import type { StatusApi } from '../status/StatusApi';

export interface ProjectStatusApi extends ProjectStatus {
  project?: ProjectApi;
  status?: StatusApi;
}
