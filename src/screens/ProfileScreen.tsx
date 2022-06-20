import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import { State } from '../type';
import { useNavigate, useParams } from 'react-router-dom';
import SudentProfile from '../components/SudentProfile';
import { ADMIN, USER, STUDENT, TEACHER, SIGNIN } from '../type/constants';
import TeacherProfile from '../components/TeacherProfile';

function ProfileScreen() {
  const navigate = useNavigate();
  const authorized = useSelector((state: State) => state.user.logged);
  useEffect(() => {
    if (!authorized) {
      navigate(SIGNIN);
    }
  });
  const { id } = useParams();
  const users = useSelector((state: State) => state.users);
  const user = users.find(item => item.id == id);

  let content = <></>;
  if (user) {
    if (user.role == STUDENT) {
      content = <SudentProfile id={user.id} />;
    } else if (user.role == TEACHER) {
      content = <TeacherProfile id={user.id} />;
    }
  } else {
    content = <div className="profile__error">Профиль недоступен</div>;
  }
  return (
    <div className="home">
      <header>
        <Header title="Профиль" isBack={false} backRoute={''} />
      </header>
      <main className="main">
        <Navigator />
        <div className="content">{content}</div>
      </main>
    </div>
  );
}

export default ProfileScreen;
