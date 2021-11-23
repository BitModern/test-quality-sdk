/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { Filter } from './Filter';

export interface FilterHistory extends Filter {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
