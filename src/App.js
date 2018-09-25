import React, { Component } from 'react';
import Clock from './components/clock/Main';
import Weather from './components/weather/Main';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Clock />
        <Weather />
      </div>
    );
  }
}

export default App;
