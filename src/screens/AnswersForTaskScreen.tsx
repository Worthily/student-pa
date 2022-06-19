import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import { State } from '../type';

function AnswersForTaskScreen() {
  const { id } = useParams();

  const user = useSelector((state: State) => state.user);
  const users = useSelector((state: State) => state.users);
  const tasks = useSelector((state: State) => state.exersize);
  const answers = useSelector((state: State) => state.answerExersize);
  const marks = useSelector((state: State) => state.mark);
  const group = useSelector((state: State) => state.group);

  let elements = <></>;

  if (id) {
    const taskAnsw = answers.filter(answ => answ.exerciseId == id);
    const task = tasks.find(tsk => tsk.id == id);

    const answersElements = taskAnsw.map(answer => {
      const student = users.find(stu => stu.id == answer.studentId);

      const mark = marks.find(mrk => mrk.id == answer.id);

      let markElement = <></>;

      if (mark) {
        markElement = (
          <div className="answers__elements-item-mark">
            Оценка: {mark.value}
          </div>
        );
      } else {
        markElement = (
          <div className="answers__elements-item-lnk">
            Оценить ответ ученика
          </div>
        );
      }

      return (
        <div key={answer.id} className="answers__elements-item">
          <div className="answers__elements-item-name">
            Ученик: {student?.name}
          </div>
          <div className="answers__elements-item-answ">
            Ответ: {answer.content}
          </div>
          <div className="answers__elements-item-file">Файл: {answer.file}</div>
          {markElement}
        </div>
      );
    });

    let infoElement: JSX.Element = <></>;

    const studentGroup = group.find(grp => grp.id == task?.groupId);

    if (studentGroup) {
      const groupStudents = users.filter(usr => usr.groupId == studentGroup.id);

      const infoElementItem = groupStudents.map(grpStudent => {
        const isAnswered = answers.find(
          answr =>
            answr.studentId == grpStudent.id && answr.exerciseId == task?.id,
        );
        if (isAnswered) {
          return (
            <div
              key={grpStudent.id}
              className="answers__info-element-item-good">
              <div className="answers__info-element-item-good-student">
                Ученик: {grpStudent.name}
              </div>
              <div className="answers__info-element-item-good-status">
                Сдал задание
              </div>
            </div>
          );
        } else {
          return (
            <div key={grpStudent.id} className="answers__info-element-item">
              <div className="answers__info-element-item-student">
                Ученик: {grpStudent.name}
              </div>
              <div className="answers__info-element-item-status">
                Не сдал задание
              </div>
            </div>
          );
        }
      });
      infoElement = (
        <div className="answers__info-element">
          <div className="answers__info-element-title">Список учеников:</div>
          {infoElementItem}
        </div>
      );
    }
    elements = (
      <div className="answers">
        <div className="answers__head">
          <div className="answers__head-title">Ответы на задание:</div>
          <div className="answers__head-descr">{task?.title}</div>
        </div>
        <div className="answers__info">{infoElement}</div>
        <div className="answers__elements">
          <div className="answers__elements-descr">Ответы учеников:</div>
          {answersElements}
        </div>
      </div>
    );
  } else {
    elements = (
      <div className="">Ошибка страницы: Ошибка данных адресной строки</div>
    );
  }

  return (
    <div className="home">
      <header>
        <Header title="Новости" isBack={false} backRoute={''} />
      </header>
      <main className="main">
        <Navigator />
        <div className="content">{elements}</div>
      </main>
    </div>
  );
}

export default AnswersForTaskScreen;
