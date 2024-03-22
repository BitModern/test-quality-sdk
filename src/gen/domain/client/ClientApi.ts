/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Client } from './Client';
import { SignupOptionApi } from '../signup_option/SignupOptionApi';
import { VirtualApi } from '../virtual/VirtualApi';

export interface ClientApi extends Client {
  signup_option?: SignupOptionApi[];
  virtual?: VirtualApi[];
}
