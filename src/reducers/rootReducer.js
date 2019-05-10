import { combineReducers } from 'redux';
import movies, { toggle } from './reducer';

const rootReducer = combineReducers({
  movies,
  toggle,
});

export default rootReducer;
