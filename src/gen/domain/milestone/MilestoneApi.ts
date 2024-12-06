/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Milestone } from './Milestone';
import type { ProjectApi } from '../project/ProjectApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { CommentApi } from '../comment/CommentApi';
import type { RunApi } from '../run/RunApi';
import type { ExplorationApi } from '../exploration/ExplorationApi';

export interface MilestoneApi extends Milestone {
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  comment?: CommentApi;
  run?: RunApi[];
  exploration?: ExplorationApi[];
}
