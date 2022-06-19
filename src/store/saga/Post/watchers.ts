import { takeLatest } from 'redux-saga/effects';
import { createPostReqActionCreator } from './actions';
import { createPostWorkSaga } from './workers';

export function* postWatchSaga() {
  console.log('postWatch');
  yield takeLatest(createPostReqActionCreator, createPostWorkSaga);
}
