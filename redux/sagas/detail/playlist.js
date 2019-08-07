import fetch from 'isomorphic-unfetch'
import { take, put, fork, select } from 'redux-saga/effects';
import { FETCH_DETAIL_PLSYLIST } from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchDetailPlaylistFail, fetchDetailPlaylistSuccess } from '../../actions/detail';

export function* playlist() {
  while(true) {
    const query = yield select(state => state.detail.playlist)

    try {
      const res = yield fetch(`${URL_HEADER}/playlist/detail?id=${query.id}`);
      const data = yield res.json();
      yield put(fetchDetailPlaylistSuccess(data.playlist));
    } catch(error) {
      yield put(fetchDetailPlaylistFail(error));
    }

    yield take(FETCH_DETAIL_PLSYLIST);
  }
}


export default [
  fork(playlist)
]