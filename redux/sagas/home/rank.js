import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_HOME_RANK,
} from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchRankFail, fetchRankSuccess } from '../../actions/home';

export function* rank() {
  
  while(true) {
    yield take(FETCH_HOME_RANK);
    try {
      const res = yield fetch(`${URL_HEADER}/toplist`);
      const data = yield res.json();
      if (data.code === 200) {
        yield put(fetchRankSuccess(data.list));
      }
    } catch(error) {
      yield put(fetchRankFail(error));
    }
  }
}


export default [
  fork(rank)
];




