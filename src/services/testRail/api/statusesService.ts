import { _client } from '../../../ClientSdk';
import { getResponse, type QueryParams } from '../../../gen/actions';
import { type TestRailStatus } from '../interfaces/TestRailStatus';

export const getStatuses = (
  queryParams?: Omit<QueryParams<void>, 'url' | 'params'>,
): Promise<TestRailStatus[]> => {
  const config: QueryParams<void> = {
    method: 'get',
    url: '/testrail/statuses',
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestRailStatus[]>(config)
    : getResponse<TestRailStatus[], void>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
