import { superagent } from '../utils';
import config from '../config';

class NewsApiClient {

  static async news(): Promise<Object> {
    return superagent
      .get(`${this._baseUrl()}/everything?domains=ouest-france.fr&q=bretagne&apiKey=a7931df8164b45cca5bd8385fc287c8f`)
      .then(res => res.body.articles);
  }

  static _baseUrl(): string {
    return config.coreApi.baseUrlNews;
  }
}

export default NewsApiClient;
