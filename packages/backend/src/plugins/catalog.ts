// import { GravatarProcessor } from '@roadiehq/catalog-backend-module-gravatar';
// import { PluginEnvironment } from '../types';
// import { CatalogBuilder } from '@backstage/plugin-catalog-backend/index';

// export default async function createPlugin(
//   env: PluginEnvironment,
// ): Promise<Router> {
//   const builder = await CatalogBuilder.create(env);

//   // ...

//   builder.addProcessor(new GravatarProcessor());

//   const { processingEngine, router } = await builder.build();
//   await processingEngine.start();

//   // ...

//   return router;
// }