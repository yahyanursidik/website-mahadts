import { makeRouteHandler } from '@keystatic/astro/api';
import keystaticConfig from '../../../../keystatic.config';

export const all = makeRouteHandler({
  config: keystaticConfig,
});
