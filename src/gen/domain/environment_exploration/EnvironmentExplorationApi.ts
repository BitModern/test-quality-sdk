/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { EnvironmentExploration } from './EnvironmentExploration';
import type { EnvironmentApi } from '../environment/EnvironmentApi';
import type { ExplorationApi } from '../exploration/ExplorationApi';

export interface EnvironmentExplorationApi extends EnvironmentExploration {
  environment?: EnvironmentApi;
  exploration?: ExplorationApi;
}
