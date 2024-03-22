import { _client } from '../../../ClientSdk';
import { getResponse, QueryParams } from '../../../gen/actions';
import { TestRailCaseField } from '../interfaces/TestRailCaseField';

export const getCaseFields = (
  queryParams?: Omit<QueryParams<void>, 'url' | 'params'>,
): Promise<TestRailCaseField[]> => {
  const config: QueryParams<void> = {
    method: 'get',
    url: '/testrail/case-fields',
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestRailCaseField[]>(config)
    : getResponse<TestRailCaseField[], void>(
        queryParams?.api || _client?.api,
        config,
      );
};
