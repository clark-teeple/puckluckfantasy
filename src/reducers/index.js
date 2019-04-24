import { combineReducers } from 'redux';
import standardReducer from './standard';
import skaterReducer from './skater';

export default combineReducers({
  standardReducer,
  skaterReducer
});
