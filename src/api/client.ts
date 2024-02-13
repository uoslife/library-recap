import uoslifeBridge from '../bridge';
import { FetchMethodType } from './types';

export default class APIClient {
  static async APIclient<ResponseType>({
    url,
    method = 'GET',
  }: {
    url: string;
    method?: FetchMethodType;
  }): Promise<ResponseType> {
    try {
      const response = await this.fetchWithToken(`/core/${url}`, method);
      return await response?.json();
    } catch (error) {
      throw Error();
    }
  }
  static async fetchWithToken(
    input: RequestInfo | URL,
    method: FetchMethodType,
  ) {
    const { accessToken } = await uoslifeBridge.getAccessToken();
    if (accessToken)
      return await fetch(input, {
        headers: { Authorization: `Bearer ${accessToken}` },
        method,
      });
  }
}
