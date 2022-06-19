import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector } from 'react-redux';
import { State } from '../../type';
import downImg from '../../assets/img/down.png';
import upImg from '../../assets/img/up.png';
import { Link } from 'react-router-dom';
import { ANSWERSFORTASK, STUDENTPROGRESS } from '../../type/constants';

function TeacherTeachingScreen() {
  const user = useSelector((state: State) => state.user);
  const users = useSelector((state: State) => state.users);
  const disciplines = useSelector((state: State) => state.discipline);
  const workload = useSelector((state: State) =>
    state.workload.filter(item => item.teacherId == user.id),
  );
  const exersizes = useSelector((state: State) =>
    state.exersize.filter(exer => exer.userId == user.id),
  );

  const allGroups = useSelector((state: State) => state.group);

  const groups = allGroups.filter(group => {
    return workload.find(wld => wld.groupId == group.id);
  });
  console.log(user);
  console.log(workload);
  console.log(exersizes);
  console.log(allGroups);
  console.log(groups);

  const elements = workload.map(wld => {
    const group = groups.find(grp => grp.id == wld.groupId);
    const discipline = disciplines.find(dis => dis.id == wld.disciplineId);

    if (group && discipline) {
      const groupExersize = exersizes.filter(
        exer => exer.disciplineId == discipline.id && exer.groupId == group.id,
      );
      const exersizeItems = groupExersize.map(item => {
        return (
          <div key={item.id} className="teaching__teacher-tasks-item">
            <div className="teaching__teacher-tasks-item-title">
              Тема: {item.title}
            </div>
            <div className="teaching__teacher-tasks-item-task">
              <div className="teaching__teacher-tasks-item-task-text">
                Описание:
              </div>
              {item.content}
            </div>
            <div className="teaching__teacher-tasks-item-file">
              Файл: {item.file}
            </div>
            <div className="teaching__teacher-tasks-item-answers">
              <Link
                to={`${ANSWERSFORTASK}/task/${item.id}`}
                className="teaching__teacher-tasks-item-answers-link">
                Ответы...
              </Link>
            </div>
          </div>
        );
      });
      return (
        <div key={group.id} className="teaching__teacher-item">
          <div className="teaching__teacher-item-header">
            <div className="teaching__teacher-item-header-group">
              Группа: {group.value}
            </div>
            <div className="teaching__teacher-item-header-discip">
              Дисциплина: {discipline.value}
            </div>
          </div>
          <div className="teaching__teacher-tasks">
            <div className="teaching__teacher-tasks-title">Задания:</div>
            <div className="teaching__teacher-tasks-wrapper">
              {exersizeItems}
            </div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  });

  return <div className="teaching__teacher">{elements}</div>;
}

export default TeacherTeachingScreen;
