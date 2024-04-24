/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Milestone } from './Milestone';
import type { ProjectApi } from '../project/ProjectApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { RunApi } from '../run/RunApi';
import type { CommentApi } from '../comment/CommentApi';

export interface MilestoneApi extends Milestone {
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  run?: RunApi[];
  comment?: CommentApi;
}
