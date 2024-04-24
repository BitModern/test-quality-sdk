/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { TestQuality } from './TestQuality';
import type { TestQualityTypeApi } from '../test_quality_type/TestQualityTypeApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { TestApi } from '../test/TestApi';

export interface TestQualityApi extends TestQuality {
  test_quality_type?: TestQualityTypeApi;
  label_assigned?: LabelAssignedApi;
  test?: TestApi[];
}
