import fetch from 'isomorphic-unfetch'
import { take, put, fork, select } from 'redux-saga/effects';
import { FETCH_DETAIL_PLSYLIST_COMMENT } from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchDetailPlaylistCommentFail, fetchDetailPlaylistCommentSuccess } from '../../actions/detail';

export function* comment() {
  while(true) {
    const query = yield select(state => state.detail.comment)

    try {
      const res = yield fetch(`${URL_HEADER}/comment/playlist?id=${query.id}`);
      const data = yield res.json();
      if (data.code === 200) {
        yield put(fetchDetailPlaylistCommentSuccess(data, true));
      }
    } catch(error) {
      yield put(fetchDetailPlaylistCommentFail(error));
    }

    yield take(FETCH_DETAIL_PLSYLIST_COMMENT);
  }
}


export default [
  fork(comment)
]