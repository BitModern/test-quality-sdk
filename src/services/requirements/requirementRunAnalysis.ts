import { Run } from 'gen/domain';
import { _client } from '../../ClientSdk';
import { getResponse, QueryParams } from '../../gen/actions';

export type RequirementRunAnalysis = { runs: Run[]; run_results_ids: number[] };

export const getRequirementRunsAnalysis = (
  id: number,
  queryParams?: Omit<QueryParams<RequirementRunAnalysis>, 'url'>
): Promise<any[]> => {
  const config: QueryParams<RequirementRunAnalysis> = {
    method: 'get',
    url: `/requirement/${id}/run-analysis`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch(config)
    : getResponse<any[], RequirementRunAnalysis>(
        queryParams?.api || _client?.api,
        config
      );
};
