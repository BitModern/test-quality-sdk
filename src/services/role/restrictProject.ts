import { _client } from '../../ClientSdk';
import { getResponse, QueryParams } from '../../gen/actions';

export type RestrictProjectParam = {
  access_role_id: number;
  project_id: number | number[];
};

export type RestrictProjectReturn = {
  updated: number;
};

export const restrictProject = (
  data: Partial<RestrictProjectParam>,
  queryParams?: QueryParams<RestrictProjectParam>
): Promise<RestrictProjectReturn> => {
  const config: QueryParams<RestrictProjectParam> = {
    method: 'post',
    url: queryParams?.url || '/access_role/project',
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RestrictProjectReturn>(config)
    : getResponse<RestrictProjectReturn, RestrictProjectParam>(
        queryParams?.api || _client?.api,
        config
      );
};
