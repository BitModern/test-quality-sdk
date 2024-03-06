/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { StatusType } from './StatusType';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { StatusApi } from '../status/StatusApi';

export interface StatusTypeApi extends StatusType {
  label_assigned?: LabelAssignedApi;
  status?: StatusApi[];
}
