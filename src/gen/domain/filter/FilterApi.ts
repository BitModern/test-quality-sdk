/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Filter } from './Filter';
import { ProjectApi } from '../project/ProjectApi';

export interface FilterApi extends Filter {
  project?: ProjectApi;
}
