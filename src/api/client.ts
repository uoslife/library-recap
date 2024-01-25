import uoslifeBridge from '../bridge';

export default class APIClient {
  static async APIclient<ResponseType>({
    url,
  }: {
    url: string;
  }): Promise<ResponseType> {
    try {
      const response = await this.fetchWithToken(`/core/${url}`);
      return await response?.json();
    } catch (error) {
      throw Error();
    }
  }
  static async fetchWithToken(input: RequestInfo | URL) {
    const { accessToken } = await uoslifeBridge.getAccessToken();
    if (accessToken)
      return await fetch(input, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  }
}
