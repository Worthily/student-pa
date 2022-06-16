import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import { State } from '../type';

function ProgressScreen() {
  const user = useSelector((state: State) => state.user);
  const users = useSelector((state: State) => state.users);
  const exersize = useSelector((state: State) => state.exersize);
  const answers = useSelector((state: State) =>
    state.answerExersize.filter(item => item.studentI == user.id),
  );
  const discipline = useSelector((state: State) => state.discipline);
  const group = useSelector((state: State) =>
    state.group.filter(item => item.id == user.groupId),
  );
  const marks = useSelector((state: State) =>
    state.mark.filter(item => item.studentId == user.id),
  );

  let status: {
    id: string;
    disName: string;
    disMarks: { val: string; key: string }[];
    marksExsists: boolean;
  }[] = [];

  let newMarkExists = false;

  discipline.map(item => {
    let newMarks: { val: string; key: string }[] = [];

    let disMarks = marks.filter(mark => {
      if (mark.disciplineId == item.id) {
        return mark;
      }
    });

    if (disMarks) {
      disMarks.map(item => {
        newMarks.push({ val: item.value, key: item.exersizeId });
        newMarkExists = true;
      });
    }

    let arrItem = [
      {
        id: item.id,
        disName: item.value,
        disMarks: newMarks,
        marksExsists: newMarkExists,
      },
    ];

    status.push(...arrItem);
  });

  const statusElements = status.map(item => {
    if (item.disMarks.length !== 0) {
      let avgDisMark = 0;
      const disMarksElements = item.disMarks.map(item => {
        avgDisMark = avgDisMark + parseInt(item.val);
        return (
          <div key={item.key} className="progress__status-marks-item">
            {item.val}
          </div>
        );
      });

      avgDisMark = avgDisMark / item.disMarks.length;
      return (
        <li key={item.id} className="progress__status-item">
          <div className="progress__status-disc">{item.disName}</div>
          <div className="progress__status-avg">Средний балл: {avgDisMark}</div>
          <div className="progress__status-marks-wrapper">
            <div className="progress__status-lable">Оценки:</div>
            <div className="progress__status-marks">{disMarksElements}</div>
          </div>
        </li>
      );
    } else {
      return <div key={item.id}></div>;
    }
  });

  const marksElements = discipline.map(item => {
    let disMarks = marks.filter(mark => {
      if (mark.disciplineId == item.id) {
        return mark;
      }
    });
    if (disMarks.length !== 0) {
      const disMarksElements = disMarks.map(item => {
        const teacher = users.find(user => user.id == item.teacherId);
        const userGroup = group.find(grp => grp.id == user.groupId);
        const exers = exersize.find(exer => exer.id == item.exersizeId);
        const answer = answers.find(ans => ans.exerciseId == exers?.id);
        return (
          <div key={item.id} className="progress__marks-item">
            <div className="progress__marks-item-wrapper">
              <div className="progress__marks-item-task">
                Оценка за: {exers?.title}
              </div>
              <div className="progress__marks-item-teacher">
                От преподавателя - {teacher?.name}
              </div>
              <div className="progress__marks-item-group">
                Для группы: {userGroup?.value}
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

      return (
        <li key={item.id} className="progress__marks-disс-item">
          <div className="progress__marks-disc">Дисциплина: {item.value}</div>
          <div className="progress__marks-wrapper">{disMarksElements}</div>
        </li>
      );
    } else {
      return <li key={item.id}></li>;
    }
  });

  return (
    <div className="home">
      <header>
        <Header title="Успеваемость" isBack={false} backRoute={''} />
      </header>
      <main className="main">
        <Navigator />
        <div className="content">
          <div className="progress__status-wrapper">
            <div className="progress__status-title">Оценки по предметам:</div>
            <ul className="progress__status">{statusElements}</ul>
          </div>
          <div className="progress__avg">
            <div className="progress__avg-title">Оценки:</div>
            <ul className="progress__avg-marks">{marksElements}</ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProgressScreen;
