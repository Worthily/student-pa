import { takeLatest } from 'redux-saga/effects';
import {
  createCommentReqActionCreator,
  getCommentsReqActionCreator,
} from './actions';
import { createCommentWorkSaga, getCommentsWorkSaga } from './workers';

export function* CommentWatchSaga() {
  yield takeLatest(createCommentReqActionCreator, createCommentWorkSaga);
  yield takeLatest(getCommentsReqActionCreator, getCommentsWorkSaga);
}
