import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { User } from '../../../type';
import { STUDENT, TEACHER, ADMIN, USER } from '../../../type/constants';

export const userInitialState: User = {
  id: '-1',
  email: '',
  name: '',
  token: '',
  pass: '',
  groupId: '',
  banned: false,
  bannedReason: '',
  role: '',
  errorExists: false,
  errorText: '',
  logged: false,
};

export const teachertInitialState: User = {
  id: '1',
  email: '',
  name: 'Кабанов Алексей Улебович',
  token: '',
  pass: '',
  groupId: '',
  banned: false,
  bannedReason: '',
  role: TEACHER,
  errorExists: false,
  errorText: '',
  logged: true,
};

export const studentInitialState: User = {
  id: '3',
  email: 'student@mail.ru',
  name: 'Волков Лев Геласьевич',
  token: '',
  pass: 'student3540',
  groupId: '0',
  banned: false,
  bannedReason: '',
  role: STUDENT,
  errorExists: false,
  errorText: '',
  logged: true,
};

export const adminInitialState: User = {
  id: '0',
  email: 'admin@mail.ru',
  name: 'Денисов Авраам Пантелеймонович',
  token: '',
  pass: 'admin123',
  groupId: '',
  banned: false,
  bannedReason: '',
  role: ADMIN,
  errorExists: false,
  errorText: '',
  logged: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    authReq: (
      state,
      { payload }: PayloadAction<{ email: string; password: string }>,
    ) => {
      const { email, password } = payload;
      state.email = email;
      state.pass = password;
    },
    getStudent: (
      state,
      { payload }: PayloadAction<{ email: string; password: string }>,
    ) => {
      return studentInitialState;
    },
    getTeacher: (
      state,
      { payload }: PayloadAction<{ email: string; password: string }>,
    ) => {
      return teachertInitialState;
    },
    // getAdmin: (
    //   state,
    //   { payload }: PayloadAction<{ email: string; password: string }>,
    // ) => {
    //   return adminInitialState;
    // },
    authResp: (
      state,
      {
        payload,
      }: PayloadAction<{
        token: string;
        id: string;
        name: string;
        email: string;
        password: string;
        groupId: string;
        banned: boolean;
        bannedReason: string;
        roles: any;
      }>,
    ) => {
      const { roles } = payload;
      let userRrole = '';
      if (roles != []) {
        console.log('не пустой');
        if (roles.length == 1) {
          console.log('длинна == 1');
          if (roles[0].value == ADMIN) {
            userRrole = ADMIN;
          } else if (roles[0].value == TEACHER) {
            userRrole = TEACHER;
          } else if (roles[0].value == STUDENT) {
            userRrole = STUDENT;
          } else if (roles[0].value == USER) {
            userRrole = USER;
          } else {
            userRrole = 'error';
          }
        } else if (roles.length > 1) {
          console.log('длинна > 1');
          let num = roles.length;
          num = num - 1;
          const dataRole = roles[num];
          console.log(dataRole.value);
          if (dataRole.value == ADMIN) {
            console.log('выдан админ');
            userRrole = ADMIN;
          } else if (dataRole.value == TEACHER) {
            userRrole = TEACHER;
          } else if (dataRole.value == STUDENT) {
            userRrole = STUDENT;
          } else if (dataRole.value == USER) {
            userRrole = USER;
          } else {
            userRrole = 'error';
          }
        } else {
          userRrole = 'error';
        }
      } else {
        userRrole = USER;
      }

      const userNewState: User = {
        id: `${payload.id}`,
        email: payload.email,
        name: payload.name,
        token: payload.token,
        pass: payload.password,
        groupId: `${payload.groupId}`,
        banned: payload.banned,
        bannedReason: payload.bannedReason,
        role: userRrole,
        errorExists: false,
        errorText: '',
        logged: true,
      };
      return userNewState;
    },
  },
});
