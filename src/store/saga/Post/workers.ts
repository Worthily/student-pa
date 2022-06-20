import { call, put } from 'redux-saga/effects';
import { createPost, getPosts } from '../../../api/Post';
import {
  getPostsReqActionCreator,
  getPostsRespActionCreator,
  createPostReqActionCreator,
  createPostRespActionCreator,
} from './actions';
import { Post, User } from '../../../type';

export function* createPostWorkSaga({
  payload,
}: ReturnType<typeof createPostReqActionCreator>) {
  const newIntUser = parseInt(payload.idUser);
  if (newIntUser || newIntUser == 0) {
    const { data } = yield call(
      createPost,
      payload.title,
      payload.text,
      newIntUser,
      payload.image,
    );

    if (data) {
      yield put({
        type: createPostRespActionCreator.type,
        payload: {
          id: data.id,
          content: data.content,
          title: data.title,
          userId: data.userId,
          img: data.image,
          time: data.createdAt,
        },
      });
      console.log('дата пришла');
      console.log(data);
    }
  }
}

export function* getPostsWorkSaga() {
  const { data } = yield call(getPosts);
  console.log(data);
  if (data) {
    yield put({
      type: getPostsRespActionCreator.type,
      payload: data,
    });
    console.log('дата пришла');
    console.log(data);
  }
}
