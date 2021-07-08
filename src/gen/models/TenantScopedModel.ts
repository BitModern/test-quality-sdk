/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
import { DefaultAttributes } from './DefaultAttributes';

export interface TenantScopedModel extends DefaultAttributes {
  client_id: number;
}
