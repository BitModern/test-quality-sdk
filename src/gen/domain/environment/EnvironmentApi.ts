/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Environment } from './Environment';
import type { EnvironmentResourceApi } from '../environment_resource/EnvironmentResourceApi';
import type { EnvironmentPlanApi } from '../environment_plan/EnvironmentPlanApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { EnvironmentExplorationApi } from '../environment_exploration/EnvironmentExplorationApi';
import type { ExplorationItemApi } from '../exploration_item/ExplorationItemApi';

export interface EnvironmentApi extends Environment {
  environment_resource?: EnvironmentResourceApi[];
  environment_plan?: EnvironmentPlanApi[];
  run_result?: RunResultApi[];
  environment_exploration?: EnvironmentExplorationApi[];
  exploration_item?: ExplorationItemApi[];
}
