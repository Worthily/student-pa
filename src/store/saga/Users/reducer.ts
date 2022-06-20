import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Users } from '../../../type';
import { ADMIN, USER, STUDENT, TEACHER } from '../../../type/constants';

export const usersInitialState: Users[] = [
  {
    id: '0',
    name: 'Денисов Авраам Пантелеймонович',
    groupId: '',
    banned: false,
    bannedReason: '',
    role: ADMIN,
  },
  {
    id: '7',
    name: 'Кабанов Алексей Улебович',
    groupId: '',
    banned: false,
    bannedReason: '',
    role: TEACHER,
  },
  {
    id: '2',
    name: 'Орлов Любомир Созонович',
    groupId: '',
    banned: false,
    bannedReason: '',
    role: TEACHER,
  },
  {
    id: '3',
    name: 'Волков Лев Геласьевич',
    groupId: '0',
    banned: false,
    bannedReason: '',
    role: STUDENT,
  },
  {
    id: '4',
    name: 'Михеев Руслан Семенович',
    groupId: '0',
    banned: false,
    bannedReason: '',
    role: STUDENT,
  },
  {
    id: '5',
    name: 'Зуев Семен Лаврентьевич',
    groupId: '1',
    banned: false,
    bannedReason: '',
    role: STUDENT,
  },
  {
    id: '10',
    name: 'Антонов Альфред Митрофанович',
    groupId: '1',
    banned: false,
    bannedReason: '',
    role: STUDENT,
  },
  {
    id: '6',
    name: 'Авраам Пантмо',
    groupId: '',
    banned: false,
    bannedReason: '',
    role: ADMIN,
  },
  {
    id: '11',
    name: 'Мамонтов Виктор Петрович',
    groupId: '2',
    banned: false,
    bannedReason: '',
    role: STUDENT,
  },
  {
    id: '8',
    name: 'Иванков Влад',
    groupId: '2',
    banned: false,
    bannedReason: '',
    role: STUDENT,
  },
  {
    id: '9',
    name: 'Воронов Аверкий Юрьевич',
    groupId: '',
    banned: false,
    bannedReason: '',
    role: USER,
  },
];

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getUsersReq: state => {},
    getUsersResp: (state, { payload }: PayloadAction<Users[]>) => {
      return [...payload];
    },
    usersSetRoleReq: (
      state,
      { payload }: PayloadAction<{ value: string; userId: number }>,
    ) => {},
    usersSetRoleResp: (state, { payload }: PayloadAction<Users>) => {
      return [...state, payload];
    },
    usersSetGroupReq: (
      state,
      { payload }: PayloadAction<{ value: string; userId: number }>,
    ) => {},
    usersSetGroupResp: (state, { payload }: PayloadAction<Users>) => {
      return [...state, payload];
    },
  },
});
