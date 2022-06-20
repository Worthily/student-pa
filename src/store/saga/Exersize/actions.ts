import { exersizeSlice } from './reducer';

export const {
  getExerciseReq: getExerciseReqActionCreator,
  getExerciseResp: getExerciseRespActionCreator,
  createExerciseReq: createExerciseReqActionCreator,
  createExerciseResp: createExerciseRespActionCreator,
} = exersizeSlice.actions;
