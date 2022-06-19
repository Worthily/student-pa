import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { User, Comment } from '../../../type';
import { STUDENT } from '../../../type/constants';

export const commentInitialState: Comment[] = [
  {
    id: '0',
    text: 'Являясь всего лишь частью общей картины, акционеры крупнейших компаний набирают популярность среди определенных слоев населения, а значит, должны быть обнародованы.',
    userId: '7',
    postId: '0',
    time: '19 Января 2021',
  },
  {
    id: '1',
    text: 'Сложно сказать, почему независимые государства могут быть обнародованы.',
    userId: '2',
    postId: '0',
    time: '19 Января 2021',
  },
  {
    id: '2',
    text: 'Но высококачественный прототип будущего проекта является качественно новой ступенью дальнейших направлений развития.',
    userId: '4',
    postId: '0',
    time: '19 Января 2021',
  },
  {
    id: '3',
    text: 'Имеется спорная точка зрения, гласящая примерно следующее: предприниматели в сети интернет формируют глобальную экономическую сеть и при этом — ассоциативно распределены по отраслям.',
    userId: '3',
    postId: '0',
    time: '19 Января 2021',
  },
  {
    id: '4',
    text: 'Имеется спорная точка зрения, гласящая примерно следующее: действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов.',
    userId: '7',
    postId: '1',
    time: '19 Января 2021',
  },
  {
    id: '5',
    text: 'Являясь всего лишь частью общей картины.',
    userId: '6',
    postId: '1',
    time: '19 Января 2021',
  },
  {
    id: '6',
    text: 'Значимость этих проблем настолько очевидна',
    userId: '7',
    postId: '1',
    time: '19 Января 2021',
  },
  {
    id: '7',
    text: 'А также элементы политического процесса',
    userId: '8',
    postId: '2',
    time: '19 Января 2021',
  },
];

export const commentSlice = createSlice({
  name: 'comment',
  initialState: commentInitialState,
  reducers: {
    createCommentReq: (
      state,
      {
        payload,
      }: PayloadAction<{ text: string; idUser: string; idPost: string }>,
    ) => {
      console.log('cr Comm');
    },
    createCommentResp: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        text: string;
        idUser: string;
        idPost: string;
        time: string;
      }>,
    ) => {
      const newComment: Comment = {
        id: `${payload.id}`,
        text: 'А также элементы политического процесса',
        userId: `${payload.idUser}`,
        postId: `${payload.idPost}`,
        time: payload.time,
      };
    },
  },
});
