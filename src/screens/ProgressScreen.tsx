import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import { State } from '../type';
import StudentProgressScreen from '../components/StudentProgressScreen';
import { ADMIN, TEACHER, STUDENT, USER } from '../type/constants';
import TeacherProgressScreen from '../components/TeacherProgressScreen';

function ProgressScreen() {
  const user = useSelector((state: State) => state.user);
  let content = <></>;
  if (user.role == STUDENT) {
    content = <StudentProgressScreen />;
  } else if (TEACHER) {
    content = <TeacherProgressScreen />;
  }
  return (
    <div className="home">
      <header>
        <Header title="Успеваемость" isBack={false} backRoute={''} />
      </header>
      <main className="main">
        <Navigator />
        <div className="content">{content}</div>
      </main>
    </div>
  );
}

export default ProgressScreen;
