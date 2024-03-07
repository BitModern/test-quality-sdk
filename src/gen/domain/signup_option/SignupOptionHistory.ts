/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { SignupOption } from './SignupOption';

export interface SignupOptionHistory extends SignupOption {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
