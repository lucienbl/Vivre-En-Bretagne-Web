import { createAction } from 'redux-actions';
import {OpenWeatherMapApiClient, logCatch, NewsApiClient} from '../api';

export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_NEWS_ARTICLES = 'SET_NEWS_ARTICLES';

export const currentWeather = () =>
  async (dispatch: any) => {
    try {
      const currentWeather = await OpenWeatherMapApiClient.currentWeather();
      dispatch(createAction(SET_CURRENT_WEATHER)({ currentWeather }));
    } catch (e) { logCatch(e); }
  };

export const loadNews = () =>
  async (dispatch: any) => {
    try {
      const news = await NewsApiClient.news();
      dispatch(createAction(SET_NEWS_ARTICLES)({ news }));
    } catch (e) { logCatch(e); }
  };
