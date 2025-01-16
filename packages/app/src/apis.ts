import { AnyApiFactory, createApiFactory, configApiRef, errorApiRef, githubAuthApiRef } from '@backstage/core';
import { scmIntegrationsApiRef, ScmIntegrationsApi, ScmAuth } from '@backstage/integration-react';
import { graphQlBrowseApiRef, GraphQLEndpoints } from '@backstage/plugin-graphiql';


export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),

  createApiFactory({
    api: graphQlBrowseApiRef,
    deps: { errorApi: errorApiRef, githubAuthApi: githubAuthApiRef },
    factory: ({ errorApi, githubAuthApi }) =>
      GraphQLEndpoints.github({
        id: 'github',
        title: 'GitHub',
        url: 'https://api.github.com/graphql',
        errorApi: errorApi,
        githubAuthApi: githubAuthApi,
      }),
  }),
];
