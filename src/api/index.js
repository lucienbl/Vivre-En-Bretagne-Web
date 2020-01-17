import OpenWeatherMapApiClient from "./OpenWeatherMapApiClient";
import NewsApiClient from "./NewsApiClient";

const logCatch = (e: Object) => {
  console.error(e);
};

export {
  OpenWeatherMapApiClient,
  NewsApiClient,
  logCatch
}
