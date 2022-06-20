import { markSlice } from './reducer';

export const {
  getMarksReq: getMarksReqActionCreator,
  getMarksResp: getMarksRespActionCreator,
  createMarkReq: createMarkReqActionCreator,
  createMarkResp: createMarkRespActionCreator,
} = markSlice.actions;
