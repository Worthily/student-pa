import { call, put } from 'redux-saga/effects';
import { createPost } from '../../../api/Post';
import {
  setDataHeaderActionCreator,
  setImgHeaderActionCreator,
} from '../AppState/actions';
import {
  createPostReqActionCreator,
  createPostRespActionCreator,
} from './actions';

export function* createPostWorkSaga({
  payload,
}: ReturnType<typeof createPostReqActionCreator>) {
  // console.log(payload);

  yield put({
    type: setImgHeaderActionCreator.type,
  });

  const newIntUser = parseInt(payload.idUser);
  if (newIntUser || newIntUser == 0) {
    // console.log(payload);
    const { data } = yield call(
      createPost,
      payload.title,
      payload.text,
      newIntUser,
      payload.image,
    );
    // console.log(data);
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
  yield put({
    type: setDataHeaderActionCreator.type,
  });
}
// export function* userSignUpWorkSaga({
//   payload,
// }: ReturnType<typeof onSignUpReqActionCreator>) {
//   const { data } = yield call(
//     signUp,
//     payload.phone,
//     payload.password,
//     payload.firstName,
//     payload.lastName,
//   );
//
//   if (data) {
//     yield put({
//       type: onSignUpRespActionCreator.type,
//       payload: { authorized: data.success, token: data.token },
//     });
//     const { user } = yield call(getUser);
//     if (user) {
//       yield put({
//         type: getUserActionCreator.type,
//         payload: {
//           id: user.id,
//           phone: user.phone,
//           firstName: user.first_name,
//           lastName: user.last_name,
//         },
//       });
//     }
//   } else {
//     yield put({
//       type: setSignUpErrorActionCreator.type,
//       payload: {
//         error: 'Sign Up error',
//       },
//     });
//   }
// }
