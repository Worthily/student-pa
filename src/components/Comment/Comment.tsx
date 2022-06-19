import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Comment, State } from '../../type';
import author from '../../assets/img/Avatar.png';

function Comments(props: { comment: Comment }) {
  const users = useSelector((state: State) => state.users);
  const user = users.find(item => {
    return item.id == props.comment.userId;
  });

  return (
    <div className="comment">
      <img src={author} alt="img" className="comment__img" />
      <div className="comment__wrapper">
        <div className="comment__text">{user?.name}</div>
        <div className="comment__content">{props.comment.text}</div>
        <div className="comment__time">{props.comment.time}</div>
      </div>
    </div>
  );
}

export default Comments;
