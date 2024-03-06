/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Client } from './Client';

export interface ClientHistory extends Client {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
