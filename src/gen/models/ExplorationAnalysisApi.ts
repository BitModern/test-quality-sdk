/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
export interface ExplorationAnalysisItemStatus {
  status_id: number;
  status_key: number;
  total: number;
}

export interface ExplorationAnalysisApi {
  defect_count: number;
  item_count: number;
  item_status: ExplorationAnalysisItemStatus[];
}
