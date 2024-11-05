import { _client } from '../../ClientSdk';
import { getResponse, type QueryParams } from '../../gen/actions';
import { type AccessRole, type Project } from '../../gen/domain';

export interface AccessRoleProjectParam {
  access_role_id?: number;
}

type AccessRoleProjectReturn = (AccessRole & {
  all_projects: boolean;
  project: Project[];
})[];

export const accessRoleProjectGetMany = (
  queryParams?: QueryParams<AccessRoleProjectParam>,
): Promise<AccessRoleProjectReturn> => {
  const config: QueryParams<AccessRoleProjectParam> = {
    method: 'get',
    url: queryParams?.url ?? '/access_role/project',
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRoleProjectReturn>(config)
    : getResponse<AccessRoleProjectReturn, AccessRoleProjectParam>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
