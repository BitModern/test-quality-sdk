import { _client } from '../../ClientSdk';
import { getResponse, type QueryParams } from '../../gen/actions';

export interface RestrictProjectParam {
  access_role_id: number;
  project_id: number | number[];
}

export interface RestrictProjectReturn {
  updated: number;
}

export const restrictProject = (
  data: Partial<RestrictProjectParam>,
  queryParams?: QueryParams<Partial<RestrictProjectParam>>,
): Promise<RestrictProjectReturn> => {
  const config: QueryParams<Partial<RestrictProjectParam>> = {
    method: 'post',
    url: queryParams?.url ?? '/access_role/project',
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RestrictProjectReturn>(config)
    : getResponse<RestrictProjectReturn, Partial<RestrictProjectParam>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
