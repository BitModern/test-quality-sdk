/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RunSuite } from './RunSuite';
import { RunApi } from '../run/RunApi';
import { ProjectApi } from '../project/ProjectApi';

export interface RunSuiteApi extends RunSuite {
  run?: RunApi;
  project?: ProjectApi;
}
