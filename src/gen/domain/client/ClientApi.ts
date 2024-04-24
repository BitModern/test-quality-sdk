/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Client } from './Client';
import type { SignupOptionApi } from '../signup_option/SignupOptionApi';
import type { VirtualApi } from '../virtual/VirtualApi';

export interface ClientApi extends Client {
  signup_option?: SignupOptionApi[];
  virtual?: VirtualApi[];
}
