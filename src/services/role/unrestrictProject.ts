import { _client } from '../../ClientSdk';
import { getResponse, QueryParams } from '../../gen/actions';

export type UnrestrictProjectParams = {
  access_role_id: number;
  project_id: number | number[];
};

export type UnrestrictProjectReturn = {
  deleted: number;
};

export const unrestrictProject = (
  data: UnrestrictProjectParams,
  queryParams?: QueryParams<UnrestrictProjectParams>,
): Promise<UnrestrictProjectReturn> => {
  const config: QueryParams<UnrestrictProjectParams> = {
    method: 'delete',
    url: queryParams?.url || '/access_role/project',
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<UnrestrictProjectReturn>(config)
    : getResponse<UnrestrictProjectReturn, UnrestrictProjectParams>(
        queryParams?.api || _client?.api,
        config,
      );
};
