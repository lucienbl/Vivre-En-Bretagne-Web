import { superagent } from '../utils';
import config from '../config';

class OpenWeatherMapApiClient {

  static async currentWeather(): Promise<Object> {
    return superagent
      .get(`${this._baseUrl()}/weather?q=Trebeurden&APPID=6dc38267993775e7d57984a4c01712a7&units=metric`) // TODO
      .then(res => res.body);
  }

  static _baseUrl(): string {
    return config.coreApi.baseUrlOpenWeatherMap;
  }
}

export default OpenWeatherMapApiClient;
