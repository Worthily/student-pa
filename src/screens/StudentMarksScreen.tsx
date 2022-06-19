import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Comment, State } from '../type';
import author from '../../assets/img/Avatar.png';
import userImg from '../../assets/img/Avatar.png';
import { Link, useParams } from 'react-router-dom';
import { TEACHING } from '../type/constants';
import Header from '../components/Header';
import Navigator from '../components/Navigator';

function StudentMarksScreen() {
  const { idUser, idDis } = useParams();
  // const user = useSelector((state: State) => state.user);
  const user = useSelector((state: State) =>
    state.users.find(us => us.id == idUser),
  );
  const users = useSelector((state: State) => state.users);
  const exersize = useSelector((state: State) => state.exersize);
  const answers = useSelector((state: State) =>
    state.answerExersize.filter(item => item.studentId == user?.id),
  );
  const group = useSelector((state: State) =>
    state.group.filter(item => item.id == user?.groupId),
  );

  const discipline = useSelector((state: State) =>
    state.discipline.find(dis => dis.id == idDis),
  );

  const marks = useSelector((state: State) =>
    state.mark.filter(item => item.studentId == user?.id),
  );

  let disMarks = marks.filter(mark => {
    if (mark.disciplineId == discipline?.id) {
      return mark;
    }
  });

  let marksElements = <></>;

  if (disMarks.length !== 0) {
    const disMarksElements = disMarks.map(item => {
      const teacher = users.find(user => user.id == item.teacherId);
      const userGroup = group.find(grp => grp.id == user?.groupId);
      const exers = exersize.find(exer => exer.id == item.exersizeId);
      const answer = answers.find(ans => ans.exerciseId == exers?.id);
      return (
        <div key={item.id} className="progress__marks-item">
          <div className="progress__marks-item-wrapper">
            <div className="progress__marks-item-task">
              Оценка за: {exers?.title}
            </div>
            <div className="progress__marks-item-group">
              Для группы: {userGroup?.value}
            </div>
            <div className="progress__marks-item-teacher">
              Преподаватель: {teacher?.name}
            </div>
            <div className="progress__marks-item-answer">
              Ответ на задание: {answer?.content}
            </div>
            <div className="progress__marks-item-value">
              Оценка: {item.value}
            </div>
          </div>
        </div>
      );
    });

    marksElements = (
      <div key={discipline?.id} className="progress__marks-disс-item">
        <div className="progress__marks-disc">
          Дисциплина: {discipline?.value}
        </div>
        <div className="progress__marks-wrapper">{disMarksElements}</div>
      </div>
    );
  } else {
    marksElements = <li key={discipline?.id}></li>;
  }
  return (
    <div className="home">
      <header>
        <Header title="Успеваемость" isBack={false} backRoute={''} />
      </header>
      <main className="main">
        <Navigator />
        <div className="content">{marksElements}</div>
      </main>
    </div>
  );
}

export default StudentMarksScreen;
