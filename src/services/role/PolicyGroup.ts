/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

export interface PolicyGroup {
  id: number;
  name: string;
  display: string;
  policies: string[];
  is_global_settings: boolean;
  available_actions: string[];
  is_dependent_on: Record<string, string[]>;
  is_display: boolean;
}
