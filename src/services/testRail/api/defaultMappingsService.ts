import { _client } from '../../../ClientSdk';
import { getResponse, type QueryParams } from '../../../gen/actions';
import { type DefaultMappings } from '../interfaces/DefaultMappings';

export const getDefaultMappings = (
  queryParams?: Omit<QueryParams<void>, 'url' | 'params'>,
): Promise<DefaultMappings> => {
  const config: QueryParams<void> = {
    method: 'get',
    url: '/testrail/default-mappings',
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefaultMappings>(config)
    : getResponse<DefaultMappings, void>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
