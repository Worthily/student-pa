import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { State } from '../../type';
import {
  HOME,
  ABOUTUS,
  SPECIALTYLIST,
  CONTACTS,
  PROGRESS,
  TEACHING,
  PROFILE,
} from '../../type/constants';
import homePng from '../../assets/img/home.png';
import userImg from '../../assets/img/Avatar.png';
import stdyImg from '../../assets/img/stdy.png';
import marksImg from '../../assets/img/marks.png';
import contactsImg from '../../assets/img/contacts.png';
import specImg from '../../assets/img/spec.png';
import aboutImg from '../../assets/img/about.png';
import signOut from '../../assets/img/sign-out.png';
import { exitProfileActionCreator } from '../../store/saga/User/actions';

function Navigator() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  const screens = [
    {
      id: '1',
      screen: 'Новости',
      route: HOME,
      img: homePng,
    },
    {
      id: '2',
      screen: 'Успеваемость',
      route: PROGRESS,
      img: marksImg,
    },
    {
      id: '3',
      screen: 'Обучение',
      route: TEACHING,
      img: stdyImg,
    },
    {
      id: '4',
      screen: 'Специальности',
      route: SPECIALTYLIST,
      img: specImg,
    },
    {
      id: '5',
      screen: 'Контакты',
      route: CONTACTS,
      img: contactsImg,
    },
    {
      id: '6',
      screen: 'О нас',
      route: ABOUTUS,
      img: aboutImg,
    },
  ];

  const elements = screens.map(item => {
    return (
      <div key={item.id} className="navigator__item">
        <div
          onClick={() => {
            navigate(item.route);
          }}
          className="navigator__item-link">
          <img src={item.img} alt="icon" className="navigator__item-img" />
          <div className="navigator__item-text">{item.screen}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="navigator">
      <div className="navigator__container">
        <div className="navigator__item">
          <div
            onClick={() => {
              navigate(`${PROFILE}/${user.id}`);
            }}
            className="navigator__item-profile-link">
            <img
              src={userImg}
              alt="icon"
              className="navigator__item-profile-img"
            />
            <div className="navigator__item-profile-text">Мой профиль</div>
          </div>
        </div>
        {elements}
        <div
          onClick={() => {
            dispatch(exitProfileActionCreator());
          }}
          className="navigator__item-exit">
          <img src={signOut} alt="icon" className="navigator__item-img" />
          <div className="navigator__item-exit-text">Выход</div>
        </div>
      </div>
    </div>
  );
}

export default Navigator;
