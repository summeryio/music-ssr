import { combineReducers } from 'redux';
import playlist from './playlist';
import album from './album';
import comment from './comment';

export default combineReducers({
    playlist,
    album,
    comment
})
  