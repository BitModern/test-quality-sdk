/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Watch } from './Watch';
import { ProjectApi } from '../project/ProjectApi';
import { PlanApi } from '../plan/PlanApi';
import { SuiteApi } from '../suite/SuiteApi';
import { TestApi } from '../test/TestApi';

export interface WatchApi extends Watch {
  project?: ProjectApi;
  plan?: PlanApi;
  suite?: SuiteApi;
  test?: TestApi;
}
