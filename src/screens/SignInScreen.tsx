import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME, SIGNIN, SIGNUP } from '../type/constants';
import SignInForm from '../components/SignInForm';
import { useSelector } from 'react-redux';
import { State } from '../type';

function SignInScreen() {
  const navigate = useNavigate();
  const authorized = useSelector((state: State) => state.user.logged);
  useEffect(() => {
    if (authorized) {
      navigate(HOME);
    }
  });
  return (
    <div className="signinscreen__wrapper">
      <div className="signinscreen__form-wrapper">
        <div className="signinscreen__header-wrapper">
          <h1 className="signinscreen__header">Авторизация</h1>
        </div>
        <SignInForm />
        <div className="signinscreen__links">
          <div
            className="signinscreen__link"
            onClick={() => {
              navigate(SIGNUP);
            }}>
            Регистрация
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInScreen;
