import { call, put } from 'redux-saga/effects';
import {
  getAnswer,
  createAnswer,
  createAnswerMark,
} from '../../../api/AnswerExersize';
import {
  getanswerExersizeReqActionCreator,
  getanswerExersizeRespActionCreator,
  createAnswereReqActionCreator,
  createAnswerRespActionCreator,
  createAnswerMarkReqActionCreator,
} from './actions';
import { ADMIN, TEACHER, STUDENT, USER } from '../../../type/constants';
import { title } from 'process';

export function* getAnswerWorkSaga() {
  const { data } = yield call(getAnswer);
  if (data) {
    // yield put({
    //   type: getanswerExersizeRespActionCreator.type,
    //   payload: {},
    // });
  } else {
    console.log('error');
  }
}

export function* createAnswereWorkSaga({
  payload,
}: ReturnType<typeof createAnswereReqActionCreator>) {
  const { data } = yield call(
    createAnswer,
    payload.title,
    payload.content,
    payload.userId,
    payload.file,
  );
  if (data) {
    yield put({
      type: createAnswerRespActionCreator.type,
      payload: {},
    });
  } else {
    console.log('error');
  }
}

export function* createAnswerMarkWorkSaga({
  payload,
}: ReturnType<typeof createAnswerMarkReqActionCreator>) {
  const { data } = yield call(
    createAnswerMark,
    payload.value,
    payload.answerId,
  );
  if (data) {
  } else {
    console.log('error');
  }
}
