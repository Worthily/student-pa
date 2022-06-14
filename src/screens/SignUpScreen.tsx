import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME, SIGNIN, SIGNUP } from '../type/constants';
import SignUpForm from '../components/SignUpForm';
import { useSelector } from 'react-redux';
import { State } from '../type';

function SignUpScreen() {
  // console.log('404');
  const authorized = useSelector((state: State) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (authorized) {
      navigate(HOME);
    }
  });
  return (
    <div className="signupscreen__wrapper">
      <div className="signupscreen__form-wrapper">
        <div className="signupscreen__header-wrapper">
          <h1 className="signupscreen__header">Регистрация</h1>
        </div>
        <SignUpForm />
        <div className="signupscreen__links">
          <div
            className="signupscreen__link"
            onClick={() => {
              navigate(SIGNIN);
            }}>
            Вход
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpScreen;
