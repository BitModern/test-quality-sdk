import { _client } from '../../../ClientSdk';
import { getResponse, QueryParams } from '../../../gen/actions';
import { TestRailPriority } from '../interfaces/TestRailPriority';

export const getPriorities = (
  queryParams?: Omit<QueryParams<void>, 'url' | 'params'>
): Promise<TestRailPriority[]> => {
  const config: QueryParams<void> = {
    method: 'get',
    url: '/testrail/priorities',
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestRailPriority[]>(config)
    : getResponse<TestRailPriority[], void>(
        queryParams?.api || _client?.api,
        config
      );
};
