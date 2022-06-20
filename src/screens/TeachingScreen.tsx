import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import upImg from '../assets/img/up.png';
import { State } from '../type';
import StudentTeachingScreen from '../components/StudentTeachingScreen';
import { SIGNIN, STUDENT, TEACHER } from '../type/constants';
import TeacherTeachingScreen from '../components/TeacherTeachingScreen';
import { useNavigate } from 'react-router';

function TeachingScreen() {
  const navigate = useNavigate();
  const authorized = useSelector((state: State) => state.user.logged);
  useEffect(() => {
    if (!authorized) {
      navigate(SIGNIN);
    }
  });
  const user = useSelector((state: State) => state.user);
  console.log(user.role);
  let elements = <></>;
  if (user.role == STUDENT) {
    elements = <StudentTeachingScreen />;
  } else if (user.role == TEACHER) {
    elements = <TeacherTeachingScreen />;
  }
  return (
    <div className="home">
      <header>
        <Header title="Обучение" isBack={false} backRoute={''} />
      </header>
      <main className="main">
        <Navigator />
        <div className="content">{elements}</div>
      </main>
    </div>
  );
}

export default TeachingScreen;
