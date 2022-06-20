import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { AnswerExersize, User } from '../../../type';
import { STUDENT } from '../../../type/constants';

export const answerExersizeInitialState: AnswerExersize[] = [
  {
    id: '0',
    content: 'Студент 3 сделал задание 1',
    file: 'ФайлОтветСтудент3задание1.docx',
    studentId: '3',
    exerciseId: '0',
    markId: '0',
  },
  {
    id: '6',
    content: 'Студент 3 сделал задание 4',
    file: 'ФайлОтветСтудент3задание4.docx',
    studentId: '3',
    exerciseId: '3',
    markId: '6',
  },
  {
    id: '1',
    content: 'Студент 4 сделал задание 1',
    file: 'ФайлОтветСтудент4задание1.docx',
    studentId: '4',
    exerciseId: '0',
    markId: '1',
  },
  {
    id: '2',
    content: 'Студент 5 сделал задание 2',
    file: 'ФайлОтветСтудент5задание2.docx',
    studentId: '5',
    exerciseId: '1',
    markId: '2',
  },
  {
    id: '3',
    content: 'Студент 6 сделал задание 2',
    file: 'ФайлОтветСтудент6задание2.docx',
    studentId: '10',
    exerciseId: '1',
    markId: '3',
  },
  {
    id: '4',
    content: 'Студент 7 сделал задание 3',
    file: 'ФайлОтветСтудент7задание3.docx',
    studentId: '11',
    exerciseId: '2',
    markId: '4',
  },
  {
    id: '5',
    content: 'Студент 8 сделал задание 3',
    file: 'ФайлОтветСтудент8задание3.docx',
    studentId: '8',
    exerciseId: '2',
    markId: '5',
  },
  {
    id: '7',
    content: 'Студент 4 сделал задание 4',
    file: 'ФайлОтветСтудент4задание4.docx',
    studentId: '4',
    exerciseId: '3',
    markId: '7',
  },
  {
    id: '8',
    content: 'Студент 5 сделал задание 5',
    file: 'ФайлОтветСтудент5задание5.docx',
    studentId: '5',
    exerciseId: '4',
    markId: '8',
  },
  {
    id: '9',
    content: 'Студент 6 сделал задание 5',
    file: 'ФайлОтветСтудент6задание5.docx',
    studentId: '10',
    exerciseId: '4',
    markId: '9',
  },
  {
    id: '10',
    content: 'Студент 7 сделал задание 6',
    file: 'ФайлОтветСтудент7задание6.docx',
    studentId: '11',
    exerciseId: '5',
    markId: '10',
  },
  {
    id: '11',
    content: 'Студент 8 сделал задание 6',
    file: 'ФайлОтветСтудент8задание6.docx',
    studentId: '8',
    exerciseId: '5',
    markId: '11',
  },
];

export const answerExersizeSlice = createSlice({
  name: 'answerExersize',
  initialState: answerExersizeInitialState,
  reducers: {
    getanswerExersizeReq: state => {},
    getanswerExersizeResp: (
      state,
      { payload }: PayloadAction<AnswerExersize[]>,
    ) => {
      return [...payload];
    },
    createAnswereReq: (
      state,
      {
        payload,
      }: PayloadAction<{
        title: string;
        content: string;
        userId: number;
        file: any;
      }>,
    ) => {},
    createAnswerResp: (state, { payload }: PayloadAction<AnswerExersize>) => {
      return [...state, payload];
    },
    createAnswerMarkReq: (
      state,
      { payload }: PayloadAction<{ value: number; answerId: number }>,
    ) => {
      const newState = state.map(item => {
        if (item.id == `${payload.answerId}`) {
          return { ...item, markId: `${payload.value}` };
        }
        return item;
      });
      return newState;
    },
  },
});
