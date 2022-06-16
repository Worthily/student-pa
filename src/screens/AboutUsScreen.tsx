import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import { State } from '../type';

function AboutUsScreen() {
  // console.log('404');
  return (
    <div className="home">
      <header>
        <Header title="О нас" isBack={false} backRoute={''} />
      </header>
      <main className="main">
        <Navigator />
        <div className="content"></div>
      </main>
    </div>
  );
}

export default AboutUsScreen;
