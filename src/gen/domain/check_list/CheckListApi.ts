/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { CheckList } from './CheckList';
import type { CheckListItemApi } from '../check_list_item/CheckListItemApi';

export interface CheckListApi extends CheckList {
  check_list_item?: CheckListItemApi[];
}
