/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { BaseCapabilityRoute, BaseIntegrationRoute } from '../../routes/Routes';
import { BaseIntegration } from '../base_integration/BaseIntegration';
import { BaseCapability } from '../base_capability/BaseCapability';
import { BaseCapabilityBaseIntegration } from './BaseCapabilityBaseIntegration';
import { BaseCapabilityBaseIntegrationApi } from './BaseCapabilityBaseIntegrationApi';

export const baseCapabilityBaseIntegrationDetach = (
  data: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams<BaseCapabilityBaseIntegration>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<BaseCapabilityBaseIntegration> = {
    method: 'delete',
    url: `/base_capability_base_integration/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, BaseCapabilityBaseIntegration>(
        queryParams?.api || _client?.api,
        config
      );
};

export const baseCapabilityBaseIntegrationUpdateOne = (
  id: number,
  data: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams<BaseCapabilityBaseIntegration>
): Promise<BaseCapability> => {
  const config: QueryParams<BaseCapabilityBaseIntegration> = {
    method: 'put',
    url: `/base_capability_base_integration/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapability>(config)
    : getResponse<BaseCapability, Partial<BaseCapabilityBaseIntegration>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const baseCapabilityBaseIntegrationGetMany = (
  queryParams?: QueryParams<BaseCapabilityBaseIntegration>
): Promise<ResourceList<BaseCapabilityBaseIntegrationApi>> => {
  const config: QueryParams<BaseCapabilityBaseIntegration> = {
    method: 'get',
    url: queryParams?.url || `/base_capability_base_integration`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<
        ResourceList<BaseCapabilityBaseIntegrationApi>
      >(config)
    : getResponse<
        ResourceList<BaseCapabilityBaseIntegrationApi>,
        BaseCapabilityBaseIntegration
      >(queryParams?.api || _client?.api, config);
};

export const baseCapabilityBaseIntegrationGetOne = (
  id: number,
  queryParams?: QueryParams<BaseCapabilityBaseIntegration>
): Promise<BaseCapabilityBaseIntegrationApi> => {
  const config: QueryParams<BaseCapabilityBaseIntegration> = {
    method: 'get',
    url: `${queryParams?.url || `/base_capability_base_integration/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapabilityBaseIntegrationApi>(config)
    : getResponse<
        BaseCapabilityBaseIntegrationApi,
        BaseCapabilityBaseIntegration
      >(queryParams?.api || _client?.api, config);
};

/**
 * baseCapabilityAttachManyBaseIntegration
 * This will remove any associations not in the list.
 * @param baseCapabilityId
 * @param list of children to associate
 * @param queryParams
 */
export const baseCapabilityAttachManyBaseIntegration = (
  baseCapabilityId: number,
  list: Partial<BaseIntegration>[],
  queryParams?: QueryParams<BaseCapability>
): Promise<BaseCapability> => {
  const config: QueryParams<
    BaseCapability & { base_integration: Partial<BaseIntegration>[] }
  > = {
    method: 'put',
    url: `${BaseCapabilityRoute()}/${baseCapabilityId}`,
    params: queryParams?.params,
    data: {
      base_integration: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapability>(config)
    : getResponse<BaseCapability>(queryParams?.api || _client?.api, config);
};

/**
 * baseIntegrationAttachManyBaseCapability
 * This will remove any associations not in the list.
 * @param baseIntegrationId
 * @param list of children to associate
 * @param queryParams
 */
export const baseIntegrationAttachManyBaseCapability = (
  baseIntegrationId: number,
  list: Partial<BaseCapability>[],
  queryParams?: QueryParams<BaseIntegration>
): Promise<BaseIntegration> => {
  const config: QueryParams<
    BaseIntegration & { base_capability: Partial<BaseCapability>[] }
  > = {
    method: 'put',
    url: `${BaseIntegrationRoute()}/${baseIntegrationId}`,
    params: queryParams?.params,
    data: {
      base_capability: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegration>(config)
    : getResponse<BaseIntegration>(queryParams?.api || _client?.api, config);
};

export const baseCapabilityAttachBaseIntegration = (
  baseCapabilityId: number,
  baseIntegrationId: number,
  baseCapabilityBaseIntegration?: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams
): Promise<BaseCapability> => {
  const config: QueryParams<{
    id: number;
    base_integration_id: number;
    base_capability_base_integration?: Partial<BaseCapabilityBaseIntegration>;
  }> = {
    method: 'put',
    url: `${BaseCapabilityRoute()}/${baseCapabilityId}`,
    params: queryParams?.params,
    data: {
      id: baseCapabilityId,
      base_integration_id: baseIntegrationId,
      base_capability_base_integration: baseCapabilityBaseIntegration,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapability>(config)
    : getResponse<
        BaseCapability,
        {
          id: number;
          base_integration_id: number;
          base_capability_base_integration?: Partial<BaseCapabilityBaseIntegration>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const baseCapabilityCreateWithBaseIntegration = (
  baseIntegrationId: number,
  data: Partial<BaseCapability>,
  baseCapabilityBaseIntegration?: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams
): Promise<BaseCapability> => {
  const config: QueryParams<
    BaseCapability & {
      base_integration_id: number;
      base_capability_base_integration?: Partial<BaseCapabilityBaseIntegration>;
    }
  > = {
    method: 'post',
    url: BaseCapabilityRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      base_integration_id: baseIntegrationId,
      base_capability_base_integration: baseCapabilityBaseIntegration,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapability>(config)
    : getResponse<
        BaseCapability,
        BaseCapability & {
          base_integration_id: number;
          base_capability_base_integration?: Partial<BaseCapabilityBaseIntegration>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const baseIntegrationAttachBaseCapability = (
  baseIntegrationId: number,
  baseCapabilityId: number,
  baseCapabilityBaseIntegration?: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams
): Promise<BaseIntegration> => {
  const config: QueryParams<{
    id: number;
    base_capability_id: number;
    base_capability_base_integration?: Partial<BaseCapabilityBaseIntegration>;
  }> = {
    method: 'put',
    url: `${BaseIntegrationRoute()}/${baseIntegrationId}`,
    params: queryParams?.params,
    data: {
      id: baseIntegrationId,
      base_capability_id: baseCapabilityId,
      base_capability_base_integration: baseCapabilityBaseIntegration,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegration>(config)
    : getResponse<
        BaseIntegration,
        {
          id: number;
          base_capability_id: number;
          base_capability_base_integration: Partial<BaseCapabilityBaseIntegration>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const baseIntegrationCreateWithBaseCapability = (
  baseCapabilityId: number,
  data: Partial<BaseIntegration>,
  baseCapabilityBaseIntegration?: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams
): Promise<BaseIntegration> => {
  const config: QueryParams<
    BaseIntegration & {
      base_capability_id: number;
      base_capability_base_integration?: Partial<BaseCapabilityBaseIntegration>;
    }
  > = {
    method: 'post',
    url: BaseIntegrationRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      base_capability_id: baseCapabilityId,
      base_capability_base_integration: baseCapabilityBaseIntegration,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegration>(config)
    : getResponse<
        BaseIntegration,
        BaseIntegration & {
          base_capability_id: number;
          base_capability_base_integration?: Partial<BaseCapabilityBaseIntegration>;
        }
      >(queryParams?.api || _client?.api, config);
};
