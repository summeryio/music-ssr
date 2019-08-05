import { combineReducers } from 'redux';
import banner from './banner';
import playlist from './playlist';
import album from './album';
import newsong from './newsong';
import rank from './rank';

export default combineReducers({
    banner,
    playlist,
    album,
    newsong,
    rank
})
  