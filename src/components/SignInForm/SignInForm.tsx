import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  authReqActionCreator,
  getStudentActionCreator,
  getTeacherActionCreator,
  // getAdminActionCreator,
} from '../../store/saga/User/actions';
import { State } from '../../type';

function SignInForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const signInError = useSelector((state: State) => state.user.errorText);
  return (
    <Form
      onSubmit={(formObj: { email: string; password: string }) => {
        if (formObj.email && formObj.password) {
          if (formObj.email.trim() !== '' && formObj.password.trim() !== '') {
            if (
              formObj.email == 'student@mail.ru' &&
              formObj.password == 'student3540'
            ) {
              console.log('student');
              dispatch(
                getStudentActionCreator({
                  email: formObj.email,
                  password: formObj.password,
                }),
              );
            } else if (
              formObj.email == 'teacher@mail.ru' &&
              formObj.password == 'teacher3540'
            ) {
              dispatch(
                getTeacherActionCreator({
                  email: formObj.email,
                  password: formObj.password,
                }),
              );
            } else {
              console.log(formObj.email);
              console.log(formObj.password);
              dispatch(
                authReqActionCreator({
                  email: formObj.email,
                  password: formObj.password,
                }),
              );
            }
          } else {
            setError('Заполните полe ввода');
          }
        } else {
          setError('Заполните полe ввода');
        }
      }}
      render={({ handleSubmit }) => (
        <div className="signinform__form">
          <Field name="email">
            {({ input }) => (
              <input
                placeholder="Почта"
                type="text"
                className="signinform__input"
                {...input}
              />
            )}
          </Field>
          <Field name="password">
            {({ input }) => (
              <input
                placeholder="Пароль"
                className="signinform__input"
                type="password"
                {...input}
              />
            )}
          </Field>
          <button className="signinform__button" onClick={handleSubmit}>
            Вход
          </button>
          {error == '' ? (
            <></>
          ) : (
            <div className="signinform__error">{error}</div>
          )}
          {signInError == '' ? (
            <></>
          ) : (
            <div className="signinform__error">{signInError}</div>
          )}
        </div>
      )}
    />
  );
}

export default SignInForm;
