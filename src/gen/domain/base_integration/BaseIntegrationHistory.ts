/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { BaseIntegration } from './BaseIntegration';

export interface BaseIntegrationHistory extends BaseIntegration {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
