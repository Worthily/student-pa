import { apiAlt, api } from '..';
import {
  ANSWER_EXERCISE_LINK,
  ANSWER_EXERCISE_MARK_LINK,
} from '../../type/constants';

export async function getAnswer() {
  return await api.get(ANSWER_EXERCISE_LINK).catch(error => {
    return error;
  });
}

export async function createAnswer(
  title: string,
  content: string,
  userId: number,
  file: any,
) {
  return await apiAlt
    .post(ANSWER_EXERCISE_LINK, {
      title: `${title}`,
      content: content,
      userID: userId,
      file: file,
    })
    .catch(error => {
      return error;
    });
}

export async function createAnswerMark(value: number, answerId: number) {
  return await api
    .post(ANSWER_EXERCISE_MARK_LINK, {
      value: value,
      answerId: answerId,
    })
    .catch(error => {
      return error;
    });
}
