import { commentSlice } from './reducer';

export const {
  createCommentReq: createCommentReqActionCreator,
  createCommentResp: createCommentRespActionCreator,
} = commentSlice.actions;
