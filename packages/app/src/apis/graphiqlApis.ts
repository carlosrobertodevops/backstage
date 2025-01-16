// packages/app/src/apis.ts
import {
  AnyApiFactory,
  createApiFactory,
  errorApiRef,
  githubAuthApiRef
} from '@backstage/core';
import {
  graphQlBrowseApiRef,
  GraphQLEndpoints
} from '@backstage/plugin-graphiql'

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: graphQlBrowseApiRef,
    deps: { errorApi: errorApiRef, githubAuthApi: githubAuthApiRef },
    factory: ({ errorApi, githubAuthApi }) =>
        ({
          ...GraphQLEndpoints.github({
            id: 'github',
            title: 'GitHub',
            url: 'https://api.github.com/graphql',
            errorApi: errorApi,
            githubAuthApi: githubAuthApi
          }),
          getEndpoints: async () => [
            {
              id: 'github',
              title: 'GitHub',
              url: 'https://api.github.com/graphql',
              fetcher: async (body: any) => {
                const response = await fetch('https://api.github.com/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${await githubAuthApi.getAccessToken()}`,
                  },
                  body: JSON.stringify(body),
                });
                return response.json();
              }
            }
          ]
        })
  })
];