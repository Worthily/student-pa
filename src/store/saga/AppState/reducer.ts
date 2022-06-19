import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Post, User } from '../../../type';
import { STUDENT } from '../../../type/constants';

const appStateInitialState = {
  axiosHeaders: 'application/json',
};

export const appStateSlice = createSlice({
  name: 'post',
  initialState: appStateInitialState,
  reducers: {
    setImgHeader: state => {
      const newHeaders = 'multipart/form-data';
      const newState = { axiosHeaders: newHeaders };
      return newState;
    },
    setDataHeader: state => {
      const newHeaders = 'application/json';
      const newState = { axiosHeaders: newHeaders };
      return newState;
    },
  },
});
