import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { retry } from 'redux-saga/effects';
import { Exersize, User } from '../../../type';
import { STUDENT } from '../../../type/constants';

export const exersizeInitialState: Exersize[] = [
  {
    id: '0',
    title: 'Задание 1',
    content:
      'Задание 1 описание задания Возможность получать оценки конкретного ученика, конкретной группы и конкретного учителя конкретного предмета если осилишь то можно и оценки конкретного ученика по конкретному предмету',
    file: 'zad1.docx',
    userId: '7',
    groupId: '0',
    disciplineId: '0',
  },
  {
    id: '1',
    title: 'Задание 2',
    content:
      'Задание 2 описание задания Возможность получать оценки конкретного ученика, конкретной группы и конкретного учителя  конкретного предмета если осилишь то можно и оценки конкретного ученика по конкретному предмету',
    file: 'zad2.docx',
    userId: '7',
    groupId: '1',
    disciplineId: '0',
  },
  {
    id: '2',
    title: 'Задание 3',
    content:
      'Задание 3 описание задания Возможность получать оценки конкретного ученика, конкретной группы и конкретного учителя  конкретного предмета если осилишь то можно и оценки конкретного ученика по конкретному предмету',
    file: 'zad3.docx',
    userId: '7',
    groupId: '2',
    disciplineId: '0',
  },
  {
    id: '3',
    title: 'Задание 4',
    content:
      'Задание 4 описание задания Возможность получать оценки конкретного ученика, конкретной группы и конкретного учителя  конкретного предмета если осилишь то можно и оценки конкретного ученика по конкретному предмету',
    file: 'zad4.docx',
    userId: '2',
    groupId: '0',
    disciplineId: '1',
  },
  {
    id: '4',
    title: 'Задание 5',
    content:
      'Задание 5 описание задания Возможность получать оценки конкретного ученика, конкретной группы и конкретного учителя  конкретного предмета если осилишь то можно и оценки конкретного ученика по конкретному предмету',
    file: 'zad5.docx',
    userId: '2',
    groupId: '1',
    disciplineId: '1',
  },
  {
    id: '5',
    title: 'Задание 6',
    content:
      'Задание 6 описание задания Возможность получать оценки конкретного ученика, конкретной группы и конкретного учителя конкретного предмета если осилишь то можно и оценки конкретного ученика по конкретному предмету',
    file: 'zad6.docx',
    userId: '2',
    groupId: '2',
    disciplineId: '1',
  },
];

export const exersizeSlice = createSlice({
  name: 'exersize',
  initialState: exersizeInitialState,
  reducers: {
    getExerciseReq: (
      state,
      { payload }: PayloadAction<{ value: number; answerId: number }>,
    ) => {},
    getExerciseResp: (state, { payload }: PayloadAction<Exersize[]>) => {
      return [...payload];
    },
    createExerciseReq: (
      state,
      {
        payload,
      }: PayloadAction<{
        title: string;
        content: string;
        userId: number;
        groupId: number;
        disciplineId: number;
        file: any;
      }>,
    ) => {},
    createExerciseResp: (state, { payload }: PayloadAction<Exersize>) => {
      return [...state, payload];
    },
  },
});
