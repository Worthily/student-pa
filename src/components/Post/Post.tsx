import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State, Post, Comment } from '../../type';
import postImg from '../../assets/img/postImg.jpg';
import author from '../../assets/img/Avatar.png';
import Comments from '../Comment/Comment';
import CreateCommentForm from '../CreateCommentForm';
import { API_LINK } from '../../type/constants';

function PostItem(props: { post: Post; comments: Comment[] }) {
  const users = useSelector((state: State) => state.users);
  const user = users.find(item => {
    return item.id == props.post.userId;
  });
  const elements = props.comments.map(item => {
    return (
      <li key={item.id}>
        <Comments comment={item} />
      </li>
    );
  });
  return (
    <div className="post">
      <div className="post__author">
        <img src={author} alt="" className="post__author-img" />
        <div className="post__author-text-wrapper">
          <div className="post__author-name">{user?.name}</div>
          <div className="post__author-date">{props.post.time}</div>
        </div>
      </div>
      <div className="post__title">{props.post.title}</div>
      <div className="post__text">{props.post.content}</div>
      <div className="post__img-wrapper">
        <img
          src={`http://student-account-api.space//${props.post.image}`}
          alt="post img"
          className="post__img"
        />
      </div>
      <div className="">
        <CreateCommentForm postId={props.post.id} />
      </div>
      <ul className="post__comments">{elements}</ul>
    </div>
  );
}

export default PostItem;
