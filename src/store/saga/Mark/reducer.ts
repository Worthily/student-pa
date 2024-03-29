import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Mark, User } from '../../../type';
import { STUDENT } from '../../../type/constants';

export const markInitialState: Mark[] = [
  {
    id: '0',
    value: '4',
    teacherId: '7',
    studentId: '3',
    groupId: '0',
    exersizeId: '0',
    disciplineId: '0',
  },
  {
    id: '1',
    value: '5',
    teacherId: '7',
    studentId: '4',
    groupId: '0',
    exersizeId: '0',
    disciplineId: '0',
  },
  {
    id: '2',
    value: '3',
    teacherId: '7',
    studentId: '5',
    groupId: '1',
    exersizeId: '1',
    disciplineId: '0',
  },
  {
    id: '3',
    value: '4',
    teacherId: '7',
    studentId: '10',
    groupId: '1',
    exersizeId: '1',
    disciplineId: '0',
  },
  {
    id: '4',
    value: '3',
    teacherId: '7',
    studentId: '11',
    groupId: '2',
    exersizeId: '2',
    disciplineId: '0',
  },
  {
    id: '5',
    value: '5',
    teacherId: '7',
    studentId: '8',
    groupId: '2',
    exersizeId: '2',
    disciplineId: '0',
  },
  {
    id: '6',
    value: '3',
    teacherId: '2',
    studentId: '3',
    groupId: '0',
    exersizeId: '3',
    disciplineId: '1',
  },
  {
    id: '7',
    value: '4',
    teacherId: '2',
    studentId: '4',
    groupId: '0',
    exersizeId: '3',
    disciplineId: '1',
  },
  {
    id: '8',
    value: '5',
    teacherId: '2',
    studentId: '5',
    groupId: '1',
    exersizeId: '4',
    disciplineId: '1',
  },
  {
    id: '9',
    value: '5',
    teacherId: '2',
    studentId: '10',
    groupId: '1',
    exersizeId: '4',
    disciplineId: '1',
  },
  {
    id: '10',
    value: '4',
    teacherId: '2',
    studentId: '11',
    groupId: '2',
    exersizeId: '5',
    disciplineId: '1',
  },
  {
    id: '11',
    value: '4',
    teacherId: '2',
    studentId: '8',
    groupId: '2',
    exersizeId: '5',
    disciplineId: '1',
  },
];

export const markSlice = createSlice({
  name: 'mark',
  initialState: markInitialState,
  reducers: {
    getMarksReq: state => {},
    getMarksResp: (state, { payload }: PayloadAction<Mark[]>) => {
      return [...payload];
    },
    createMarkReq: (
      state,
      {
        payload,
      }: PayloadAction<{
        value: number;
        teacherId: number;
        studentId: number;
        groupId: number;
        exerciseId: number;
        disciplineId: number;
      }>,
    ) => {},
    createMarkResp: (state, { payload }: PayloadAction<Mark>) => {
      return [...state, payload];
    },
  },
});
