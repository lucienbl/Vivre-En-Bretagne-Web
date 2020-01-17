import { handleActions } from "redux-actions";
import * as Actions from './actionCreators';
import * as storeKeys from './storeKeys';

const initialState = {
  [storeKeys.KEY_CURRENT_WEATHER]: {},
};

export default handleActions({
  [Actions.SET_CURRENT_WEATHER]: (state, action) => ({
    ...state,
    [storeKeys.KEY_CURRENT_WEATHER]: action.payload.currentWeather,
  }),
}, initialState);
