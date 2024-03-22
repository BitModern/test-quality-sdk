/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface Policy extends KeyedModel {
  key: number;
  can_list?: boolean;
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  access_role_id: number;
  /**
   * The name of the policy.
   */
  name: string;
  /**
   * Can the row be edited?
   */
  can_edit?: boolean;
  /**
   * Can the row be deleted?
   */
  can_delete?: boolean;
  /**
   * Can the row be closed?
   */
  can_close?: boolean;
  /**
   * Can the row be viewed?
   */
  can_view?: boolean;
  client_id: number;
  /**
   * Can a new row be created?
   */
  can_create?: boolean;
  /**
   * Does this policy apply to all rows?
   */
  all_rows: boolean;
  /**
   * Can the row be exectued?
   */
  can_execute?: boolean;
  /**
   * Is this row a system row? A system row cannot be modified or deleted.
   */
  is_system?: boolean;
}
