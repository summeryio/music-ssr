import fetch from 'isomorphic-unfetch'
import { take, put, fork, select } from 'redux-saga/effects';
import { FETCH_COMMON_COMMENT } from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchCommonCommentFail, fetchCommonCommentSuccess } from '../../actions/common';

export function* comment() {
  while(true) {
    const query = yield select(state => state.common.comment)
    console.log(query);

    try {
      const res = yield fetch(`${URL_HEADER}/comment/playlist?id=2890484841`);
      const data = yield res.json();
      console.log(data);
      if (data.code === 200) {
        
        yield put(fetchCommonCommentSuccess(data));
      }
    } catch(error) {
      yield put(fetchCommonCommentFail(error));
    }

    yield take(FETCH_COMMON_COMMENT);
  }
}


export default [
  fork(comment)
]