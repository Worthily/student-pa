import { all } from 'redux-saga/effects';
import { postWatchSaga } from './Post/watchers';
import { authWatchSaga } from './User/watchers';
export default function* rootSaga() {
  console.log('rootsagaa');
  yield all([authWatchSaga(), postWatchSaga()]);
}
