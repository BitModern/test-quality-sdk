/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { EnvironmentProject } from './EnvironmentProject';
import type { ProjectApi } from '../project/ProjectApi';
import type { EnvironmentApi } from '../environment/EnvironmentApi';

export interface EnvironmentProjectApi extends EnvironmentProject {
  project?: ProjectApi;
  environment?: EnvironmentApi;
}
