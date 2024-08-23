/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Status } from './Status';
import type { StatusTypeApi } from '../status_type/StatusTypeApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import type { ExplorationApi } from '../exploration/ExplorationApi';
import type { ExplorationItemApi } from '../exploration_item/ExplorationItemApi';
import type { RunResultApi } from '../run_result/RunResultApi';

export interface StatusApi extends Status {
  status_type?: StatusTypeApi;
  label_assigned?: LabelAssignedApi;
  run_result_step?: RunResultStepApi[];
  exploration?: ExplorationApi[];
  exploration_item?: ExplorationItemApi[];
  run_result?: RunResultApi[];
}
