import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';
import { State } from '../type';
import addBtn from '../assets/img/add.png';
import { ADDNEWPOST, ADMIN, SIGNIN } from '../type/constants';
import Navigator from '../components/Navigator';

function HomeScreen() {
  const navigate = useNavigate();
  const authorized = useSelector((state: State) => state.user.logged);
  useEffect(() => {
    if (!authorized) {
      navigate(SIGNIN);
    }
  });

  const user = useSelector((state: State) => state.user);
  const posts = useSelector((state: State) => state.post);
  const comments = useSelector((state: State) => state.comment);
  const elements = posts.map(item => {
    const postComments = comments.filter(comment => {
      return comment.postId == item.id;
    });
    return (
      <li key={item.id}>
        <Post post={item} comments={postComments} />
      </li>
    );
  });
  const addPost = (
    <div className="add-post__wrapper">
      <div className="add-post__title">Добавить новость</div>
      <Link to={ADDNEWPOST} className="add-post__link">
        <img src={addBtn} alt="add" className="add-post__link-img" />
      </Link>
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
          {user.role == ADMIN ? (
            <div className="add-post">{addPost}</div>
          ) : (
            <></>
          )}
          <ul className="posts">{elements}</ul>
        </div>
      </main>
    </div>
  );
}

export default HomeScreen;
