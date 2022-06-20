import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import { State } from '../type';
import { SIGNIN } from '../type/constants';

function ContactsScreen() {
  const navigate = useNavigate();
  const authorized = useSelector((state: State) => state.user.logged);
  useEffect(() => {
    if (!authorized) {
      navigate(SIGNIN);
    }
  });
  return (
    <div className="home">
      <header>
        <Header title="Контакты" isBack={false} backRoute={''} />
      </header>
      <main className="main">
        <Navigator />
        <div className="content"></div>
      </main>
    </div>
  );
}

export default ContactsScreen;
