import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Group, User } from '../../../type';
import { STUDENT } from '../../../type/constants';

export const groupInitialState: Group[] = [
  {
    id: '0',
    value: 'ПР111',
  },
  {
    id: '1',
    value: 'ПР212',
  },
  {
    id: '2',
    value: 'ПР313',
  },
];

export const groupSlice = createSlice({
  name: 'group',
  initialState: groupInitialState,
  reducers: {},
});
