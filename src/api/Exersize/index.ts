import { apiAlt, api } from '..';
import { EXERCISE_LINK } from '../../type/constants';

export async function getExercise() {
  return await api.get(EXERCISE_LINK).catch(error => {
    return error;
  });
}

export async function createExercise(
  title: string,
  content: string,
  userId: number,
  groupId: number,
  disciplineId: number,
  file: any,
) {
  return await apiAlt
    .post(EXERCISE_LINK, {
      title: title,
      content: content,
      userID: userId,
      groupId: groupId,
      disciplineId: disciplineId,
      file: file,
    })
    .catch(error => {
      return error;
    });
}
