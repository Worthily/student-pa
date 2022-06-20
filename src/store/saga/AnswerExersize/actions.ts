import { answerExersizeSlice } from './reducer';

export const {
  getanswerExersizeReq: getanswerExersizeReqActionCreator,
  getanswerExersizeResp: getanswerExersizeRespActionCreator,
  createAnswereReq: createAnswereReqActionCreator,
  createAnswerResp: createAnswerRespActionCreator,
  createAnswerMarkReq: createAnswerMarkReqActionCreator,
} = answerExersizeSlice.actions;
