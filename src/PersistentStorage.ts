export interface PersistentStorage {
  set<T>(property: string, value: T, that?: any): void;
  get<T>(property: string, defaultVal?: T, that?: any): T;
}
