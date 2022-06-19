import { postSlice } from './reducer';

export const {
  createPostReq: createPostReqActionCreator,
  createPostResp: createPostRespActionCreator,
} = postSlice.actions;
