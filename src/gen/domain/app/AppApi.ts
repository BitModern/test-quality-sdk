/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { App } from './App';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';

export interface AppApi extends App {
  label_assigned?: LabelAssignedApi;
}
