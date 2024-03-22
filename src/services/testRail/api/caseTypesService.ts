import { _client } from '../../../ClientSdk';
import { getResponse, QueryParams } from '../../../gen/actions';
import { TestRailCaseType } from '../interfaces/TestRailCaseType';

export const getCaseTypes = (
  queryParams?: Omit<QueryParams<void>, 'url' | 'params'>,
): Promise<TestRailCaseType[]> => {
  const config: QueryParams<void> = {
    method: 'get',
    url: '/testrail/case-types',
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestRailCaseType[]>(config)
    : getResponse<TestRailCaseType[], void>(
        queryParams?.api || _client?.api,
        config,
      );
};
