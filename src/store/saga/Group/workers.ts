import { call, put } from 'redux-saga/effects';
import { getGroup, createGroup } from '../../../api/Group';
import {
  getGroupReqActionCreator,
  getGroupRespActionCreator,
  createGroupReqActionCreator,
  createGroupRespActionCreator,
} from './actions';
import { ADMIN, TEACHER, STUDENT, USER } from '../../../type/constants';

export function* getGroupWorkSaga() {
  const { data } = yield call(getGroup);
  if (data) {
    // yield put({
    //   type: getGroupRespActionCreator.type,
    //   payload: {},
    // });
  } else {
    console.log('error');
  }
}

export function* createGroupReqWorkSaga({
  payload,
}: ReturnType<typeof createGroupReqActionCreator>) {
  const { data } = yield call(createGroup, payload.value);
  if (data) {
    yield put({
      type: createGroupRespActionCreator.type,
      payload: {},
    });
  } else {
    console.log('error');
  }
}
