/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Defect } from './Defect';
import { RunResultApi } from '../run_result/RunResultApi';
import { ProjectApi } from '../project/ProjectApi';
import { DefectStatusApi } from '../defect_status/DefectStatusApi';
import { DefectResApi } from '../defect_res/DefectResApi';

export interface DefectApi extends Defect {
  run_result?: RunResultApi;
  project?: ProjectApi;
  defect_status?: DefectStatusApi;
  defect_res?: DefectResApi;
}
