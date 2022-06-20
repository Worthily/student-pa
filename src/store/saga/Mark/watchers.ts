import { takeLatest } from 'redux-saga/effects';
import {
  getMarksReqActionCreator,
  createMarkReqActionCreator,
} from './actions';
import { getMarksWorkSaga, createMarkWorkSaga } from './workers';

export function* marksWatchSaga() {
  yield takeLatest(getMarksReqActionCreator, getMarksWorkSaga);
  yield takeLatest(createMarkReqActionCreator, createMarkWorkSaga);
}
