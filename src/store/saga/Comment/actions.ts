import { commentSlice } from './reducer';

export const {
  createCommentReq: createCommentReqActionCreator,
  createCommentResp: createCommentRespActionCreator,
  getCommentsReq: getCommentsReqActionCreator,
  getCommentsResp: getCommentsRespActionCreator,
} = commentSlice.actions;
