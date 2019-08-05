import fetch from 'isomorphic-unfetch'
import { take, put, fork, select } from 'redux-saga/effects';
import { FETCH_LIST_PLSYLIST } from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchListPlaylistFail, fetchListPlaylistSuccess } from '../../actions/list';

export function* playlist() {
  while(true) {
    const query = yield select(state => state.list.playlist)
    const {playlists} = query
    
    try {
      
      const res = yield fetch(`${URL_HEADER}/top/playlist?limit=20&order=hot&cat=${encodeURI('全部')}&offset=${(query.page) * 20}`);
      const data = yield res.json();
      if (query.page === 0) {
        yield put(fetchListPlaylistSuccess(data.playlists, true));
      } else {
        yield put(fetchListPlaylistSuccess(playlists.concat(data.playlists), data.more));
      }
    } catch(error) {
      yield put(fetchListPlaylistFail(error));
    }

    yield take(FETCH_LIST_PLSYLIST);
  }
}


export default [
  fork(playlist)
];




