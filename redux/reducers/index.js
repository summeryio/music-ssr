import { combineReducers } from 'redux';
import home from './home';
import list from './list';
import detail from './detail';
import common from './common';


export default combineReducers({
  home,
  list,
  detail,
  common
});