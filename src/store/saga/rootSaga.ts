import { all } from 'redux-saga/effects';
import { answerWatchSaga } from './AnswerExersize/watchers';
import { CommentWatchSaga } from './Comment/watchers';
import { disciplineWatchSaga } from './Discipline/watchers';
import { exerciseWatchSaga } from './Exersize/watchers';
import { groupWatchSaga } from './Group/watchers';
import { marksWatchSaga } from './Mark/watchers';
import { postWatchSaga } from './Post/watchers';
import { authWatchSaga } from './User/watchers';

export default function* rootSaga() {
  console.log('rootsagaa');
  yield all([
    authWatchSaga(),
    postWatchSaga(),
    answerWatchSaga(),
    CommentWatchSaga(),
    disciplineWatchSaga(),
    exerciseWatchSaga(),
    groupWatchSaga(),
    marksWatchSaga(),
  ]);
}
