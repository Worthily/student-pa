import { call, put } from 'redux-saga/effects';
import { getMarks, createMark } from '../../../api/Mark';
import {
  getMarksReqActionCreator,
  getMarksRespActionCreator,
  createMarkReqActionCreator,
  createMarkRespActionCreator,
} from './actions';
import { ADMIN, TEACHER, STUDENT, USER } from '../../../type/constants';

export function* getMarksWorkSaga() {
  const { data } = yield call(getMarks);
  if (data) {
    // yield put({
    //   type: getMarksRespActionCreator.type,
    //   payload: {},
    // });
  } else {
    console.log('error');
  }
}

export function* createMarkWorkSaga({
  payload,
}: ReturnType<typeof createMarkReqActionCreator>) {
  const { data } = yield call(
    createMark,
    payload.value,
    payload.teacherId,
    payload.studentId,
    payload.groupId,
    payload.exerciseId,
    payload.disciplineId,
  );
  if (data) {
    yield put({
      type: createMarkRespActionCreator.type,
      payload: {},
    });
  } else {
    console.log('error');
  }
}
