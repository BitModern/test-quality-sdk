/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ExplorationItem } from './ExplorationItem';
import type { ProjectApi } from '../project/ProjectApi';
import type { ExplorationApi } from '../exploration/ExplorationApi';
import type { StatusApi } from '../status/StatusApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { DefectExplorationItemApi } from '../defect_exploration_item/DefectExplorationItemApi';

export interface ExplorationItemApi extends ExplorationItem {
  project?: ProjectApi;
  exploration?: ExplorationApi;
  status?: StatusApi;
  label_assigned?: LabelAssignedApi;
  defect_exploration_item?: DefectExplorationItemApi[];
}
