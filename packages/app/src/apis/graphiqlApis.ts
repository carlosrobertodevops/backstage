// packages/app/src/apis.ts
import {
  AnyApiFactory,
  createApiFactory
} from '@backstage/core';
import {
  graphQlBrowseApiRef,
  GraphQLEndpoints
} from '@backstage/plugin-graphiql'

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: graphQlBrowseApiRef,
    deps: { },
    factory: () =>
      GraphQLEndpoints.from([
        // use the create function to connect an unauthenticated GraphQL API
        GraphQLEndpoints.create({
          id: 'gitlab',
          title: 'GitLab',
          url: 'https://gitlab.com/api/graphql',
          headers: { 'Some-Key': 'Some-Value' }
        })
      ])
  })
];