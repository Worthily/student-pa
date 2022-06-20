import { call, put } from 'redux-saga/effects';
import { getDiscipline, createDiscipline } from '../../../api/Discipline';
import {
  getDisciplineReqActionCreator,
  getDisciplineRespActionCreator,
  createDisciplineReqActionCreator,
  createDisciplineRespActionCreator,
} from './actions';
import { ADMIN, TEACHER, STUDENT, USER } from '../../../type/constants';

export function* getDisciplineWorkSaga() {
  const { data } = yield call(getDiscipline);
  if (data) {
    yield put({
      type: getDisciplineRespActionCreator.type,
      payload: {},
    });
  } else {
    console.log('error');
  }
}

export function* createDisciplinepWorkSaga({
  payload,
}: ReturnType<typeof createDisciplineReqActionCreator>) {
  const { data } = yield call(createDiscipline, payload.value);
  if (data) {
    yield put({
      type: createDisciplineRespActionCreator.type,
      payload: {},
    });
  } else {
    console.log('error');
  }
}
