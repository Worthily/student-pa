import { api } from '..';
import { DISCIPLINE_LINK } from '../../type/constants';

export async function getDiscipline() {
  return await api.get(DISCIPLINE_LINK).catch(error => {
    return error;
  });
}

export async function createDiscipline(value: string) {
  return await api
    .post(DISCIPLINE_LINK, {
      value: value,
    })
    .catch(error => {
      return error;
    });
}
