export interface PersistentStorage {
  set: <T>(property: string, value: T, that?: any) => Promise<void> | void;
  get: <T>(property: string, defaultVal?: T, that?: any) => Promise<T> | T;
}
