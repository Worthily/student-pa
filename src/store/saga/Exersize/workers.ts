import { call, put } from 'redux-saga/effects';
import { getExercise, createExercise } from '../../../api/Exersize';
import {
  getExerciseReqActionCreator,
  getExerciseRespActionCreator,
  createExerciseReqActionCreator,
  createExerciseRespActionCreator,
} from './actions';
import { ADMIN, TEACHER, STUDENT, USER } from '../../../type/constants';

export function* getExerciseWorkSaga() {
  const { data } = yield call(getExercise);
  if (data) {
    // yield put({
    //   type: getExerciseRespActionCreator.type,
    //   payload: {},
    // });
  } else {
    console.log('error');
  }
}

export function* createExerciseWorkSaga({
  payload,
}: ReturnType<typeof createExerciseReqActionCreator>) {
  const { data } = yield call(
    createExercise,
    payload.title,
    payload.content,
    payload.userId,
    payload.groupId,
    payload.disciplineId,
    payload.file,
  );
  if (data) {
    yield put({
      type: createExerciseRespActionCreator.type,
      payload: {},
    });
  } else {
    console.log('error');
  }
}
