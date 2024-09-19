/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Defect } from './Defect';
import type { ProjectApi } from '../project/ProjectApi';
import type { DefectStatusApi } from '../defect_status/DefectStatusApi';
import type { DefectResApi } from '../defect_res/DefectResApi';
import type { DefectExplorationItemApi } from '../defect_exploration_item/DefectExplorationItemApi';
import type { DefectRunResultApi } from '../defect_run_result/DefectRunResultApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';

export interface DefectApi extends Defect {
  project?: ProjectApi;
  defect_status?: DefectStatusApi;
  defect_res?: DefectResApi;
  defect_exploration_item?: DefectExplorationItemApi[];
  run_result?: RunResultApi[];
  attachment?: AttachmentApi;
  pivot?: DefectRunResultApi;
  defect_run_result?: Partial<DefectRunResultApi>;
}
