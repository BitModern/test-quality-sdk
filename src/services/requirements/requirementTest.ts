import { _client } from '../../ClientSdk';
import { getResponse, QueryParams } from '../../gen/actions';
import { RequirementTest } from '../../gen/domain';

export type RequirementTestParams = Partial<RequirementTest>;

export const postRequirementTests = (
  data: RequirementTestParams[],
  queryParams?: QueryParams<any>
): Promise<RequirementTest[]> => {
  const config: QueryParams<any> = {
    method: 'post',
    url: queryParams?.url || '/requirement_test',
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementTestParams[]>(config)
    : getResponse<any>(queryParams?.api || _client?.api, config);
};
