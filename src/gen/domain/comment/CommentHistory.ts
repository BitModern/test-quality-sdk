/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Comment } from './Comment';

export interface CommentHistory extends Comment {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
