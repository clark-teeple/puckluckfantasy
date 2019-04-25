import { combineReducers } from 'redux';
import standardReducer from './standard';
import skaterReducer from './skater';
import optimizerReducer from './optimizer';

export default combineReducers({
  standardReducer,
  skaterReducer,
  optimizerReducer
});
