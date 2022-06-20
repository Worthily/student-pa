import { call, put } from 'redux-saga/effects';
import { getUsers, usersSetRole, usersSetGroup } from '../../../api/Users';
import {
  getUsersReqActionCreator,
  getUsersRespActionCreator,
  usersSetRoleReqActionCreator,
  usersSetRoleRespActionCreator,
  usersSetGroupReqActionCreator,
  usersSetGroupRespActionCreator,
} from './actions';
import { ADMIN, TEACHER, STUDENT, USER } from '../../../type/constants';

export function* getUsersWorkSaga() {
  const { data } = yield call(getUsers);
  if (data) {
    // yield put({
    //   type: getUsersRespActionCreator.type,
    //   payload: {},
    // });
  } else {
    console.log('error');
  }
}

export function* usersSetRoleWorkSaga({
  payload,
}: ReturnType<typeof usersSetRoleReqActionCreator>) {
  const { data } = yield call(usersSetRole, payload.value, payload.userId);
  if (data) {
    yield put({
      type: usersSetRoleRespActionCreator.type,
      payload: {},
    });
  } else {
    console.log('error');
  }
}

export function* usersSetGroupReqWorkSaga({
  payload,
}: ReturnType<typeof usersSetGroupReqActionCreator>) {
  const { data } = yield call(usersSetGroup, payload.value, payload.userId);
  if (data) {
    yield put({
      type: usersSetGroupRespActionCreator.type,
      payload: {},
    });
  } else {
    console.log('error');
  }
}
