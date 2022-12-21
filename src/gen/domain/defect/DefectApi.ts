/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Defect } from './Defect';
import { ProjectApi } from '../project/ProjectApi';
import { DefectStatusApi } from '../defect_status/DefectStatusApi';
import { DefectResApi } from '../defect_res/DefectResApi';
import { DefectRunResultApi } from '../defect_run_result/DefectRunResultApi';
import { RunResultApi } from '../run_result/RunResultApi';

export interface DefectApi extends Defect {
  project?: ProjectApi;
  defect_status?: DefectStatusApi;
  defect_res?: DefectResApi;
  run_result?: RunResultApi[];
  pivot?: DefectRunResultApi;
  defect_run_result?: Partial<DefectRunResultApi>;
}
