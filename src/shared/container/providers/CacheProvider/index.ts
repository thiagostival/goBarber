import { container } from 'tsyringe';
import cacheConfig from '@config/cache';

import ICacheProvider from './models/ICacheProvider';

import RedisCacheProvider from './implementations/RedisCacheProvider';
import NullCacheProvider from './implementations/NullCacheProvider';

const providers = {
  null: NullCacheProvider,
  redis: RedisCacheProvider,
};

container.registerSingleton<ICacheProvider>(
  'CacheProvider',
  providers[cacheConfig.driver],
);
