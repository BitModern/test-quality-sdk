/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Integration } from './Integration';

export interface IntegrationHistory extends Integration {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
