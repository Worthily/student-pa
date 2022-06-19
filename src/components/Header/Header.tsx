import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../type';
import logoPng from '../../assets/img/logo.png';
import goBackPng from '../../assets/img/back.png';
import userImg from '../../assets/img/Avatar.png';

function Header(props: { title: string; isBack: boolean; backRoute: string }) {
  const userName = useSelector((state: State) => state.user.name);
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logoPng} alt="logo" className="header__logo-img" />
        </div>
        <div className="header__title">
          <div className="header__title-wrapper">
            <div className="header__title-button">
              <img
                src={goBackPng}
                alt="back"
                className="header__title-button-img"
              />
            </div>
            <div className="header__title-text">{props.title}</div>
          </div>
          <div className="header__user">
            <div className="header__user-text">{userName}</div>
            <div className="header__user-img-wrapper">
              <img src={userImg} alt="" className="header__user-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
