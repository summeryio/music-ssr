import { combineReducers } from 'redux';
import home from './home';
import list from './list';
import detail from './detail';


export default combineReducers({
  home,
  list,
  detail
});