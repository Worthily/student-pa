import { api } from '../index';
import {
  USERS_GROUP_LINK,
  USERS_LINK,
  USERS_ROLE_LINK,
} from '../../type/constants';

export async function getUsers() {
  return await api.get(USERS_LINK).catch(error => {
    return error;
  });
}

export async function usersSetRole(value: string, userId: number) {
  return await api
    .post(USERS_ROLE_LINK, {
      value: value,
      userId: userId,
    })
    .catch(error => {
      return error;
    });
}

export async function usersSetGroup(value: string, userId: number) {
  return await api
    .post(USERS_GROUP_LINK, {
      value: value,
      userId: userId,
    })
    .catch(error => {
      return error;
    });
}
