import React from 'react';
import logo from './logo.svg';
import './App.css';
const { ipcRenderer } = require('electron');


export default class App extends React.Component {

  runcall(){
    window.ipcRenderer.send('callmyname', {name:123});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={ ()=>this.runcall() }>Goooooo</button>
        </header>
      </div>
    );
  }
}

