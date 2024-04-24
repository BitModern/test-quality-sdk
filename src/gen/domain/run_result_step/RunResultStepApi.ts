/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { RunResultStep } from './RunResultStep';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { StepApi } from '../step/StepApi';
import type { StatusApi } from '../status/StatusApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';
import type { CommentApi } from '../comment/CommentApi';

export interface RunResultStepApi extends RunResultStep {
  run_result?: RunResultApi;
  step?: StepApi;
  status?: StatusApi;
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  attachment?: AttachmentApi;
  comment?: CommentApi;
}
