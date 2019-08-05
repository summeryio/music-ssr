import { combineReducers } from 'redux';
import playlist from './playlist';
import album from './album';

export default combineReducers({
    playlist,
    album
})
  