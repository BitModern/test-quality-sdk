/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Milestone } from './Milestone';
import { ProjectApi } from '../project/ProjectApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { CommentApi } from '../comment/CommentApi';
import { RunApi } from '../run/RunApi';

export interface MilestoneApi extends Milestone {
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  comment?: CommentApi;
  run?: RunApi[];
}
