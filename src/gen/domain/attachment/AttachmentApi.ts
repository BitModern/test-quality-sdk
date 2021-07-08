/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Attachment } from './Attachment';
import { TestApi } from '../test/TestApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { PlanApi } from '../plan/PlanApi';
import { ProjectApi } from '../project/ProjectApi';

export interface AttachmentApi extends Attachment {
  test?: TestApi;
  run_result?: RunResultApi;
  run_result_step?: RunResultStepApi;
  plan?: PlanApi;
  project?: ProjectApi;
}
