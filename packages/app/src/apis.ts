import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
  errorApiRef,
  githubAuthApiRef,
} from '@backstage/core-plugin-api';

import {
  graphQlBrowseApiRef,
  GraphQLEndpoints,
} from '@backstage-community/plugin-graphiql';

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: graphQlBrowseApiRef,
    deps: { errorApi: errorApiRef, githubAuthApi: githubAuthApiRef },
    factory: () =>
      GraphQLEndpoints.from([
        // Use the .create function if all you need is a static URL and headers.
        GraphQLEndpoints.create({
          id: 'gitlab',
          title: 'GitLab',
          url: 'https://gitlab.com/api/graphql',
          // Optional extra headers
          headers: { Extra: 'Header' },
        }),
        {
          id: 'hooli-search',
          title: 'Hooli Search',
          // Custom fetch function, this one is equivalent to using GraphQLEndpoints.create()
          // with url set to https://internal.hooli.com/search
          fetcher: async (params: any) => {
            return fetch('https://internal.hooli.com/search', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(params),
            }).then(res => res.json());
          },
          // Optional list of plugins
          plugins: []
        }
      ]),
  }),

  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
];
