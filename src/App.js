import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import Clock from './components/clock/Main';
import Weather from './components/weather/Main';
import RssReader from './components/rssReader/Main';
=======
import Clock from './components/clock/Main';
import Weather from './components/weather/Main';
import logo from './logo.svg';
import './App.css';

>>>>>>> b682124d1f2437bc2837856cb1bf357d3a3c287f
class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header>
          <Clock />
          <Weather />
        </header>
        <footer>
          <RssReader />
        </footer>
=======
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Clock />
        <Weather />
>>>>>>> b682124d1f2437bc2837856cb1bf357d3a3c287f
      </div>
    );
  }
}

export default App;
