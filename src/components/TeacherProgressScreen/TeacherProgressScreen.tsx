import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Comment, State } from '../../type';
import author from '../../assets/img/Avatar.png';
import userImg from '../../assets/img/Avatar.png';
import { Link, useParams } from 'react-router-dom';
import { STUDENTPROGRESS, TEACHING } from '../../type/constants';

function TeacherProgressScreen() {
  const user = useSelector((state: State) => state.user);

  const users = useSelector((state: State) => state.users);
  const disciplines = useSelector((state: State) => state.discipline);
  const allGroups = useSelector((state: State) => state.group);
  const workload = useSelector((state: State) =>
    state.workload.filter(item => item.teacherId == user.id),
  );
  const groups = allGroups.filter(group => {
    return workload.find(wld => wld.groupId == group.id);
  });
  const marks = useSelector((state: State) => state.mark);

  const elements = workload.map(wld => {
    const group = groups.find(grp => grp.id == wld.groupId);
    const discipline = disciplines.find(dis => dis.id == wld.disciplineId);

    if (group && discipline) {
      const groupUsers = users.filter(usr => usr.groupId == group.id);
      const studentList = groupUsers.map(student => {
        const studentMarks = marks.filter(
          mark =>
            mark.disciplineId == discipline.id &&
            mark.groupId == group.id &&
            mark.studentId == student.id,
        );

        let avgMark = 0;
        studentMarks.map(mark => {
          avgMark += parseInt(mark.value);
        });
        avgMark = avgMark / studentMarks.length;

        return (
          <div key={student.id} className="student-progress__item">
            <div className="student-progress__item-name">{student.name}</div>
            <div className="student-progress__item-avg">
              Средняя оценка по предмету: {avgMark}
            </div>
            <div className="student-progress__link">
              <Link
                to={`${STUDENTPROGRESS}/discipline/${discipline.id}/user/${student.id}`}
                className="student-progress__link">
                Оценки...
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
            <div className="teaching__teacher-tasks-title">Успеваемость:</div>
            <div className="student-progress">{studentList}</div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  });

  return <div className="teaching__teacher">{elements}</div>;
}

export default TeacherProgressScreen;
