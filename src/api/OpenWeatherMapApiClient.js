import { superagent } from '../utils';
import config from '../config';

class OpenWeatherMapApiClient {

  static async currentWeather(): Promise<Object> {
    return superagent
      .get(`${this._baseUrl()}/`) // TODO
      .then(res => res.body);
  }

  static _baseUrl(): string {
    return config.coreApi.baseUrlOpenWeatherMap;
  }
}

export default OpenWeatherMapApiClient;
