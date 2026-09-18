import { _client } from '../../ClientSdk';
import { getResponse, type QueryParams } from '../../gen/actions';
import { type PermissionGroupDefinition } from './PermissionGroup';

export interface PermissionGroupsReturn {
  groups: PermissionGroupDefinition[];
}

/** The permission groups the Roles UI renders, as the backend defines them. */
export const getPermissionGroups = (
  queryParams?: QueryParams<undefined>,
): Promise<PermissionGroupsReturn> => {
  const config: QueryParams<undefined> = {
    method: 'get',
    url: queryParams?.url ?? '/permission_group',
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PermissionGroupsReturn>(config)
    : getResponse<PermissionGroupsReturn, undefined>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
