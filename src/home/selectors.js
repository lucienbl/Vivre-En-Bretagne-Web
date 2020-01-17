import { createSelector } from 'reselect';
import * as storeKeys from './storeKeys';

const root = state => state[storeKeys.ROOT];

export const currentWeather = createSelector(
  root,
  state => state[storeKeys.KEY_CURRENT_WEATHER],
);

export const news = createSelector(
  root,
  state => state[storeKeys.KEY_NEWS_ARTICLES],
);
