/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { CheckListItemUser } from './CheckListItemUser';
import type { CheckListItemApi } from '../check_list_item/CheckListItemApi';
import type { UserApi } from '../user/UserApi';

export interface CheckListItemUserApi extends CheckListItemUser {
  check_list_item?: CheckListItemApi;
  user?: UserApi;
}
