import { _client } from '../../ClientSdk';
import { getResponse, type QueryParams } from '../../gen/actions';
import { type AccessRole } from '../../gen/domain/access_role/AccessRole';

export interface CloneRoleParam {
  name: string;
  access_role_id: number;
  project_id?: number;
}

export const cloneRole = (
  data: Partial<CloneRoleParam>,
  queryParams?: QueryParams<CloneRoleParam>,
): Promise<AccessRole> => {
  const config: QueryParams<CloneRoleParam> = {
    method: 'post',
    url: queryParams?.url ?? '/access_role/clone_role',
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRole>(config)
    : getResponse<AccessRole>(queryParams?.api ?? _client?.api, config);
};
