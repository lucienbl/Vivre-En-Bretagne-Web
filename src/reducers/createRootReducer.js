import { combineReducers } from 'redux';
import { KEY_REDUCER as KEY_HOME, reducer as homeReducer } from '../home';

const createRootReducer = (asyncReducers: any) => combineReducers({
  ...asyncReducers,
  [KEY_HOME]: homeReducer,
});

export default createRootReducer;
