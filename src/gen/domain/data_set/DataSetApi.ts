/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { DataSet } from './DataSet';
import { ProjectApi } from '../project/ProjectApi';
import { TestApi } from '../test/TestApi';

export interface DataSetApi extends DataSet {
  project?: ProjectApi;
  test?: TestApi[];
}
