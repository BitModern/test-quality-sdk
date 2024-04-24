import { type ReturnToken } from './auth';

export interface TokenStorage {
  setToken: (
    token?: ReturnToken,
    remember?: boolean,
  ) => Promise<ReturnToken | undefined>;
  getToken: () => Promise<ReturnToken | undefined>;
  getRemember: () => Promise<boolean | undefined>;
}
