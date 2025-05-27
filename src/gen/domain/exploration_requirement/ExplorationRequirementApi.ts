/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ExplorationRequirement } from './ExplorationRequirement';
import type { ExplorationApi } from '../exploration/ExplorationApi';
import type { RequirementApi } from '../requirement/RequirementApi';

export interface ExplorationRequirementApi extends ExplorationRequirement {
  exploration?: ExplorationApi;
  requirement?: RequirementApi;
}
