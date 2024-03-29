import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Discipline, User } from '../../../type';
import { STUDENT } from '../../../type/constants';

export const disciplineInitialState: Discipline[] = [
  {
    id: '0',
    value: 'Математика',
  },
  {
    id: '1',
    value: 'Геометрия',
  },
  {
    id: '2',
    value: 'Тригонометрия',
  },
];

export const disciplineSlice = createSlice({
  name: 'discipline',
  initialState: disciplineInitialState,
  reducers: {
    getDisciplineReq: state => {},
    getDisciplineResp: (state, { payload }: PayloadAction<Discipline[]>) => {
      return [...payload];
    },
    createDisciplineReq: (
      state,
      { payload }: PayloadAction<{ value: string }>,
    ) => {},
    createDisciplineResp: (state, { payload }: PayloadAction<Discipline>) => {
      return [...state, payload];
    },
  },
});
