import { combineReducers } from 'redux';
import code from './code';
import challenges from './challenges';

export default combineReducers({
  code,
  challenges
});
