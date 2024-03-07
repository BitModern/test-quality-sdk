/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { PullRequest } from './PullRequest';

export interface PullRequestHistory extends PullRequest {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
