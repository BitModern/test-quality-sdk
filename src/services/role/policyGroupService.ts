import { getResponse, type QueryParams } from '../../gen/actions';
import { type PolicyGroup } from './PolicyGroup';
import { _client } from '../../ClientSdk';

export enum PolicyGroupActions {
  view = 'view',
  edit = 'edit',
}

export interface PolicyGroupUpdate {
  access_role_id: number;
  actions: Record<PolicyGroupActions, boolean>;
}

export const policyGroupGetMany = (
  queryParams?: QueryParams,
): Promise<PolicyGroup[]> => {
  const config: QueryParams = {
    method: 'get',
    url: '/policy_group',
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyGroup[]>(config)
    : getResponse<PolicyGroup[], any>(queryParams?.api ?? _client?.api, config);
};

export const policyGroupUpdateOne = (
  id: number,
  data: PolicyGroupUpdate,
  queryParams?: QueryParams,
): Promise<PolicyGroup> => {
  const config: QueryParams = {
    method: 'put',
    url: `/policy_group/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyGroup>(config)
    : getResponse<PolicyGroup, PolicyGroupUpdate>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
