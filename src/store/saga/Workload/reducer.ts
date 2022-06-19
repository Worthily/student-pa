import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Workload } from '../../../type';

export const workloadInitialState: Workload[] = [
  {
    id: '0',
    disciplineId: '0',
    groupId: '0',
    teacherId: '7',
  },
  {
    id: '1',
    disciplineId: '1',
    groupId: '0',
    teacherId: '2',
  },
  {
    id: '2',
    disciplineId: '0',
    groupId: '1',
    teacherId: '7',
  },
  {
    id: '3',
    disciplineId: '1',
    groupId: '1',
    teacherId: '2',
  },
  {
    id: '4',
    disciplineId: '0',
    groupId: '2',
    teacherId: '7',
  },
  {
    id: '5',
    disciplineId: '1',
    groupId: '2',
    teacherId: '2',
  },
];

export const workloadSlice = createSlice({
  name: 'workload',
  initialState: workloadInitialState,
  reducers: {},
});
