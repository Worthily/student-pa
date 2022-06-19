import { call, put } from 'redux-saga/effects';
import { signIn } from '../../../api/User';
import { authReqActionCreator, authRespActionCreator } from './actions';
import { ADMIN, TEACHER, STUDENT, USER } from '../../../type/constants';

export function* userSignInWorkSaga({
  payload,
}: ReturnType<typeof authReqActionCreator>) {
  const { data } = yield call(signIn, payload.email, payload.password);
  if (data) {
    console.log(data);
    let group = '';

    if (data[1].group) {
      group = `${data[1].group}`;
    } else {
      group = '';
    }

    let baanReasonVal = '';

    if (data[1].baanReason) {
      baanReasonVal = data[1].baanReason;
    } else {
      baanReasonVal = '';
    }

    yield put({
      type: authRespActionCreator.type,
      payload: {
        id: `${data[1].id}`,
        email: data[1].email,
        name: data[1].name,
        token: data[1].token,
        pass: data[1].password,
        groupId: group,
        banned: data[1].banned,
        bannedReason: baanReasonVal,
        roles: data[1].roles,
      },
    });
  } else {
    console.log('error');
  }
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
