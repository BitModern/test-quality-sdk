/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
import type { RunStatusAnalysisApi } from './RunStatusAnalysisApi';

export interface RunAnalysisApi {
  status: RunStatusAnalysisApi[];
  defect_count: number;
  todo?: number;
  users?: number[];
}
