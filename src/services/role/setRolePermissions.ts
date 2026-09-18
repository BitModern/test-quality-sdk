import { _client } from '../../ClientSdk';
import { getResponse, type QueryParams } from '../../gen/actions';
import {
  type RolePermissions,
  type SetRolePermissionsParam,
} from './PermissionGroup';

/**
 * Write a role's group toggles and project restriction in one transaction and
 * get the fresh projection back. Idempotent. 422 on a system role — clone it
 * first (cloneRole). Requires update on the role and on policy; project
 * restriction additionally requires create+delete on policy_rows.
 */
export const setRolePermissions = (
  accessRoleId: number,
  data: SetRolePermissionsParam,
  queryParams?: QueryParams<SetRolePermissionsParam>,
): Promise<RolePermissions> => {
  const config: QueryParams<SetRolePermissionsParam> = {
    method: 'put',
    url: queryParams?.url ?? `/access_role/${accessRoleId}/permissions`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RolePermissions>(config)
    : getResponse<RolePermissions, SetRolePermissionsParam>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
