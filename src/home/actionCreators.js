import { createAction } from 'redux-actions';
import { OpenWeatherMapApiClient, logCatch } from '../api';

export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';

export const currentWeather = () =>
  async (dispatch: any) => {
    try {
      const currentWeather = await OpenWeatherMapApiClient.currentWeather();
      dispatch(createAction(SET_CURRENT_WEATHER)({ currentWeather }));
    } catch (e) { logCatch(e); }
  };
