import { takeLatest } from 'redux-saga/effects';
import {
  getExerciseReqActionCreator,
  createExerciseReqActionCreator,
} from './actions';
import { createExerciseWorkSaga, getExerciseWorkSaga } from './workers';

export function* exerciseWatchSaga() {
  yield takeLatest(getExerciseReqActionCreator, getExerciseWorkSaga);
  yield takeLatest(createExerciseReqActionCreator, createExerciseWorkSaga);
}
