/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { IntegrationTemplate } from './IntegrationTemplate';

export interface IntegrationTemplateHistory extends IntegrationTemplate {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
