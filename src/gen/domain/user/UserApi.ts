/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { User } from './User';
import type { ShareUserApi } from '../share_user/ShareUserApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';
import type { AccessRoleUserApi } from '../access_role_user/AccessRoleUserApi';
import type { AccessRoleApi } from '../access_role/AccessRoleApi';
import type { IntegrationUserApi } from '../integration_user/IntegrationUserApi';
import type { IntegrationApi } from '../integration/IntegrationApi';
import type { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';
import type { SubscriptionUserApi } from '../subscription_user/SubscriptionUserApi';
import type { NotificationsApi } from '../notifications/NotificationsApi';
import type { BillingContactApi } from '../billing_contact/BillingContactApi';
import type { CheckListItemUserApi } from '../check_list_item_user/CheckListItemUserApi';

export interface UserApi extends User {
  share_user?: ShareUserApi[];
  attachment?: AttachmentApi;
  access_role?: AccessRoleApi[];
  access_role_id?: number; // This field is required during create
  integration?: IntegrationApi[];
  subscriptions?: SubscriptionsApi[];
  subscription_user?: SubscriptionUserApi[];
  notifications?: NotificationsApi;
  billing_contact?: BillingContactApi[];
  check_list_item_user?: CheckListItemUserApi[];
  pivot?: AccessRoleUserApi | IntegrationUserApi;
  access_role_user?: Partial<AccessRoleUserApi>;
  integration_user?: Partial<IntegrationUserApi>;
}
