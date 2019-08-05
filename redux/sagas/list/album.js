import fetch from 'isomorphic-unfetch'
import { take, put, fork, select } from 'redux-saga/effects';
import { FETCH_LIST_ALBUM } from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchListAlbumFail, fetchListAlbumSuccess } from '../../actions/list';

export function* album() {
  while(true) {
    const query = yield select(state => state.list.album)
    const {albums} = query
    
    try {
      
      const res = yield fetch(`${URL_HEADER}/top/album?limit=20&offset=${(query.page) * 20}`);
      const data = yield res.json();
      const more = data.total > albums.length
      
      if (query.page === 0) {
        yield put(fetchListAlbumSuccess(data.albums, true));
      } else {
        yield put(fetchListAlbumSuccess(albums.concat(data.albums), more));
      }
    } catch(error) {
      yield put(fetchListAlbumFail(error));
    }

    yield take(FETCH_LIST_ALBUM);
  }
}


export default [
  fork(album)
];




