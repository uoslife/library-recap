import APIClient from './client';
import * as Type from './types';

export default class APIService extends APIClient {
  static async getLibraryHistories() {
    return await this.APIclient<Type.GetLibraryHistoriesResponse>({
      url: 'library-histories/recap?year=2023',
    });
  }
  static async saveLibraryHistories() {
    return await this.APIclient<Type.GetLibraryHistoriesResponse>({
      url: 'library-histories/save?year=2023',
      method: 'POST',
    });
  }
}
