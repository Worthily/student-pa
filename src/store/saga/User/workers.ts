import { call, put } from 'redux-saga/effects';
import { signIn, signUp } from '../../../api/User';
import {
  authReqActionCreator,
  authRespActionCreator,
  registrReqActionCreator,
  registrRespActionCreator,
} from './actions';
import { ADMIN, TEACHER, STUDENT, USER } from '../../../type/constants';
import { getDisciplineWorkSaga } from '../Discipline/workers';
import { getExerciseWorkSaga } from '../Exersize/workers';
import { getGroupWorkSaga } from '../Group/workers';
import { getMarksWorkSaga } from '../Mark/workers';
import { getPostsWorkSaga } from '../Post/workers';
import { getUsersWorkSaga } from '../Users/workers';
import { createCommentWorkSaga, getCommentsWorkSaga } from '../Comment/workers';
import { getAnswerWorkSaga } from '../AnswerExersize/workers';

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
      type: registrRespActionCreator.type,
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
    // yield getUsersWorkSaga();
    yield getPostsWorkSaga();
    // yield getMarksWorkSaga();
    // yield getGroupWorkSaga();
    // yield getExerciseWorkSaga();
    yield getCommentsWorkSaga();
    // yield getAnswerWorkSaga();
  } else {
    console.log('error');
  }
}

export function* userSignUpWorkSaga({
  payload,
}: ReturnType<typeof registrReqActionCreator>) {
  const { data } = yield call(
    signUp,
    payload.name,
    payload.email,
    payload.password,
  );
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
