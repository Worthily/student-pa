import { api } from '..';
import { GROUP_LINK } from '../../type/constants';

export async function getGroup() {
  return await api.get(GROUP_LINK).catch(error => {
    return error;
  });
}

export async function createGroup(value: string) {
  return await api
    .post(GROUP_LINK, {
      value: value,
    })
    .catch(error => {
      return error;
    });
}
