/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { SharedStep } from './SharedStep';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { StepApi } from '../step/StepApi';

export interface SharedStepApi extends SharedStep {
  label_assigned?: LabelAssignedApi;
  step?: StepApi[];
}
