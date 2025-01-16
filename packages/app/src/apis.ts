
import { AnyApiFactory } from '@backstage/core';
import { scmApis } from './apis/scmApis';
import { graphiqlApis } from './apis/graphiqlApis';

export const apis: AnyApiFactory[] = [
  ...scmApis,
  ...graphiqlApis,
];

