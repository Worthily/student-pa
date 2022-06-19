import { userSlice } from './reducer';

export const {
  authReq: authReqActionCreator,
  authResp: authRespActionCreator,
  getStudent: getStudentActionCreator,
  getTeacher: getTeacherActionCreator,
  // getAdmin: getAdminActionCreator,
} = userSlice.actions;
