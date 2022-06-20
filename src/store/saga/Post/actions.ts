import { postSlice } from './reducer';

export const {
  getPostsReq: getPostsReqActionCreator,
  getPostsResp: getPostsRespActionCreator,
  createPostReq: createPostReqActionCreator,
  createPostResp: createPostRespActionCreator,
} = postSlice.actions;
