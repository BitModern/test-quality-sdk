import { Run } from 'gen/domain';
import { _client } from '../../ClientSdk';
import { getResponse, QueryParams } from '../../gen/actions';

export type RequirementRunAnalysis = { runs: Run[]; run_results_ids: number[] };

export const getRequirementRunsAnalysis = (
  id: number,
  queryParams?: QueryParams<RequirementRunAnalysis>
): Promise<RequirementRunAnalysis> => {
  const config: QueryParams<RequirementRunAnalysis> = {
    method: 'get',
    url: `/requirement/${id}/run-analysis`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch(config)
    : getResponse<RequirementRunAnalysis>(
        queryParams?.api || _client?.api,
        config
      );
};
