import { combineReducers } from 'redux';
import standardReducer from './standard';
import fetchReducer from './fetch';

export default combineReducers({
  standardReducer,
  fetchReducer
});
