import APIClient from './client';
import * as Type from './types';

export default class APIService extends APIClient {
  static async getLibraryHistories() {
    return await this.APIclient<Type.GetLibraryHistoriesResponse>({
      url: 'library-status/recap',
    });
  }
}
