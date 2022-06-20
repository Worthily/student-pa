import { usersSlice } from './reducer';

export const {
  getUsersReq: getUsersReqActionCreator,
  getUsersResp: getUsersRespActionCreator,
  usersSetRoleReq: usersSetRoleReqActionCreator,
  usersSetRoleResp: usersSetRoleRespActionCreator,
  usersSetGroupReq: usersSetGroupReqActionCreator,
  usersSetGroupResp: usersSetGroupRespActionCreator,
} = usersSlice.actions;
