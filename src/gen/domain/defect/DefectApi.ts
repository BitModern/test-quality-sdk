/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Defect } from './Defect';
import { DefectStatusApi } from '../defect_status/DefectStatusApi';
import { DefectResApi } from '../defect_res/DefectResApi';
import { ProjectApi } from '../project/ProjectApi';
import { DefectRunResultApi } from '../defect_run_result/DefectRunResultApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { AttachmentApi } from '../attachment/AttachmentApi';

export interface DefectApi extends Defect {
  defect_status?: DefectStatusApi;
  defect_res?: DefectResApi;
  project?: ProjectApi;
  run_result?: RunResultApi[];
  attachment?: AttachmentApi;
  pivot?: DefectRunResultApi;
  defect_run_result?: Partial<DefectRunResultApi>;
}
