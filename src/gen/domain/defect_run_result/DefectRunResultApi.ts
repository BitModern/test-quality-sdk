/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { DefectRunResult } from './DefectRunResult';
import { DefectApi } from '../defect/DefectApi';
import { RunResultApi } from '../run_result/RunResultApi';

export interface DefectRunResultApi extends DefectRunResult {
  defect?: DefectApi;
  run_result?: RunResultApi;
}
