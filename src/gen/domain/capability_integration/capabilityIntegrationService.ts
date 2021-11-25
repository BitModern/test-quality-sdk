/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { CapabilityRoute, IntegrationRoute } from '../../routes/Routes';
import { Integration } from '../integration/Integration';
import { Capability } from '../capability/Capability';
import { CapabilityIntegration } from './CapabilityIntegration';
import { CapabilityIntegrationApi } from './CapabilityIntegrationApi';

export const capabilityIntegrationDetach = (
  data: Partial<CapabilityIntegration>,
  queryParams?: QueryParams<CapabilityIntegration>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<CapabilityIntegration> = {
    method: 'delete',
    url: `/capability_integration/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CapabilityIntegration>(
        queryParams?.api || _client?.api,
        config
      );
};

export const capabilityIntegrationUpdateOne = (
  id: number,
  data: Partial<CapabilityIntegration>,
  queryParams?: QueryParams<CapabilityIntegration>
): Promise<Capability> => {
  const config: QueryParams<CapabilityIntegration> = {
    method: 'put',
    url: `/capability_integration/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Capability>(config)
    : getResponse<Capability, Partial<CapabilityIntegration>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const capabilityIntegrationGetMany = (
  queryParams?: QueryParams<CapabilityIntegration>
): Promise<ResourceList<CapabilityIntegrationApi>> => {
  const config: QueryParams<CapabilityIntegration> = {
    method: 'get',
    url: queryParams?.url || `/capability_integration`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CapabilityIntegrationApi>>(config)
    : getResponse<
        ResourceList<CapabilityIntegrationApi>,
        CapabilityIntegration
      >(queryParams?.api || _client?.api, config);
};

export const capabilityIntegrationGetOne = (
  id: number,
  queryParams?: QueryParams<CapabilityIntegration>
): Promise<CapabilityIntegrationApi> => {
  const config: QueryParams<CapabilityIntegration> = {
    method: 'get',
    url: `${queryParams?.url || `/capability_integration/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CapabilityIntegrationApi>(config)
    : getResponse<CapabilityIntegrationApi, CapabilityIntegration>(
        queryParams?.api || _client?.api,
        config
      );
};

/**
 * capabilityAttachManyIntegration
 * This will remove any associations not in the list.
 * @param capabilityId
 * @param list of children to associate
 * @param queryParams
 */
export const capabilityAttachManyIntegration = (
  capabilityId: number,
  list: Partial<Integration>[],
  queryParams?: QueryParams<Capability>
): Promise<Capability> => {
  const config: QueryParams<
    Capability & { integration: Partial<Integration>[] }
  > = {
    method: 'put',
    url: `${CapabilityRoute()}/${capabilityId}`,
    params: queryParams?.params,
    data: {
      integration: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Capability>(config)
    : getResponse<Capability>(queryParams?.api || _client?.api, config);
};

/**
 * integrationAttachManyCapability
 * This will remove any associations not in the list.
 * @param integrationId
 * @param list of children to associate
 * @param queryParams
 */
export const integrationAttachManyCapability = (
  integrationId: number,
  list: Partial<Capability>[],
  queryParams?: QueryParams<Integration>
): Promise<Integration> => {
  const config: QueryParams<
    Integration & { capability: Partial<Capability>[] }
  > = {
    method: 'put',
    url: `${IntegrationRoute()}/${integrationId}`,
    params: queryParams?.params,
    data: {
      capability: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<Integration>(queryParams?.api || _client?.api, config);
};

export const capabilityAttachIntegration = (
  capabilityId: number,
  integrationId: number,
  capabilityIntegration?: Partial<CapabilityIntegration>,
  queryParams?: QueryParams
): Promise<Capability> => {
  const config: QueryParams<{
    id: number;
    integration_id: number;
    capability_integration?: Partial<CapabilityIntegration>;
  }> = {
    method: 'put',
    url: `${CapabilityRoute()}/${capabilityId}`,
    params: queryParams?.params,
    data: {
      id: capabilityId,
      integration_id: integrationId,
      capability_integration: capabilityIntegration,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Capability>(config)
    : getResponse<
        Capability,
        {
          id: number;
          integration_id: number;
          capability_integration?: Partial<CapabilityIntegration>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const capabilityCreateWithIntegration = (
  integrationId: number,
  data: Partial<Capability>,
  capabilityIntegration?: Partial<CapabilityIntegration>,
  queryParams?: QueryParams
): Promise<Capability> => {
  const config: QueryParams<
    Capability & {
      integration_id: number;
      capability_integration?: Partial<CapabilityIntegration>;
    }
  > = {
    method: 'post',
    url: CapabilityRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      integration_id: integrationId,
      capability_integration: capabilityIntegration,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Capability>(config)
    : getResponse<
        Capability,
        Capability & {
          integration_id: number;
          capability_integration?: Partial<CapabilityIntegration>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const integrationAttachCapability = (
  integrationId: number,
  capabilityId: number,
  capabilityIntegration?: Partial<CapabilityIntegration>,
  queryParams?: QueryParams
): Promise<Integration> => {
  const config: QueryParams<{
    id: number;
    capability_id: number;
    capability_integration?: Partial<CapabilityIntegration>;
  }> = {
    method: 'put',
    url: `${IntegrationRoute()}/${integrationId}`,
    params: queryParams?.params,
    data: {
      id: integrationId,
      capability_id: capabilityId,
      capability_integration: capabilityIntegration,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<
        Integration,
        {
          id: number;
          capability_id: number;
          capability_integration: Partial<CapabilityIntegration>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const integrationCreateWithCapability = (
  capabilityId: number,
  data: Partial<Integration>,
  capabilityIntegration?: Partial<CapabilityIntegration>,
  queryParams?: QueryParams
): Promise<Integration> => {
  const config: QueryParams<
    Integration & {
      capability_id: number;
      capability_integration?: Partial<CapabilityIntegration>;
    }
  > = {
    method: 'post',
    url: IntegrationRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      capability_id: capabilityId,
      capability_integration: capabilityIntegration,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<
        Integration,
        Integration & {
          capability_id: number;
          capability_integration?: Partial<CapabilityIntegration>;
        }
      >(queryParams?.api || _client?.api, config);
};
