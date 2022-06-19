import { takeLatest } from 'redux-saga/effects';
import { authReqActionCreator } from './actions';
import { userSignInWorkSaga } from './workers';

export function* authWatchSaga() {
  yield takeLatest(authReqActionCreator, userSignInWorkSaga);
}
