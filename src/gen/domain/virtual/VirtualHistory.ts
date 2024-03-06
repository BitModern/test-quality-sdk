/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Virtual } from './Virtual';

export interface VirtualHistory extends Virtual {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
