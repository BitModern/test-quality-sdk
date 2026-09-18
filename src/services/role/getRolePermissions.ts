import { _client } from '../../ClientSdk';
import { getResponse, type QueryParams } from '../../gen/actions';
import { type RolePermissions } from './PermissionGroup';

/** A role's per-table policies projected onto the permission groups. */
export const getRolePermissions = (
  accessRoleId: number,
  queryParams?: QueryParams<undefined>,
): Promise<RolePermissions> => {
  const config: QueryParams<undefined> = {
    method: 'get',
    url: queryParams?.url ?? `/access_role/${accessRoleId}/permissions`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RolePermissions>(config)
    : getResponse<RolePermissions, undefined>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
