/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { DefectComponent } from './DefectComponent';
import { DefectApi } from '../defect/DefectApi';

export interface DefectComponentApi extends DefectComponent {
  defect?: DefectApi[];
}
