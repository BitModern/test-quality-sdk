/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { Project } from './Project';

export interface ProjectHistory extends Project {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
