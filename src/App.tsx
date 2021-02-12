import React from 'react';
import './App.css';

import logo from './logo-stacked.svg';

import ArtistWall from './components/ArtistWall';

function App() {
  return (
    <div className="App">
      <ArtistWall />
      <div className="App__container">
        <header className="App__logo">
          <img src={logo} className="logo" alt="Hipcharts" />
        </header>
        <div className="Intro">
          <h1 className="Intro__title">Create and share charts of your favourite music</h1>
          <footer className="Intro__action">
            <button className="btn">Create chart</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
