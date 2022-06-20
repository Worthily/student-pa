import { takeLatest } from 'redux-saga/effects';
import {
  getGroupReqActionCreator,
  createGroupReqActionCreator,
} from './actions';
import { getGroupWorkSaga, createGroupReqWorkSaga } from './workers';

export function* groupWatchSaga() {
  yield takeLatest(getGroupReqActionCreator, getGroupWorkSaga);
  yield takeLatest(createGroupReqActionCreator, createGroupReqWorkSaga);
}
