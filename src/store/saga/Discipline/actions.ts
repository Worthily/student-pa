import { disciplineSlice } from './reducer';

export const {
  getDisciplineReq: getDisciplineReqActionCreator,
  getDisciplineResp: getDisciplineRespActionCreator,
  createDisciplineReq: createDisciplineReqActionCreator,
  createDisciplineResp: createDisciplineRespActionCreator,
} = disciplineSlice.actions;
