/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface Requirement extends KeyedModel {
  /**
   * Contains the ID of the linked requirement in the external system.
   */
  external_reference_id: string;
  related_type: string;
  related_id: number;
  integration_project_id: number;
  test_type_id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  payload?: any;
  project_id: number;
  key: number;
}
