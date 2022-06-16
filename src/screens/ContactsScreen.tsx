import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import { State } from '../type';

function ContactsScreen() {
  // console.log('404');
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
