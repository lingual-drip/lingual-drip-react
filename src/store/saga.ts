import { all, fork } from 'redux-saga/effects';

import getAuthenticationSaga from './auth/saga';
import getWordsListSaga from './words/saga';


export default function* rootSaga() {
  yield all([
    fork(getAuthenticationSaga),
    fork(getWordsListSaga)
  ]);
}