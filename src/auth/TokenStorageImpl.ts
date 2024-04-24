import { type TokenStorage } from '../TokenStorage';
import { type PersistentStorage } from '../PersistentStorage';
import { type ReturnToken } from './ReturnToken';

export class TokenStorageImpl implements TokenStorage {
  private token?: ReturnToken;
  private remember?: boolean;

  constructor(private readonly persistentStorage?: PersistentStorage) {}

  public async getRemember(): Promise<boolean | undefined> {
    if (this.remember === undefined && this.persistentStorage) {
      this.remember = await this.persistentStorage.get('remember');
    }
    return this.remember;
  }

  public async getToken(): Promise<ReturnToken | undefined> {
    if (!this.token && this.persistentStorage) {
      this.token = await this.persistentStorage.get('token');
    }
    return this.token;
  }

  public async setToken(
    token?: ReturnToken,
    remember?: boolean,
  ): Promise<ReturnToken | undefined> {
    this.token = token;
    this.remember = remember ?? (await this.getRemember());
    if (this.persistentStorage) {
      if (this.remember) {
        await this.persistentStorage.set('token', token);
      } else {
        await this.persistentStorage.set('token', undefined);
      }
      await this.persistentStorage.set('remember', this.remember);
    }
    return this.token;
  }
}
