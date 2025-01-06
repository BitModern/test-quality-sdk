/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface Attachment extends KeyedModel {
  related_id: number;
  related_type: string;
  /**
   * The URL to the file. This URL will typically be in cloud storage.
   * hoverhelp
   */
  url?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  client_id: number;
  epoch: number;
  id: number;
  original_file_name: string;
  size?: bigint;
  mime_type?: string;
  storage_path?: string;
  private_url?: string;
  is_public: boolean;
  public_path?: string;
  old_url?: string;
}
