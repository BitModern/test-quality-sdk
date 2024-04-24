/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { RunSuite } from './RunSuite';
import type { RunApi } from '../run/RunApi';
import type { ProjectApi } from '../project/ProjectApi';

export interface RunSuiteApi extends RunSuite {
  run?: RunApi;
  project?: ProjectApi;
}
