/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Watch } from './Watch';
import type { ProjectApi } from '../project/ProjectApi';
import type { PlanApi } from '../plan/PlanApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { TestApi } from '../test/TestApi';

export interface WatchApi extends Watch {
  project?: ProjectApi;
  plan?: PlanApi;
  suite?: SuiteApi;
  test?: TestApi;
}
