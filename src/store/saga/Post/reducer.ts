import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Post, User } from '../../../type';
import { STUDENT } from '../../../type/constants';

export const postInitialState: Post[] = [
  {
    id: '0',
    title: 'Добро пожаловать в личный кабинет студента!',
    content:
      'Также как начало повседневной работы по формированию позиции говорит о возможностях дальнейших направлений развития. А также элементы политического процесса, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований.',
    image: 'Новость1.png',
    userId: '0',
    time: '12 Января 2021',
  },
  {
    id: '1',
    title: 'Новость 2',
    content:
      'Как уже неоднократно упомянуто, некоторые особенности внутренней политики разоблачены. Учитывая ключевые сценарии поведения, понимание сути ресурсосберегающих технологий, в своём классическом представлении, допускает внедрение экспериментов, поражающих по своей масштабности и грандиозности.',
    image: 'Новость2.png',
    userId: '0',
    time: '15 Января 2021',
  },
  {
    id: '2',
    title: 'Новость 3',
    content:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянный количественный рост и сфера нашей активности напрямую зависит от анализа существующих паттернов поведения. Но реплицированные с зарубежных источников, современные исследования, инициированные исключительно синтетически, разоблачены.',
    image: 'Новость3.png',
    userId: '0',
    time: '19 Января 2021',
  },
];

export const postSlice = createSlice({
  name: 'post',
  initialState: postInitialState,
  reducers: {
    getPostsReq: state => {},
    getPostsResp: (state, { payload }: PayloadAction<Post[]>) => {
      return [...payload];
    },
    createPostReq: (
      state,
      {
        payload,
      }: PayloadAction<{
        text: string;
        title: string;
        idUser: string;
        image: any;
      }>,
    ) => {},
    createPostResp: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        content: string;
        title: string;
        userId: string;
        img: string;
        time: string;
      }>,
    ) => {
      const newPost: Post = {
        id: payload.id,
        content: payload.content,
        title: payload.title,
        userId: `${payload.userId}`,
        image: payload.img,
        time: payload.time,
      };
      const newState = [...state, newPost];
      return newState;
    },
  },
});
