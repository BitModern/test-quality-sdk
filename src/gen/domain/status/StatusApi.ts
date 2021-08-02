/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Status } from './Status';
import { StatusTypeApi } from '../status_type/StatusTypeApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { RunResultApi } from '../run_result/RunResultApi';

export interface StatusApi extends Status {
  status_type?: StatusTypeApi;
  label_assigned?: LabelAssignedApi;
  run_result_step?: RunResultStepApi[];
  run_result?: RunResultApi[];
}
