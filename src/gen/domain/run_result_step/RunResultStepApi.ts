/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RunResultStep } from './RunResultStep';
import { RunResultApi } from '../run_result/RunResultApi';
import { StepApi } from '../step/StepApi';
import { StatusApi } from '../status/StatusApi';
import { ProjectApi } from '../project/ProjectApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { CommentApi } from '../comment/CommentApi';

export interface RunResultStepApi extends RunResultStep {
  run_result?: RunResultApi;
  step?: StepApi;
  status?: StatusApi;
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  attachment?: AttachmentApi;
  comment?: CommentApi;
}
