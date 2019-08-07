import fetch from 'isomorphic-unfetch'
import { take, put, fork, select } from 'redux-saga/effects';
import { FETCH_DETAIL_ALBUM } from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchDetailAlbumFail, fetchDetailAlbumSuccess } from '../../actions/detail';

export function* album() {
  while(true) {
    const query = yield select(state => state.detail.album)

    try {
      const res = yield fetch(`${URL_HEADER}/album?id=${query.id}`);
      const data = yield res.json();
      if (data.code === 200) {
        yield put(fetchDetailAlbumSuccess(data));
      }
      
    } catch(error) {
      yield put(fetchDetailAlbumFail(error));
    }

    yield take(FETCH_DETAIL_ALBUM);
  }
}


export default [
  fork(album)
];