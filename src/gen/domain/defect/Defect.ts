/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface Defect extends KeyedModel {
  id: number;
  /**
   * Contains the ID of the linked defect in the external system.
   */
  external_reference_id: string;
  integration_project_id: number;
  client_id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  related_type?: string;
  related_id?: number;
  /**
   * stores the generalized defect from the external system.
   */
  payload?: any;
  project_id: number;
  defect_status_id?: number;
  key: number;
  defect_res_id?: number;
  url?: string;
}
