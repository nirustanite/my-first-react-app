import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import LightSwitch from "./components/LightSwitch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Title content ="Hello React"/>
          <LightSwitch />
        </main>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Codassieur</h2>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
