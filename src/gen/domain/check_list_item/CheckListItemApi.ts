/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { CheckListItem } from './CheckListItem';
import type { CheckListApi } from '../check_list/CheckListApi';
import type { CheckListItemUserApi } from '../check_list_item_user/CheckListItemUserApi';

export interface CheckListItemApi extends CheckListItem {
  check_list?: CheckListApi;
  check_list_item_user?: CheckListItemUserApi[];
}
