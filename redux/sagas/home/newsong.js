import { take, put, fork, select } from 'redux-saga/effects';
import {
  FETCH_HOME_NEWSONG,
} from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchNewsongFail, fetchNewsongSuccess } from '../../actions/home';

export function* newsong() {
  
  while(true) {
    yield take(FETCH_HOME_NEWSONG);
    try {
      const res = yield fetch(`${URL_HEADER}/playlist/detail?id=3779629`);
      const data = yield res.json();
      if (data.code === 200) {
        data.playlist.tracks = data.playlist.tracks.filter((item, i) => {
          return i < 20
        })
        
        yield put(fetchNewsongSuccess(data.playlist.tracks));
      }
    } catch(error) {
      yield put(fetchNewsongFail(error));
    }
  }
}


export default [
  fork(newsong)
];




