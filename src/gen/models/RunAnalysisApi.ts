/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
import { RunStatusAnalysisApi } from './RunStatusAnalysisApi';

export interface RunAnalysisApi {
  status: RunStatusAnalysisApi[];
  defect_count: number;
  todo?: number;
  users?: {
    email: string;
    given_name?: string;
    family_name?: string;
    picture?: string;
  }[];
}
