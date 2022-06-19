import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import upImg from '../assets/img/up.png';
import { State } from '../type';
import StudentTeachingScreen from '../components/StudentTeachingScreen';
import { STUDENT, TEACHER } from '../type/constants';
import TeacherTeachingScreen from '../components/TeacherTeachingScreen';

function TeachingScreen() {
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
