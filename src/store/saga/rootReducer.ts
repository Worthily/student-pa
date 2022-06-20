import { combineReducers } from '@reduxjs/toolkit';
import { answerExersizeSlice } from './AnswerExersize/reducer';
import { commentSlice } from './Comment/reducer';
import { disciplineSlice } from './Discipline/reducer';
import { exersizeSlice } from './Exersize/reducer';
import { groupSlice } from './Group/reducer';
import { markSlice } from './Mark/reducer';
import { postSlice } from './Post/reducer';
import { userSlice } from './User/reducer';
import { usersSlice } from './Users/reducer';
import { workloadSlice } from './Workload/reducer';

export const reducer = combineReducers({
  user: userSlice.reducer,
  users: usersSlice.reducer,
  exersize: exersizeSlice.reducer,
  answerExersize: answerExersizeSlice.reducer,
  mark: markSlice.reducer,
  post: postSlice.reducer,
  comment: commentSlice.reducer,
  group: groupSlice.reducer,
  discipline: disciplineSlice.reducer,
  workload: workloadSlice.reducer,
});
