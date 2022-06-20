import { groupSlice } from './reducer';

export const {
  getGroupReq: getGroupReqActionCreator,
  getGroupResp: getGroupRespActionCreator,
  createGroupReq: createGroupReqActionCreator,
  createGroupResp: createGroupRespActionCreator,
} = groupSlice.actions;
