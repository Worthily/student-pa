import { takeLatest } from 'redux-saga/effects';
import {
  getanswerExersizeReqActionCreator,
  createAnswereReqActionCreator,
  createAnswerMarkReqActionCreator,
} from './actions';
import {
  getAnswerWorkSaga,
  createAnswereWorkSaga,
  createAnswerMarkWorkSaga,
} from './workers';

export function* answerWatchSaga() {
  yield takeLatest(getanswerExersizeReqActionCreator, getAnswerWorkSaga);
  yield takeLatest(createAnswereReqActionCreator, createAnswereWorkSaga);
  yield takeLatest(createAnswerMarkReqActionCreator, createAnswerMarkWorkSaga);
}
