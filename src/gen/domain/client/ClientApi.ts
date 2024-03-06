/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Client } from './Client';
import { VirtualApi } from '../virtual/VirtualApi';
import { SignupOptionApi } from '../signup_option/SignupOptionApi';

export interface ClientApi extends Client {
  virtual?: VirtualApi[];
  signup_option?: SignupOptionApi[];
}
