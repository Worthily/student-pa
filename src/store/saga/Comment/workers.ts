import { call, put } from 'redux-saga/effects';
import { getComments, createComment } from '../../../api/Comment';
import {
  createCommentReqActionCreator,
  createCommentRespActionCreator,
  getCommentsReqActionCreator,
  getCommentsRespActionCreator,
} from './actions';

export function* getCommentsWorkSaga() {
  const { data } = yield call(getComments);
  if (data) {
    yield put({
      type: getCommentsRespActionCreator.type,
      payload: {},
    });
  } else {
    console.log('error');
  }
}

export function* createCommentWorkSaga({
  payload,
}: ReturnType<typeof createCommentReqActionCreator>) {
  const userId = parseInt(payload.idUser);
  const postId = parseInt(payload.idPost);
  const { data } = yield call(createComment, payload.text, userId, postId);
  if (data) {
    // yield put({
    //   type: createCommentRespActionCreator.type,
    //   payload: {},
    // });
  } else {
    console.log('error');
  }
}
