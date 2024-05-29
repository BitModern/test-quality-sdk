/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DefectExplorationItem } from './DefectExplorationItem';
import type { DefectApi } from '../defect/DefectApi';
import type { ExplorationItemApi } from '../exploration_item/ExplorationItemApi';

export interface DefectExplorationItemApi extends DefectExplorationItem {
  defect?: DefectApi;
  exploration_item?: ExplorationItemApi;
}
