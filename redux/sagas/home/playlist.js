import { take, put, fork, select } from 'redux-saga/effects';
import {
  FETCH_HOME_PLAYLIST,
} from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchHomePlaylistFail, fetchHomePlaylistSuccess } from '../../actions/home';

export function* playlist() {
  
  while(true) {
    yield take(FETCH_HOME_PLAYLIST);
    try {
      const res = yield fetch(`${URL_HEADER}/personalized?limit=6`);
      const data = yield res.json();
      if (data.code === 200) {
        yield put(fetchHomePlaylistSuccess(data.result));
      }
    } catch(error) {
      yield put(fetchHomePlaylistFail(error));
    }
  }
}


export default [
  fork(playlist)
];




