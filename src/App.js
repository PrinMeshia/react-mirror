import React, { Component } from 'react';
import './App.css';
import Clock from './components/clock/Main';
import Weather from './components/weather/Main';
import RssReader from './components/rssReader/Main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Clock />
          <Weather />
        </header>
        <footer>
          <RssReader />
        </footer>
      </div>
    );
  }
}

export default App;
