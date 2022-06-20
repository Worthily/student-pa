import { takeLatest } from 'redux-saga/effects';
import {
  getUsersReqActionCreator,
  usersSetRoleReqActionCreator,
  usersSetGroupReqActionCreator,
} from './actions';
import {
  getUsersWorkSaga,
  usersSetRoleWorkSaga,
  usersSetGroupReqWorkSaga,
} from './workers';

export function* usersWatchSaga() {
  yield takeLatest(getUsersReqActionCreator, getUsersWorkSaga);
  yield takeLatest(usersSetRoleReqActionCreator, usersSetRoleWorkSaga);
  yield takeLatest(usersSetGroupReqActionCreator, usersSetGroupReqWorkSaga);
}
