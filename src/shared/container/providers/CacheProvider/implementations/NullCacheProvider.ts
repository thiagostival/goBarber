import ICacheProvider from '../models/ICacheProvider';

export default class NullCacheProvider implements ICacheProvider {
  private cache: string;

  public async save(): Promise<void> {
    delete this.cache;
  }

  public async recover<T>(): Promise<T | null> {
    return null;
  }

  public async invalidate(): Promise<void> {
    delete this.cache;
  }

  public async invalidatePrefix(): Promise<void> {
    delete this.cache;
  }
}
