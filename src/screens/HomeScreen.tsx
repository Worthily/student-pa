import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import Post from '../components/Post';
import { State } from '../type';

function HomeScreen() {
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
  return (
    <div className="home">
      <header>
        <Header title="Новости" isBack={false} backRoute={''} />
      </header>
      <main className="main">
        <Navigator />
        <div className="content">
          <ul className="posts">{elements}</ul>
        </div>
      </main>
    </div>
  );
}

export default HomeScreen;
