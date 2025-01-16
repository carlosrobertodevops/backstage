
import { AnyApiFactory } from '@backstage/core';
import { scmApis } from './apis/scmApis';
import { graphiqlApis } from './apis/graphiqlApis';

export const apis: AnyApiFactory[] = [
  ...scmApis,
  ...graphiqlApis,
];


// import {
//   ScmIntegrationsApi,
//   scmIntegrationsApiRef,
//   ScmAuth,
// } from '@backstage/integration-react';

// /***
// GRAPHQL
// ***/

// import {
//   AnyApiFactory,
//   createApiFactory,
//   errorApiRef,
//   githubAuthApiRef
// } from '@backstage/core';
// import {
//   graphQlBrowseApiRef,
//   GraphQLEndpoints
// } from '@backstage/plugin-graphiql'


// export const apis: AnyApiFactory[] = [
//   createApiFactory({
//     api: scmIntegrationsApiRef,
//     deps: { configApi: configApiRef },
//     factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
//   }),
//   ScmAuth.createDefaultApiFactory(),

//   createApiFactory({
//     api: graphQlBrowseApiRef,
//     deps: { errorApi: errorApiRef, githubAuthApi: githubAuthApiRef },
//     factory: ({ errorApi, githubAuthApi }) =>
//         GraphQLEndpoints.github({
//           id: 'github',
//           title: 'GitHub',
//           url: 'https://api.github.com/graphql',
//           errorApi: errorApi,
//           githubAuthApi: githubAuthApi
//         })
//       ])
//   })
// ];



// import { AnyApiFactory, createApiFactory } from '@backstage/core-plugin-api';
// import { scmIntegrationsApiRef, ScmIntegrationsApi, ScmAuth } from '@backstage/integration-react';
// import { graphQlBrowseApiRef, GraphQLEndpoints } from '@backstage/plugin-graphiql';
// import { configApiRef, errorApiRef, githubAuthApiRef } from '@backstage/core-plugin-api';

// export const apis: AnyApiFactory[] = [
//   // API para integrações com SCM
//   createApiFactory({
//     api: scmIntegrationsApiRef,
//     deps: { configApi: configApiRef },
//     factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
//   }),

//   // API para autenticação padrão
//   ScmAuth.createDefaultApiFactory(),

//   // API para navegação GraphQL no GitHub
//   createApiFactory({
//     api: graphQlBrowseApiRef,
//     deps: { errorApi: errorApiRef, githubAuthApi: githubAuthApiRef },
//     factory: ({ errorApi, githubAuthApi }) =>
//       GraphQLEndpoints.github({
//         id: 'github',
//         title: 'GitHub',
//         url: 'https://api.github.com/graphql',
//         errorApi: errorApi,
//         githubAuthApi: githubAuthApi,
//       }),
//   }),

//   // Adicione outras APIs abaixo...
//   createApiFactory({
//     api: /* outraApiRef */,
//     deps: { /* dependências necessárias */ },
//     factory: ({ /* dependências */ }) => {
//       // Lógica de criação da API
//     },
//   }),
// ];
