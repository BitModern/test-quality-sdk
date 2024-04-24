/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DefectRunResult } from './DefectRunResult';
import type { DefectApi } from '../defect/DefectApi';
import type { RunResultApi } from '../run_result/RunResultApi';

export interface DefectRunResultApi extends DefectRunResult {
  defect?: DefectApi;
  run_result?: RunResultApi;
}
