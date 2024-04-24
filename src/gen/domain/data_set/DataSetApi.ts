/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DataSet } from './DataSet';
import type { ProjectApi } from '../project/ProjectApi';
import type { TestApi } from '../test/TestApi';

export interface DataSetApi extends DataSet {
  project?: ProjectApi;
  test?: TestApi[];
}
