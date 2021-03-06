import {environment} from '../../../environments/environment';
import {ObjectUtils} from './object.utils';
import {CryptoJsUtils} from './cryptojs.utils';

export class LocalStorageUtils {
  /**
   * @description
   * Get an instance of LocalStorage.
   */
  public static getStorage(): LocalStorage {
    return ObjectUtils.isEmpty(localStorage.getItem(environment.LOCAL_STORAGE_NAME)) ?
      new LocalStorage() :
      JSON.parse(CryptoJsUtils.decrypt(localStorage.getItem(environment.LOCAL_STORAGE_NAME)));
  }

  /**
   * @param data A local storage instance to save.
   *
   * @description
   * Make sure you use LocalStorageUtil.getStorage() method before
   * to get instance of LocalStorage. Edit the instance and use
   * LocalStorageUtil.setStorage() to set in the browser's localStorage.
   */
  public static setStorage(data: LocalStorage): void {
    localStorage.setItem(environment.LOCAL_STORAGE_NAME, CryptoJsUtils.encrypt(JSON.stringify(data)));
  }

  /**
   * @description
   * Passes empty JSON to clear the storage.
   */
  public static clearStorage(): void {
    LocalStorageUtils.setStorage(new LocalStorage());
  }

}

export class LocalStorage {
  at: string;
}
