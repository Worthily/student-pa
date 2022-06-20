import { api } from '..';
import { WORKLOAD_LINK } from '../../type/constants';

export async function getWorkload() {
  return await api.get(WORKLOAD_LINK).catch(error => {
    return error;
  });
}

export async function createWorkload(
  disciplineId: number,
  teacherId: number,
  groupId: number,
) {
  return await api
    .post(WORKLOAD_LINK, {
      disciplineId: disciplineId,
      teacherId: teacherId,
      groupId: groupId,
    })
    .catch(error => {
      return error;
    });
}
