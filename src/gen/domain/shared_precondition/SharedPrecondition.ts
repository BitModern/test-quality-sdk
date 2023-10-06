/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface SharedPrecondition extends KeyedModel {
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * A step is a finite portion of a test specifying what needs to be tested. A step has an expected result.
   * A test is made of one or more tests.
   */
  precondition?: string;
  client_id: number;
  project_id: number;
  /**
   * specifies the order of steps within a test
   */
  sequence: number;
  id: number;
}
