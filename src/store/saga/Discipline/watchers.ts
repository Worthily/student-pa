import { takeLatest } from 'redux-saga/effects';
import {
  getDisciplineReqActionCreator,
  createDisciplineReqActionCreator,
} from './actions';
import { getDisciplineWorkSaga, createDisciplinepWorkSaga } from './workers';

export function* disciplineWatchSaga() {
  yield takeLatest(getDisciplineReqActionCreator, getDisciplineWorkSaga);
  yield takeLatest(createDisciplineReqActionCreator, createDisciplinepWorkSaga);
}
