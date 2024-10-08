import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DEMO app with <code>Node.js</code> server.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React :)
        </a>
        <Main/>
      </header>
    </div>
  );
}

export default App;
