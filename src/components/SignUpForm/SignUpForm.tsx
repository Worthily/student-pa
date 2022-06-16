import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { registrActionCreator } from '../../store/actions';
import { State } from '../../type';

function SignUpForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const signUpError = useSelector((state: State) => state.user.errorText);
  return (
    <Form
      onSubmit={(formObj: {
        password: string;
        name: string;
        email: string;
      }) => {
        if (formObj.name && formObj.password) {
          if (formObj.email.trim() !== '' && formObj.password.trim() !== '') {
            dispatch(
              registrActionCreator({
                password: formObj.password,
                name: formObj.name,
                email: formObj.email,
              }),
            );
            console.log('true');
          } else {
            setError('Заполните поля ввода');
          }
        } else {
          setError('Заполните поля ввода');
        }
      }}
      render={({ handleSubmit }) => (
        <div className="signupform__form">
          <Field name="name">
            {({ input }) => (
              <input
                placeholder="ФИО"
                className="signupform__input"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="email">
            {({ input }) => (
              <input
                placeholder="Почта"
                type="text"
                className="signupform__input"
                {...input}
              />
            )}
          </Field>
          <Field name="password">
            {({ input }) => (
              <input
                placeholder="Пароль"
                className="signupform__input"
                type="password"
                {...input}
              />
            )}
          </Field>
          <button className="signupform__button" onClick={handleSubmit}>
            ОК
          </button>
          {error == '' ? (
            <></>
          ) : (
            <div className="signinform__error">{error}</div>
          )}
          {signUpError == '' ? (
            <></>
          ) : (
            <div className="signinform__error">{signUpError}</div>
          )}
        </div>
      )}
    />
  );
}
export default SignUpForm;
