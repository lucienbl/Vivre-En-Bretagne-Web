import { handleActions } from "redux-actions";
import * as Actions from './actionCreators';
import * as storeKeys from './storeKeys';

const initialState = {
  [storeKeys.KEY_CURRENT_WEATHER]: {},
  [storeKeys.KEY_NEWS_ARTICLES]: [],
};

export default handleActions({
  [Actions.SET_CURRENT_WEATHER]: (state, action) => ({
    ...state,
    [storeKeys.KEY_CURRENT_WEATHER]: action.payload.currentWeather,
  }),
  [Actions.SET_NEWS_ARTICLES]: (state, action) => ({
    ...state,
    [storeKeys.KEY_NEWS_ARTICLES]: action.payload.news,
  }),
}, initialState);
