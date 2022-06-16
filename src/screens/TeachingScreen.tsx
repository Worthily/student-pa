import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import downImg from '../assets/img/down.png';
import upImg from '../assets/img/up.png';
import { State } from '../type';

function TeachingScreen() {
  const user = useSelector((state: State) => state.user);
  const users = useSelector((state: State) => state.users);
  const discipline = useSelector((state: State) => state.discipline);
  const marks = useSelector((state: State) =>
    state.mark.filter(item => item.studentId == user.id),
  );
  const exersize = useSelector((state: State) =>
    state.exersize.filter(item => item.groupId == user.groupId),
  );
  const answers = useSelector((state: State) =>
    state.answerExersize.filter(item => item.studentI == user.id),
  );

  const elements = discipline.map(discip => {
    const exersizes = exersize.filter(ex => {
      return ex.disciplineId == discip.id;
    });

    if (exersizes.length !== 0) {
      const answeredExersizes = exersizes.filter(ansEx => {
        const answerEx = answers.find(ans => ans.exerciseId == ansEx.id);
        if (answerEx) {
          return ansEx;
        }
      });
      const notAnsweredExersizes = exersizes.filter(ansEx => {
        const answerEx = answers.find(ans => ans.exerciseId == ansEx.id);
        if (!answerEx) {
          return ansEx;
        }
      });
      let answeredExersizesElements: JSX.Element[] = [];
      let notAnsweredExersizesElements: JSX.Element[] = [];

      if (answeredExersizes.length) {
        answeredExersizesElements = answeredExersizes.map(ansEx => {
          const teach = users.find(item => item.id == ansEx.userId);
          return (
            <div key={ansEx.id} className="teaching__discipline-done-item">
              <div className="teaching__discipline-done-item-title">
                {ansEx.title}
              </div>
              <div className="teaching__discipline-done-item-teach">
                {teach?.name}
              </div>
              <div className="teaching__discipline-done-item-task">
                {ansEx.content}
              </div>
              <div className="teaching__discipline-done-item-file">
                {ansEx.file}
              </div>
            </div>
          );
        });
      } else {
        answeredExersizesElements = [];
      }

      if (notAnsweredExersizes.length) {
        notAnsweredExersizesElements = notAnsweredExersizes.map(ansEx => {
          const teach = users.find(item => item.id == ansEx.userId);

          return (
            <div key={ansEx.id} className="teaching__discipline-done-item">
              <div className="teaching__discipline-done-item-title">
                Задание: {ansEx.title}
              </div>
              <div className="teaching__discipline-done-item-teach">
                Преподаватель: {teach?.name}
              </div>
              <div className="teaching__discipline-done-item-task">
                {ansEx.content}
              </div>
              <div className="teaching__discipline-done-item-file">
                Скачать: {ansEx.file}
              </div>
            </div>
          );
        });
      } else {
        notAnsweredExersizesElements = [];
      }

      return (
        <div key={discip.id} className="teaching__discipline">
          <div className="teaching__discipline-title">
            <div className="teaching__discipline-title-text">
              {discip.value}
            </div>
            <div className="teaching__discipline-title-button">
              <img
                src={upImg}
                alt="up"
                className="teaching__discipline-title-button-img"
              />
            </div>
          </div>
          {notAnsweredExersizesElements.length !== 0 ? (
            <div className="teaching__discipline-not-done">
              <div className="teaching__discipline-not-done-wrapper">
                <div className="teaching__discipline-not-done-wrapper-text">
                  Текущие
                </div>
                <img
                  src={upImg}
                  alt=""
                  className="teaching__discipline-not-done-wrapper-img"
                />
              </div>
              {notAnsweredExersizesElements}
            </div>
          ) : (
            <></>
          )}
          {answeredExersizesElements.length !== 0 ? (
            <div className="teaching__discipline-not-done">
              <div className="teaching__discipline-not-done-wrapper">
                <div className="teaching__discipline-not-done-wrapper-text">
                  Выполненные
                </div>
                <img
                  src={upImg}
                  alt=""
                  className="teaching__discipline-not-done-wrapper-img"
                />
              </div>
              {answeredExersizesElements}
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    } else {
      return <div key={discip.id}></div>;
    }
  });
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
