import { apiAlt, api } from '..';
import { MARK_LINK } from '../../type/constants';

export async function getMarks() {
  return await api.get(MARK_LINK).catch(error => {
    return error;
  });
}

export async function createMark(
  value: number,
  teacherId: number,
  studentId: number,
  groupId: number,
  exerciseId: number,
  disciplineId: number,
) {
  return await api
    .post(MARK_LINK, {
      value: value,
      teacherId: teacherId,
      studentId: studentId,
      groupId: groupId,
      exerciseId: exerciseId,
      disciplineId: disciplineId,
    })
    .catch(error => {
      return error;
    });
}
