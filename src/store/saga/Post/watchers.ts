import { takeLatest } from 'redux-saga/effects';
import {
  createPostReqActionCreator,
  getPostsReqActionCreator,
} from './actions';
import { createPostWorkSaga, getPostsWorkSaga } from './workers';

export function* postWatchSaga() {
  console.log('postWatch');
  yield takeLatest(createPostReqActionCreator, createPostWorkSaga);
  yield takeLatest(getPostsReqActionCreator, getPostsWorkSaga);
}
