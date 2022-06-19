import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import Post from '../components/Post';
import { State } from '../type';
import addBtn from '../../assets/img/add.png';
import { Field, useForm } from 'react-hook-form';
import send from '../assets/img/send.png';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPostReqActionCreator } from '../store/saga/Post/actions';
import fs from 'fs';

const schema = yup.object().shape({
  files: yup.mixed().test('required', 'pls select file', value => {
    return value && value.length;
  }),
});

function AddNewPostScreen() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [img, setImg] = useState('');
  const user = useSelector((state: State) => state.user);
  const posts = useSelector((state: State) => state.post);
  const comments = useSelector((state: State) => state.comment);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: any) {
    // console.log(data);
    dispatch(
      createPostReqActionCreator({
        text: data.title,
        title: data.content,
        idUser: user.id,
        image: data.files[0],
      }),
    );
  }

  const postForm = (
    <div className="">
      <form className="add-post__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="add-post__form-lable">Заголовок новости:</div>
        <input
          {...register('title')}
          name="title"
          type="text"
          className="add-post__form-input"
        />
        <div className="add-post__form-lable">Текст новости:</div>
        <textarea
          {...register('content')}
          name="content"
          className="add-post__form-area"
        />
        <input
          {...register('files')}
          type="file"
          className="add-post__form-file"
        />

        <button type="submit" className="add-post__form-button">
          <img
            src={send}
            alt="send"
            id="image"
            className="add-post__form-button-img"
          />
        </button>
      </form>
      <img src={img} alt="" className="add-post__dwld-img" />
    </div>
  );

  return (
    <div className="home">
      <header>
        <Header title="Новости" isBack={false} backRoute={''} />
      </header>
      <main className="main">
        <Navigator />
        <div className="content">
          <div className="add-post">
            <div className="add-post__head">Добавить новость:</div>
            {postForm}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddNewPostScreen;
