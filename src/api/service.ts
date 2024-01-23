import * as Type from './types';

export default class APIService {
  private static async APIclient<ResponseType>({
    accessToken,
    url,
  }: {
    accessToken: string;
    url: string;
  }): Promise<ResponseType> {
    try {
      const response = await fetch(`/core/${url}`, {
        headers: { Authorization: accessToken },
      });
      return await response.json();
    } catch (error) {
      throw Error();
    }
  }

  static async getLibraryHistories(accessToken: string) {
    return await this.APIclient<Type.GetLibraryHistoriesResponse>({
      accessToken,
      url: 'library-status',
    });
  }
}
