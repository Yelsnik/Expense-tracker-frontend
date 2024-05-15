import { StorageKey } from './enums';

const STORAGE =
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
    ? window.localStorage
    : null;

export class LocalStore {
  public saveToStore(): boolean {
    if (STORAGE === null) {
      return false;
    }

    let store;

    const rawStore = STORAGE.getItem(StorageKey.jwt_key);
    return true;
  }
}
