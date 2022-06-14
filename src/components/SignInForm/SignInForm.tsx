import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { authentActionCreator } from '../../store/actions';
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
            dispatch(
              authentActionCreator({
                email: formObj.email,
                password: formObj.password,
              }),
            );
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
