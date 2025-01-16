import {
	AnyApiFactory,
	createApiFactory,
	configApiRef
} from '@backstage/core';

import {
	scmIntegrationsApiRef,
	ScmIntegrationsApi,
	ScmAuth
} from '@backstage/integration-react';

export const scmApis: AnyApiFactory[] = [
  // API para integrações com SCM
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),

  // API para autenticação padrão
  ScmAuth.createDefaultApiFactory(),
];
