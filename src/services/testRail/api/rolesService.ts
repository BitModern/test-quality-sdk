import { _client } from '../../../ClientSdk';
import { getResponse, QueryParams } from '../../../gen/actions';
import { TestRailRole } from '../interfaces/TestRailRole';

export const getRoles = (
  queryParams?: Omit<QueryParams<void>, 'url' | 'params'>
): Promise<TestRailRole[]> => {
  const config: QueryParams<void> = {
    method: 'get',
    url: '/testrail/roles',
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestRailRole[]>(config)
    : getResponse<TestRailRole[], void>(
        queryParams?.api || _client?.api,
        config
      );
};
