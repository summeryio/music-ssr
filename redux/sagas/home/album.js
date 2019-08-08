import { take, put, fork, select } from 'redux-saga/effects';
import {
  FETCH_HOME_ALBUM,
} from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchHomeAlbumFail, fetchHomeAlbumSuccess } from '../../actions/home';

export function* album() {
  
  while(true) {
    yield take(FETCH_HOME_ALBUM);
    try {
      const res = yield fetch(`${URL_HEADER}/top/album?limit=9`);
      const data = yield res.json();
      if (data.code === 200) {
        yield put(fetchHomeAlbumSuccess(data.albums));
      }
    } catch(error) {
      yield put(fetchHomeAlbumFail(error));
    }
  }
}


export default [
  fork(album)
];




