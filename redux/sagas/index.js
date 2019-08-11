import { all } from 'redux-saga/effects';
import homeSagas from './home';
import listSagas from './list';
import detailSagas from './detail';
import commonSagas from './common';


export default function* rootSagas() {
  yield all([
    ...homeSagas,
    ...listSagas,
    ...detailSagas,
    ...commonSagas
  ]);
}
